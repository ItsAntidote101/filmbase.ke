import Link from "next/link";

// REPLACE: Update social links with actual Filmbase social media URLs
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-[0.15em] text-white block mb-4">
              FILMBASE
            </span>
            {/* REPLACE: swap text logo above with: <img src="/logo-white.png" alt="Filmbase Technology" className="h-8 w-auto mb-4" /> */}
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
              Kenya&apos;s first specialist in transparent LED display screens and switchable
              smart glass. Delivered and installed across all 47 counties.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/30 hover:text-white transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest block mb-4">
              Products
            </span>
            <ul className="flex flex-col gap-3">
              {[
                { label: "LED Film Screen", href: "/led-film" },
                { label: "LED Crystal Film", href: "/led-crystal-film" },
                { label: "Switchable Smart Glass", href: "/switchable-glass" },
                { label: "Overview", href: "/overview" },
                { label: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest block mb-4">
              Contact
            </span>
            <address className="not-italic flex flex-col gap-3">
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Diamond Homes, Othaya Road,<br />
                Kileleshwa, Nairobi, Kenya
              </p>
              <a
                href="mailto:info@filmbasetechnology.co.ke"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
              >
                info@filmbasetechnology.co.ke
              </a>
              <a
                href="tel:+254727808264"
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
              >
                +254 727 808 264
              </a>
              <span className="text-sm text-white/30 font-light">
                Showroom: by appointment
              </span>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-light">
            &copy; 2026 Filmbase Technology Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/15 font-light">
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
