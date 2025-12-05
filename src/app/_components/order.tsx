export default function OrdersPage() {
  return (
    <div className="space-y-4 md:space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Заказы
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Поток заказов и статусы
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded-full bg-slate-900/80 px-3 py-1.5 font-medium text-slate-100">
            Экспорт
          </button>
          <button className="rounded-full bg-slate-50 px-3 py-1.5 font-semibold text-slate-950">
            + Новый заказ
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Всего", value: "1 284", sub: "+12.4% WoW", tone: "text-emerald-300" },
          { label: "В обработке", value: "182", sub: "Среднее время: 14 мин", tone: "text-sky-200" },
          { label: "Отменено", value: "24", sub: "-2.1% WoW", tone: "text-amber-200" },
          { label: "Возвраты", value: "9", sub: "Средний чек: ₽ 4 210", tone: "text-rose-200" },
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
            <p className={`text-xs ${item.tone}`}>{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 shadow-lg shadow-black/40">
        <div className="border-b border-white/5 px-4 py-3.5 sm:px-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Лента заказов
              </p>
              <p className="mt-1 text-sm text-slate-200">Последние 10</p>
            </div>
            <button className="rounded-full bg-slate-900/80 px-3 py-1.5 text-[0.75rem] font-medium text-slate-100">
              Фильтры
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-xs text-slate-200">
            <thead>
              <tr>
                {["ID", "Клиент", "Сумма", "Статус", "Способ", "Дата"].map((col) => (
                  <th
                    key={col}
                    className="border-b border-white/10 bg-slate-950/80 px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400 first:pl-5 last:pr-5"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#4021", name: "ООО «ЛайтСофт»", total: "₽ 54 900", status: "В обработке", method: "Карта", date: "Сегодня, 11:20" },
                { id: "#4020", name: "ИП «Маркет+»", total: "₽ 18 300", status: "Доставлено", method: "Онлайн", date: "Сегодня, 10:48" },
                { id: "#4019", name: "ООО «Крафт»", total: "₽ 9 990", status: "Отменено", method: "Карта", date: "Сегодня, 09:55" },
                { id: "#4018", name: "ООО «Сфера»", total: "₽ 72 400", status: "Доставлено", method: "Б/н", date: "Вчера, 19:10" },
              ].map((row, idx) => (
                <tr
                  key={row.id}
                  className={`transition hover:bg-slate-900/60 ${idx !== 0 ? "border-t border-white/5" : ""}`}
                >
                  <td className="px-4 py-3 text-[0.78rem] font-medium text-slate-50 first:pl-5">
                    {row.id}
                  </td>
                  <td className="px-4 py-3 text-[0.78rem] text-slate-200">{row.name}</td>
                  <td className="px-4 py-3 text-[0.78rem] font-medium text-slate-50">{row.total}</td>
                  <td className="px-4 py-3 text-[0.78rem]">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${
                        row.status === "Доставлено"
                          ? "bg-emerald-500/15 text-emerald-200"
                          : row.status === "В обработке"
                          ? "bg-amber-500/15 text-amber-100"
                          : "bg-rose-500/15 text-rose-100"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[0.78rem] text-slate-300">{row.method}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[0.78rem] text-slate-400 last:pr-5">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

