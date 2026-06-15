import Link from "next/link";
import Image from "next/image";

import { footer, navbar } from "@/src/content/landing-page";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-16 text-slate-100">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.35fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label={navbar.logo}
            >
              <Image
                src="/brand/usquare-consulting-logo-white.svg"
                alt={navbar.logo}
                width={260}
                height={146}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              {footer.description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>Email: {footer.contact.email}</p>
              <p>Location: {footer.contact.location}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />
        <p className="text-sm text-slate-400">{footer.tagline}</p>
      </div>
    </footer>
  );
}
