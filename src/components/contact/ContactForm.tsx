"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";

import { submitContact } from "@/app/iletisim/actions";
import { Button } from "@/components/ui/Button";
import { initialContactState, UNSURE_SERVICE, type ContactField } from "@/lib/contact/schema";

const input =
  "w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-base text-ink transition-colors duration-(--duration-fast) placeholder:text-mute/70 focus:border-bordo focus:outline-none aria-invalid:border-bordo-bright";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: ContactField;
  label: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={`iletisim-${id}`} className="label-text text-mute">
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal">(isteğe bağlı)</span>}
      </label>
      {children}
      {error && (
        <p id={`iletisim-${id}-hata`} className="mt-2 text-sm text-bordo-bright">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ services }: { services: string[] }) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const errors = state.fieldErrors ?? {};
  const values = state.values ?? {};
  const describedBy = (id: ContactField) => (errors[id] ? `iletisim-${id}-hata` : undefined);

  if (state.status === "success") {
    return (
      <div role="status" className="border-t border-ink pt-10">
        <p className="font-serif text-h3">Teşekkürler.</p>
        <p className="mt-4 max-w-[44ch] text-lead text-mute">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="grid gap-10 sm:grid-cols-2 sm:gap-x-8">
      <Field id="name" label="Ad Soyad" error={errors.name}>
        <input
          id="iletisim-name"
          name="name"
          autoComplete="name"
          required
          defaultValue={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
          className={input}
        />
      </Field>
      <Field id="company" label="Marka / Şirket" error={errors.company} optional>
        <input
          id="iletisim-company"
          name="company"
          autoComplete="organization"
          defaultValue={values.company}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={describedBy("company")}
          className={input}
        />
      </Field>
      <Field id="email" label="E-posta" error={errors.email}>
        <input
          id="iletisim-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          defaultValue={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          className={input}
        />
      </Field>
      <Field id="service" label="İlgilenilen hizmet" error={errors.service}>
        <select
          id="iletisim-service"
          name="service"
          required
          defaultValue={values.service ?? ""}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={describedBy("service")}
          className={`${input} cursor-pointer`}
        >
          <option value="" disabled>
            Seçin
          </option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
          <option>{UNSURE_SERVICE}</option>
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="message" label="Mesajınız" error={errors.message}>
          <textarea
            id="iletisim-message"
            name="message"
            rows={5}
            required
            defaultValue={values.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            placeholder="Markanızı, hedeflerinizi ve zaman planınızı kısaca anlatın."
            className={`${input} resize-y`}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="iletisim-website">Web sitesi</label>
        <input id="iletisim-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="iletisim-consent" className="flex cursor-pointer items-start gap-4 text-sm text-mute">
          <input
            id="iletisim-consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "iletisim-consent-hata" : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-bordo"
          />
          <span>
            <Link href="/kvkk-aydinlatma-metni" className="text-ink underline underline-offset-4 hover:text-bordo">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum. Kişisel verilerimin bu talebe yanıt verilmesi amacıyla işlenmesini kabul ediyorum.
          </span>
        </label>
        {errors.consent && (
          <p id="iletisim-consent-hata" className="mt-2 text-sm text-bordo-bright">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" aria-live="polite" className={`text-sm ${state.status === "error" ? "text-bordo-bright" : "text-mute"}`}>
          {state.status === "error" ? state.message : ""}
        </p>
        <Button type="submit" arrow disabled={pending} className="sm:min-w-56">
          {pending ? "Gönderiliyor…" : "Gönder"}
        </Button>
      </div>
    </form>
  );
}
