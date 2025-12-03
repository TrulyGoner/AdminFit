export default function Home() {
  return (
    <div className="space-y-5 md:space-y-6">
      {/* Top metrics */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 via-slate-950 to-slate-950 p-4 shadow-lg shadow-purple-500/20 sm:p-5">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/40 blur-3xl transition group-hover:translate-x-2 group-hover:-translate-y-1" />
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-100/80">
                Выручка
              </p>
              <p className="text-2xl font-semibold tracking-tight text-slate-50">
                ₽ 1 284 930
              </p>
              <p className="text-xs text-slate-200/80">
                +18.3% за последние 7 дней
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[0.7rem] font-semibold text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                В росте
              </span>
              <span className="text-[0.7rem] text-slate-200/70">
                Средний чек: ₽ 3 240
              </span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-sky-500/25 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-950 p-4 shadow-lg shadow-sky-500/20 sm:p-5">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/40 blur-3xl transition group-hover:translate-x-2 group-hover:-translate-y-1" />
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-100/80">
                Активные пользователи
              </p>
              <p className="text-2xl font-semibold tracking-tight text-slate-50">
                8 420
              </p>
              <p className="text-xs text-slate-200/80">
                542 новых за сегодня
              </p>
            </div>
            <div className="space-y-1 text-right text-xs">
              <span className="inline-flex items-center justify-end gap-1 rounded-full bg-slate-900/60 px-2 py-1 text-[0.7rem] font-medium text-slate-100">
                32% мобильные
              </span>
              <span className="block text-[0.7rem] text-slate-300/80">
                Среднее время сессии: 4.8 мин
              </span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/18 via-slate-950 to-slate-950 p-4 shadow-lg shadow-emerald-500/20 sm:p-5">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/35 blur-3xl transition group-hover:translate-x-2 group-hover:-translate-y-1" />
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-100/80">
                Конверсия
              </p>
              <p className="text-2xl font-semibold tracking-tight text-slate-50">
                4.7%
              </p>
              <p className="text-xs text-slate-200/80">
                +0.6 п.п. по сравнению с прошлой неделей
              </p>
            </div>
            <div className="space-y-1 text-right text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[0.7rem] font-semibold text-emerald-100">
                A/B Тест · Вариант B
              </span>
              <span className="block text-[0.7rem] text-slate-300/80">
                Лучшая воронка: лендинг → демо
              </span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/20 via-slate-950 to-slate-950 p-4 shadow-lg shadow-amber-500/20 sm:p-5">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-400/40 blur-3xl transition group-hover:translate-x-2 group-hover:-translate-y-1" />
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-100/90">
                Удержание
              </p>
              <p className="text-2xl font-semibold tracking-tight text-slate-50">
                76%
              </p>
              <p className="text-xs text-slate-200/85">
                Cohort Retention · Месяц 3
              </p>
            </div>
            <div className="space-y-1 text-right text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-1 text-[0.7rem] font-medium text-slate-100">
                Топ сегмент: SMB
              </span>
              <span className="block text-[0.7rem] text-slate-300/80">
                Риск оттока: 9.2%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Middle: chart + list */}
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/40 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Динамика выручки
              </p>
              <p className="mt-1 text-sm font-medium text-slate-50">
                Последние 30 дней
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] font-medium text-slate-100">
                День
              </button>
              <button className="rounded-full bg-transparent px-3 py-1 text-[0.7rem] font-medium text-slate-400 hover:bg-slate-900/70 hover:text-slate-100">
                Неделя
              </button>
              <button className="rounded-full bg-transparent px-3 py-1 text-[0.7rem] font-medium text-slate-400 hover:bg-slate-900/70 hover:text-slate-100">
                Месяц
              </button>
            </div>
          </div>

          <div className="relative mt-2 h-48 overflow-hidden rounded-xl bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950">
            <div className="absolute inset-0">
              <div className="flex h-full flex-col justify-between px-2 py-3 text-[0.6rem] text-slate-500">
                <span>300k</span>
                <span>200k</span>
                <span>100k</span>
                <span>0</span>
              </div>
              <div className="absolute inset-y-4 left-10 right-3">
                <div className="flex h-full items-end gap-1.5">
                  {[
                    30, 42, 38, 44, 36, 52, 61, 58, 62, 67, 63, 72, 80, 78, 82,
                    88, 92, 87, 90, 94, 98, 100, 96, 98, 100, 95, 98, 100, 92,
                    94,
                  ].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-purple-500/5 via-purple-500/40 to-sky-400/90"
                      style={{ height: `${v}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-x-10 bottom-1 flex justify-between text-[0.6rem] text-slate-500">
              <span>01</span>
              <span>07</span>
              <span>14</span>
              <span>21</span>
              <span>28</span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/40 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Топ сегменты
              </p>
              <p className="mt-1 text-sm font-medium text-slate-50">
                По выручке за 30 дней
              </p>
            </div>
            <button className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium text-slate-100">
              Подробнее
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {[
              {
                name: "SMB SaaS",
                value: "₽ 684 200",
                change: "+21.4%",
                color: "bg-emerald-500",
                width: "w-[86%]",
              },
              {
                name: "Enterprise",
                value: "₽ 382 900",
                change: "+9.8%",
                color: "bg-sky-400",
                width: "w-[63%]",
              },
              {
                name: "E-commerce",
                value: "₽ 218 510",
                change: "+14.1%",
                color: "bg-purple-500",
                width: "w-[48%]",
              },
              {
                name: "Agency",
                value: "₽ 98 320",
                change: "+4.2%",
                color: "bg-amber-400",
                width: "w-[31%]",
              },
            ].map((segment) => (
              <div key={segment.name} className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-[0.75rem]">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${segment.color}`}
                    />
                    <span className="font-medium text-slate-100">
                      {segment.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-100">{segment.value}</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-300">
                      {segment.change}
                    </span>
                  </div>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-900">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-slate-50/80 via-slate-50/90 to-slate-50 ${segment.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom: table */}
      <section className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 shadow-[0_18px_45px_rgba(0,0,0,0.72)]">
        <div className="border-b border-white/5 px-4 py-3.5 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Последние операции
              </p>
              <p className="mt-1 text-sm font-medium text-slate-50">
                24 транзакции за последние 24 часа
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button className="rounded-full bg-slate-900/80 px-3 py-1.5 text-[0.7rem] font-medium text-slate-100">
                Экспорт CSV
              </button>
              <button className="hidden rounded-full border border-white/15 bg-transparent px-3 py-1.5 text-[0.7rem] font-medium text-slate-300 hover:bg-slate-900/60 sm:inline-flex">
                Фильтры
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-xs text-slate-200">
            <thead>
              <tr>
                {["ID", "Клиент", "Статус", "Сумма", "Канал", "Дата"].map(
                  (col) => (
                    <th
                      key={col}
                      className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/90 px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400 first:pl-5 last:pr-5"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#2940",
                  name: "ООО «СеверСтиль»",
                  status: "Успешно",
                  amount: "₽ 128 400",
                  channel: "Web · Checkout",
                  date: "Сегодня, 10:24",
                },
                {
                  id: "#2939",
                  name: "ИП «СмартЛаб»",
                  status: "Ожидает",
                  amount: "₽ 32 990",
                  channel: "API · Integration",
                  date: "Сегодня, 09:51",
                },
                {
                  id: "#2938",
                  name: "ООО «Горизонт Медиа»",
                  status: "Успешно",
                  amount: "₽ 242 700",
                  channel: "Web · Manual",
                  date: "Вчера, 18:09",
                },
                {
                  id: "#2937",
                  name: "ООО «Ритейл+»",
                  status: "Отменено",
                  amount: "₽ 18 300",
                  channel: "Web · Checkout",
                  date: "Вчера, 16:42",
                },
                {
                  id: "#2936",
                  name: "ИП «КрафтМаркет»",
                  status: "Успешно",
                  amount: "₽ 9 990",
                  channel: "Mobile · iOS",
                  date: "Вчера, 12:17",
                },
              ].map((row, idx) => (
                <tr
                  key={row.id}
                  className={`transition hover:bg-slate-900/70 ${
                    idx !== 0 ? "border-t border-white/5" : ""
                  }`}
                >
                  <td className="whitespace-nowrap px-4 py-3 text-[0.78rem] font-medium text-slate-100 first:pl-5">
                    {row.id}
                  </td>
                  <td className="max-w-[220px] px-4 py-3 text-[0.78rem] text-slate-100">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[0.78rem]">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${
                        row.status === "Успешно"
                          ? "bg-emerald-500/15 text-emerald-200"
                          : row.status === "Ожидает"
                          ? "bg-amber-500/15 text-amber-100"
                          : "bg-rose-500/15 text-rose-100"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          row.status === "Успешно"
                            ? "bg-emerald-400"
                            : row.status === "Ожидает"
                            ? "bg-amber-400"
                            : "bg-rose-400"
                        }`}
                      />
                      {row.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[0.78rem] font-medium text-slate-50">
                    {row.amount}
                  </td>
                  <td className="px-4 py-3 text-[0.78rem] text-slate-300">
                    {row.channel}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[0.78rem] text-slate-400 last:pr-5">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
