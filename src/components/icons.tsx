import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12h16m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return <ArrowRightIcon {...props} className={`rotate-180 ${props.className ?? ""}`} />;
}

/** Diagonal arrow used on service cards. */
export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 18 18 6m0 0H8m10 0v10"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="m4 8.5 2.5 2.5L12 5.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 6h18M3 18h18M6 12h11"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m12 2.5 2.94 6.2 6.81.83-5.02 4.68 1.3 6.73L12 17.6l-6.03 3.34 1.3-6.73L2.25 9.53l6.81-.83L12 2.5Z"
      />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#3F84F4"
        d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.9a5.05 5.05 0 0 1-2.19 3.31v2.75h3.54c2.08-1.91 3.25-4.73 3.25-8.07Z"
      />
      <path
        fill="#30AA51"
        d="M12 23c2.96 0 5.45-.98 7.26-2.66l-3.54-2.75c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.28-1.93-6.15-4.53H2.2v2.84A10.99 10.99 0 0 0 12 23Z"
      />
      <path
        fill="#FCBD03"
        d="M5.85 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.2a11 11 0 0 0 0 9.88l3.65-2.84Z"
      />
      <path
        fill="#EA4235"
        d="M12 5.38c1.61 0 3.06.55 4.2 1.64l3.14-3.14A10.53 10.53 0 0 0 12 1 10.99 10.99 0 0 0 2.2 7.06l3.65 2.84C6.72 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M13.4 22v-8.2h2.76l.41-3.2H13.4V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14A22.8 22.8 0 0 0 14.22 4c-2.45 0-4.12 1.5-4.12 4.24v2.36H7.33v3.2h2.77V22h3.3Z"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={2} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M23 7.2a3 3 0 0 0-2.1-2.12C19.04 4.6 12 4.6 12 4.6s-7.04 0-8.9.48A3 3 0 0 0 1 7.2 31.3 31.3 0 0 0 .5 12c0 1.62.17 3.24.5 4.8a3 3 0 0 0 2.1 2.12c1.86.48 8.9.48 8.9.48s7.04 0 8.9-.48A3 3 0 0 0 23 16.8c.33-1.56.5-3.18.5-4.8 0-1.62-.17-3.24-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
      />
    </svg>
  );
}
