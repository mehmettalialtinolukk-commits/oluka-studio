/**
 * Google Analytics 4, loaded only after the visitor accepts analytics cookies.
 *
 * Page views: the config call records the first page; later client-side
 * navigations are recorded by GA4's enhanced measurement ("page changes based
 * on browser history events"). The site sends no page_view of its own, so each
 * page is counted once. gtag.js is added to the page at most once per visit.
 *
 * Privacy: no user ID, form content or other personal data is sent. Google
 * signals and ad personalisation are off, and ad storage stays denied.
 */

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    [disableFlag: `ga-disable-${string}`]: boolean | undefined;
  }
}

let loaded = false;

export function startAnalytics(measurementId: string): void {
  window[`ga-disable-${measurementId}`] = false;

  if (loaded) {
    // Consent given again after being withdrawn during this visit.
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  loaded = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // gtag.js expects the Arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

/** Stops collection and removes the GA cookies (_ga, _ga_<id>). */
export function stopAnalytics(measurementId: string): void {
  window[`ga-disable-${measurementId}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });

  const names = ["_ga", `_ga_${measurementId.replace(/^G-/, "")}`];
  // GA sets its cookies on the widest domain it can (e.g. .oluka.com.tr), so try each level.
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}
