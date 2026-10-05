/** Shared contact form definitions (used by the server action and the form). */

export const contactFields = ["name", "company", "email", "service", "message"] as const;
export type ContactField = (typeof contactFields)[number] | "consent";

export type ContactValues = Record<(typeof contactFields)[number], string>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<ContactValues>;
};

export const initialContactState: ContactState = { status: "idle" };

export const UNSURE_SERVICE = "Henüz emin değilim";
