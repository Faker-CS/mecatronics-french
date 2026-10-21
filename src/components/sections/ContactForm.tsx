"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { Cta } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/cn";
import { anchors, contactSection } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "h-14 w-full rounded-lg bg-black/[0.04] px-6 text-base leading-[19px] text-ink placeholder:text-ink outline-none transition-shadow focus:ring-2 focus:ring-brand/60 [.was-validated_&:invalid]:ring-2 [.was-validated_&:invalid]:ring-brand";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [validated, setValidated] = useState(false);
  const { fields } = contactSection;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setValidated(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id={anchors.contact} className="bg-white pb-20 lg:pb-[100px]">
      <div className="container-site flex flex-col gap-12 lg:gap-[100px]">
        <SectionIntro
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          intro={contactSection.intro}
          titleClassName="max-w-[548px]"
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          <form
            noValidate
            onSubmit={handleSubmit}
            className={cn("flex flex-1 flex-col gap-5 sm:px-4", validated && "was-validated")}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="firstName">{fields.firstName}</label>
              <input id="firstName" name="firstName" required autoComplete="given-name" placeholder={fields.firstName} className={fieldClass} />
              <label className="sr-only" htmlFor="lastName">{fields.lastName}</label>
              <input id="lastName" name="lastName" required autoComplete="family-name" placeholder={fields.lastName} className={fieldClass} />
            </div>
            <label className="sr-only" htmlFor="phone">{fields.phone}</label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={fields.phone} className={fieldClass} />
            <label className="sr-only" htmlFor="email">{fields.email}</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder={fields.email} className={fieldClass} />
            <label className="sr-only" htmlFor="postalCode">{fields.postalCode}</label>
            <input
              id="postalCode"
              name="postalCode"
              required
              inputMode="numeric"
              pattern="\d{5}"
              autoComplete="postal-code"
              placeholder={fields.postalCode}
              className={fieldClass}
            />
            <label className="sr-only" htmlFor="message">{fields.message}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={fields.message}
              className={cn(fieldClass, "h-[142px] resize-none py-6")}
            />

            <label className="flex cursor-pointer items-start">
              <span className="relative p-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="peer absolute inset-2 size-6 cursor-pointer opacity-0"
                />
                <span className="grid size-6 place-items-center rounded border border-brand text-transparent transition-colors peer-checked:bg-brand peer-checked:text-snow peer-focus-visible:ring-2 peer-focus-visible:ring-brand/60 [.was-validated_&]:peer-invalid:ring-2 [.was-validated_&]:peer-invalid:ring-brand">
                  <CheckIcon className="size-4" />
                </span>
              </span>
              <span className="p-2 font-nav text-sm leading-[17px] font-medium text-ink">
                {contactSection.consent}
              </span>
            </label>

            <div className="flex flex-col items-end gap-3 py-2">
              <Cta type="submit" disabled={status === "sending"} className="uppercase">
                {status === "sending" ? "Envoi…" : contactSection.submit}
              </Cta>
              <p aria-live="polite" className="text-right text-sm font-medium">
                {status === "sent" && <span className="text-green-700">{contactSection.success}</span>}
                {status === "error" && (
                  <span className="text-brand">
                    Une erreur est survenue. Veuillez réessayer ou nous appeler.
                  </span>
                )}
              </p>
            </div>
          </form>

          <div className="relative hidden aspect-[444/624] w-[444px] shrink-0 overflow-hidden rounded-2xl lg:block">
            <Image
              src={contactSection.image}
              alt="Technicien Mecatronic Center au travail sur un pare-brise"
              fill
              sizes="(min-width: 1024px) 444px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
