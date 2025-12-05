"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  badge?: string;
};

export default function SidebarNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1 text-sm">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
              isActive
                ? "bg-slate-800/60 font-medium text-slate-50 shadow-sm shadow-slate-900/40 ring-1 ring-white/5"
                : "text-slate-300 hover:bg-slate-800/40 hover:text-white"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-slate-900/70 ${
                isActive ? "border-white/10" : ""
              }`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={16}
                height={16}
                className="opacity-85"
              />
            </span>
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge ? (
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-300">
                {item.badge}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

