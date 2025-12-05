export default function ReportsPage() {
  return (
    <div className="space-y-4 md:space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Отчёты
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Аналитика и экспорт данных
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded-full bg-slate-900/80 px-3 py-1.5 font-medium text-slate-100">
            Экспорт PDF
          </button>
          <button className="rounded-full bg-slate-50 px-3 py-1.5 font-semibold text-slate-950">
            Сгенерировать
          </button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { label: "MRR", value: "₽ 4.2M", sub: "+7.1% MoM" },
          { label: "LTV", value: "₽ 38 200", sub: "ARPU: ₽ 4 850" },
          { label: "CAC", value: "₽ 6 140", sub: "Payback: 2.3 мес" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/30"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
              {item.value}
            </p>
            <p className="text-xs text-emerald-300">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 shadow-lg shadow-black/40">
        <div className="border-b border-white/5 px-4 py-3.5 sm:px-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Готовые отчёты
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Последние 6 экспортов
              </p>
            </div>
            <button className="rounded-full bg-slate-900/80 px-3 py-1.5 text-[0.75rem] font-medium text-slate-100">
              Архив
            </button>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {[
            { name: "Финансовый отчёт · Q2", type: "PDF", size: "2.8 MB", date: "Сегодня, 09:12" },
            { name: "Когортный анализ · Апрель", type: "CSV", size: "640 KB", date: "Вчера, 19:45" },
            { name: "Отток · Сегменты", type: "XLSX", size: "1.2 MB", date: "Вчера, 17:10" },
            { name: "MRR + Churn · Еженедельно", type: "PDF", size: "1.1 MB", date: "Пн, 10:02" },
            { name: "Отдел продаж · KPI", type: "PDF", size: "3.4 MB", date: "Пт, 18:22" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5"
            >
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-slate-50">{item.name}</p>
                <p className="text-[0.8rem] text-slate-300">
                  {item.type} · {item.size}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[0.78rem] text-slate-400">
                <span>{item.date}</span>
                <button className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium text-slate-100">
                  Скачать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

