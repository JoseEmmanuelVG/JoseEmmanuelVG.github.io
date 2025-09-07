import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/rpa", label: "RPA" },
  { href: "/publications", label: "Publications" },
  { href: "https://bonzopedia.com", label: "Blog", external: true },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-sm font-semibold">JEVG</Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="hover:underline underline-offset-4" href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
