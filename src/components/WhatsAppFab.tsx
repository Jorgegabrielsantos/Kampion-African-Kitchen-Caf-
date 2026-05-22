import { INFO } from "@/lib/data";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${INFO.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_oklch(0.7_0.18_150/0.5)] transition-transform hover:scale-110 animate-float"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.27-.14-1.62-.8-1.87-.9-.25-.09-.43-.14-.62.14s-.71.9-.87 1.09c-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.51-1.9-.16-.27-.02-.42.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01a1.02 1.02 0 0 0-.74.34c-.25.27-.95.93-.95 2.28s.98 2.63 1.11 2.81c.14.18 1.92 2.94 4.66 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32zM16.02 4C9.39 4 4 9.39 4 16c0 2.12.55 4.18 1.6 6L4 28l6.21-1.58A12 12 0 1 0 16.02 4zm0 21.82c-1.85 0-3.66-.5-5.24-1.43l-.38-.22-3.69.94.99-3.58-.25-.4A9.9 9.9 0 1 1 16.02 25.82z"/>
      </svg>
    </a>
  );
}
