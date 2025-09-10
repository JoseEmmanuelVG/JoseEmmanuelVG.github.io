import Link from "next/link";

const links = [
  { href: "/", label: "Home", external: false },
  { href: "/projects", label: "Projects", external: false },
  { href: "/rpa", label: "RPA", external: false },
  { href: "/publications", label: "Publications", external: false },
  { href: "https://bonzopedia.com", label: "Blog", external: true },
  { href: "/#contact", label: "Contact", external: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 pointer-events-auto relative">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Mantén Link para la marca si quieres, pero podría ser <a> también */}
        <Link href="/" className="text-sm font-semibold">JEVG</Link>

        <ul className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  {l.label}
                </a>
              ) : (
                // ⚠️ usar <a> directo para export estático
                <a href={l.href} className="hover:underline underline-offset-4">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
