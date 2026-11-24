"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/Button";
import { startAnalytics, stopAnalytics } from "@/lib/analytics";
import {
  type ConsentChoice,
  OPEN_PREFERENCES_EVENT,
  openConsentPreferences,
  readConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";

type CookieConsentProps = {
  measurementId: string;
  /** False outside the live site: the banner still works, but nothing is sent to Google. */
  analyticsEnabled: boolean;
};

/** undefined on the server and during hydration: the banner renders nothing until the stored choice is known. */
const serverSnapshot = () => undefined;

/**
 * Cookie banner (bottom left) and the switch that starts or stops Google
 * Analytics. Analytics never loads before the visitor accepts.
 */
export function CookieConsent({ measurementId, analyticsEnabled }: CookieConsentProps) {
  const choice = useSyncExternalStore<ConsentChoice | null | undefined>(subscribeConsent, readConsent, serverSnapshot);
  const [reopened, setReopened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!analyticsEnabled) return;
    if (choice === "granted") startAnalytics(measurementId);
    else if (choice === "denied") stopAnalytics(measurementId);
  }, [choice, analyticsEnabled, measurementId]);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  // Opened from the footer link: move focus into the banner.
  useEffect(() => {
    if (reopened) panelRef.current?.focus();
  }, [reopened]);

  const visible = choice === null || (choice !== undefined && reopened);
  if (!visible) return null;

  const decide = (next: ConsentChoice) => {
    saveConsent(next);
    setReopened(false);
  };

  return (
    <div
      ref={panelRef}
      role="region"
      aria-labelledby="cerez-baslik"
      tabIndex={-1}
      className="fixed inset-x-4 bottom-4 z-40 border border-line bg-paper p-6 text-ink shadow-[0_18px_50px_-20px_rgb(20_17_16/0.45)] outline-none sm:inset-x-auto sm:left-6 sm:bottom-6 sm:w-[24rem]"
    >
      <p id="cerez-baslik" className="label-text flex items-center gap-3 text-mute">
        <span aria-hidden="true" className="h-px w-8 bg-bordo" />
        Çerez tercihi
      </p>
      <p className="mt-4 text-sm leading-relaxed">
        Siteyi geliştirmek için analiz çerezleri (Google Analytics) kullanmak istiyoruz. İzin vermezseniz analiz
        çerezi kullanılmaz.{" "}
        <Link href="/gizlilik-politikasi" className="border-b border-current hover:text-bordo">
          Çerez Politikası
        </Link>
      </p>
      <div className="mt-6 flex gap-3">
        <Button variant="outline" className="flex-1 px-4" onClick={() => decide("denied")}>
          Reddet
        </Button>
        <Button className="flex-1 px-4" onClick={() => decide("granted")}>
          Kabul et
        </Button>
      </div>
    </div>
  );
}

/** Footer link that shows the banner again so the choice can be changed. */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={`cursor-pointer text-left ${className}`} onClick={openConsentPreferences}>
      Çerez tercihleri
    </button>
  );
}
