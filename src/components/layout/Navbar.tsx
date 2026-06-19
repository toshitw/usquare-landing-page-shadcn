"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

import { navbar } from "@/src/content/landing-page";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex min-w-fit items-center"
          aria-label={navbar.logo}
        >
          <Image
            src="/brand/usquare-consulting-logo.svg"
            alt={navbar.logo}
            width={260}
            height={70}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navbar.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" className="gap-2">
            <Link href={navbar.cta.href}>
              {navbar.cta.label}
              <ArrowRight className="animated-icon size-4" />
            </Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open navigation">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 text-left">
                <Image
                  src="/brand/usquare-consulting-logo.svg"
                  alt={navbar.logo}
                  width={260}
                  height={70}
                  className="h-12 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-2">
              {navbar.links.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </Button>
              ))}
              <Button asChild className="mt-4 justify-start gap-2">
                <Link href={navbar.cta.href} onClick={() => setIsOpen(false)}>
                  {navbar.cta.label}
                  <ArrowRight className="animated-icon size-4" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
