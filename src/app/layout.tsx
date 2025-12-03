import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Modern admin panel UI built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Обзор", icon: "/Dashboard.svg", active: true, badge: "LIVE" },
    { label: "Пользователи", icon: "/user.svg" },
    { label: "Заказы", icon: "/product.svg" },
    { label: "Отчёты", icon: "/analytics.svg" },
    { label: "Настройки", icon: "/settings.svg" },
  ];

  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative flex min-h-screen">
            {/* Sidebar */}
            <aside className="hidden border-r border-white/5 bg-slate-950/60 p-4 backdrop-blur-xl md:flex md:w-64 md:flex-col lg:w-72">
              <div className="mb-6 flex items-center gap-3 px-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500 via-sky-500 to-emerald-400 shadow-lg shadow-purple-500/40">
                  <span className="text-sm font-semibold tracking-tight text-white">
                    ADM
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">
                    Nova Admin
                  </div>
                  <div className="text-xs text-slate-400">
                    Панель управления
                  </div>
                </div>
              </div>

              <nav className="space-y-1 text-sm">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                      item.active
                        ? "bg-slate-800/60 font-medium text-slate-50 shadow-sm shadow-slate-900/40 ring-1 ring-white/5"
                        : "text-slate-300 hover:bg-slate-800/40 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-slate-900/70 ${
                        item.active ? "border-white/10" : ""
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
                  </button>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-6">
                <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/15 via-slate-950 to-slate-950 px-3.5 py-3 text-xs text-slate-200 shadow-lg shadow-purple-500/20">
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-50">
                      Pro аккаунт
                    </span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-medium text-purple-100">
                      -30%
                    </span>
                  </div>
                  <p className="mb-2 text-[0.7rem] text-slate-300">
                    Откройте доступ к продвинутой аналитике, сегментам и
                    экспорту данных.
                  </p>
                  <button className="inline-flex items-center justify-center rounded-xl bg-white px-2.5 py-1.5 text-[0.7rem] font-semibold text-slate-950 shadow-sm shadow-slate-900/20 transition hover:bg-slate-100">
                    Обновить
                  </button>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-900/60 p-3 text-xs text-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 text-[0.75rem] font-semibold text-slate-100">
                    AG
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.8rem] font-medium text-slate-50">
                      Admin User
                    </div>
                    <div className="text-[0.7rem] text-slate-400">
                      admin@example.com
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                    Online
                  </span>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex min-h-screen flex-1 flex-col">
              <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/60 px-4 py-3 backdrop-blur-xl md:px-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-xs font-medium text-slate-200 shadow-sm shadow-slate-950/40 md:hidden">
                    ☰
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                      Дашборд
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      <span className="text-[0.68rem] text-emerald-300">
                        Обновлено сейчас
                      </span>
                    </div>
                    <h1 className="mt-1 text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
                      Обзор ключевых метрик
                    </h1>
                  </div>
                  <div className="hidden items-center gap-2 md:flex">
                    <button className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-slate-950/40 hover:bg-slate-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      В реальном времени
                    </button>
                    <button className="inline-flex items-center justify-center rounded-xl bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-slate-900/40 hover:bg-white">
                      + Создать
                    </button>
                  </div>
                </div>
              </header>

              <main className="flex-1 px-4 py-5 md:px-6 md:py-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
