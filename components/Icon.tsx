const paths: Record<string, React.ReactNode> = {
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4M8 4h8" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  store: (
    <>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9a2.5 2.5 0 005 0 2.5 2.5 0 005.0 0 2.5 2.5 0 005 0" />
      <path d="M5 11.5V20h14v-8.5M9.5 20v-5h5v5" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="17.5" cy="5.5" r="2.6" />
      <circle cx="17.5" cy="18.5" r="2.6" />
      <path d="M8.4 10.8l6.8-4M8.4 13.2l6.8 4" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.5l2 11h10l2-7.5H7" />
      <circle cx="9.5" cy="19" r="1.4" />
      <circle cx="16" cy="19" r="1.4" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9l9-5.5L21 9H3z" />
      <path d="M5 9v8M9.7 9v8M14.3 9v8M19 9v8M3 20h18" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V9l5.5 3.5V9l5.5 3.5V5H20v15H3z" />
      <path d="M7 16.5h2M12 16.5h2" />
    </>
  ),
  health: (
    <>
      <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0112 7a4.3 4.3 0 017.5 3c0 5.4-7.5 10-7.5 10z" />
      <path d="M9.5 12h2l1-2 1.5 3.5 1-1.5h1.5" />
    </>
  ),
  edu: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" />
      <path d="M6.5 11.2V16c0 1.2 2.6 2.5 5.5 2.5s5.5-1.3 5.5-2.5v-4.8M21.5 9v5" />
    </>
  ),
  gov: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c-2.5 2.4-3.8 5.3-3.8 8.5s1.3 6.1 3.8 8.5c2.5-2.4 3.8-5.3 3.8-8.5S14.5 5.9 12 3.5z" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  spark: (
    <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
  ),
  arrow: <path d="M5 12h13m-5-6l6 6-6 6" />,
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
