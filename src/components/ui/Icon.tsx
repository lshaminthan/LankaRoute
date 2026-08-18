import type { SVGProps } from "react";

export type IconName =
  | "landmark"
  | "waves"
  | "mountain"
  | "utensils"
  | "paw"
  | "leaf"
  | "check"
  | "bus"
  | "train"
  | "tuktuk"
  | "bed"
  | "clock"
  | "mapPin"
  | "menu"
  | "close"
  | "chevronRight"
  | "chevronDown"
  | "chat"
  | "star"
  | "mail"
  | "phone"
  | "arrowRight"
  | "sparkles"
  | "route"
  | "headset"
  | "compass"
  | "flag"
  | "calendar"
  | "facebook"
  | "instagram"
  | "youtube"
  | "users"
  | "radar"
  | "search"
  | "paperclip"
  | "microphone"
  | "user"
  | "lock"
  | "shield"
  | "userPlus";

const paths: Record<IconName, React.ReactNode> = {
  landmark: (
    <>
      <path d="M3 21h18" />
      <path d="M4 21V10M20 21V10" />
      <path d="M2 10l10-6 10 6" />
      <path d="M8 21v-7M12 21v-7M16 21v-7" />
    </>
  ),
  waves: (
    <>
      <path d="M2 8c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 14c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    </>
  ),
  mountain: (
    <>
      <path d="M2 20l7-12 4 6 2-3 7 9z" />
      <circle cx="8" cy="6" r="1.6" />
    </>
  ),
  utensils: (
    <>
      <path d="M6 2v8a2 2 0 0 0 4 0V2M8 10v12" />
      <path d="M17 2c-1.5 0-3 1.5-3 4s1.5 4 3 4v10" />
    </>
  ),
  paw: (
    <>
      <circle cx="6" cy="9" r="1.7" />
      <circle cx="11" cy="6" r="1.7" />
      <circle cx="16" cy="6" r="1.7" />
      <circle cx="20" cy="9" r="1.7" />
      <path d="M13 12c3 0 6 2.2 6 5.2 0 2.2-1.8 3.3-4 3.3-1 0-1.5-.5-2-.5s-1 .5-2 .5c-2.2 0-4-1.1-4-3.3 0-3 3-5.2 6-5.2z" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C10 4 4 10 4 18c0 .6.4 2 .4 2s1.4 0 2-.4C12 20 20 14 20 4z" />
      <path d="M5 19c4-4 8-8 14-14" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  bus: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M3 11h18" />
      <circle cx="7.5" cy="19" r="1.4" />
      <circle cx="16.5" cy="19" r="1.4" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14" />
      <circle cx="9" cy="14.5" r="1.1" />
      <circle cx="15" cy="14.5" r="1.1" />
      <path d="M8 21l-2 2M16 21l2 2" />
    </>
  ),
  tuktuk: (
    <>
      <path d="M4 16V9a2 2 0 0 1 2-2h5l4 5h3a2 2 0 0 1 2 2v2" />
      <circle cx="7" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
      <path d="M4 16h15" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18v2M21 18v2" />
      <path d="M3 13h18" />
      <rect x="5" y="9" width="6" height="4" rx="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  close: <path d="M5 5l14 14M19 5L5 19" />,
  chevronRight: <path d="M9 5l7 7-7 7" />,
  chevronDown: <path d="M5 9l7 7 7-7" />,
  chat: (
    <>
      <path d="M4 5h16v11H9l-5 4V5z" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6L12 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 5-2.2 1.8a12 12 0 0 0 5.4 5.4L16 12.5l5 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
  ),
  arrowRight: (
    <>
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3z" />
      <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15z" />
    </>
  ),
  route: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M5 8c0 6 14 2 14 8" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" />
    </>
  ),
  flag: (
    <>
      <path d="M5 3v18" />
      <path d="M5 4h13l-3 4 3 4H5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10 9.5l5 2.5-5 2.5z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.2a3.2 3.2 0 0 1 0 6.2" />
      <path d="M18.5 14.3c2 .7 3.5 2.8 3.5 5.7" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 12L18 7" />
      <path d="M16 12a4 4 0 0 1-4 4" opacity="0.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  paperclip: (
    <path d="M8 12l7-7a3.5 3.5 0 0 1 5 5l-8 8a2 2 0 0 1-3-3l7-7" />
  ),
  microphone: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  shield: <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />,
  userPlus: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M19 8v6M16 11h6" />
    </>
  ),
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
