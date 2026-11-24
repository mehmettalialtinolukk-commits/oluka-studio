/**
 * The visitor's analytics cookie choice, kept in the browser.
 *
 * Nothing is stored until the visitor answers the cookie banner. When the
 * browser blocks storage (e.g. some private windows), the choice is kept in
 * memory for the current visit only.
 */

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "oluka-cerez-tercihi";
const CHANGE_EVENT = "oluka:cerez-tercihi";
/** Fired by the footer link to show the banner again. */
export const OPEN_PREFERENCES_EVENT = "oluka:cerez-tercihleri-ac";

let memoryChoice: ConsentChoice | null = null;

export function readConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") return stored;
  } catch {
    // Storage blocked: fall back to this visit's answer.
  }
  return memoryChoice;
}

export function saveConsent(choice: ConsentChoice): void {
  memoryChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice lasts for this visit only.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Notifies on a choice made in this tab or in another tab of the site. */
export function subscribeConsent(onChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function openConsentPreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
