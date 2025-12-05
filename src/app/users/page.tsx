export default function UsersPage() {
  return (
    <div className="space-y-4 md:space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Пользователи
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Сегменты и активность
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded-full bg-slate-900/80 px-3 py-1.5 font-medium text-slate-100">
            Импорт CSV
          </button>
          <button className="rounded-full bg-slate-50 px-3 py-1.5 font-semibold text-slate-950">
            + Добавить
          </button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/30">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Активные сегодня
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
            2 184
          </p>
          <p className="text-xs text-emerald-300">+6.3% vs вчера</p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/30">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Новые регистрации
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
            428
          </p>
          <p className="text-xs text-emerald-300">+11.4% WoW</p>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 shadow-lg shadow-black/30">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Риск оттока
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-50">
            9.2%
          </p>
          <p className="text-xs text-amber-200">Группа: Фрилансеры</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-950/70 shadow-lg shadow-black/40">
        <div className="border-b border-white/5 px-4 py-3.5 sm:px-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Список пользователей
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Последние 8 активных записей
              </p>
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
                {["Имя", "Email", "Статус", "План", "Последний вход"].map(
                  (col) => (
                    <th
                      key={col}
                      className="border-b border-white/10 bg-slate-950/80 px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400 first:pl-5 last:pr-5"
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
                  name: "Алина Петрова",
                  email: "alina@acme.io",
                  status: "Активен",
                  plan: "Pro",
                  last: "Сегодня, 10:12",
                },
                {
                  name: "Иван Беляев",
                  email: "ivan@dev.studio",
                  status: "Требует внимания",
                  plan: "Free",
                  last: "Сегодня, 08:41",
                },
                {
                  name: "Мария Ким",
                  email: "maria@smblab.ru",
                  status: "Активен",
                  plan: "Business",
                  last: "Вчера, 21:18",
                },
                {
                  name: "Антон Власов",
                  email: "anton@retail.plus",
                  status: "Заморожен",
                  plan: "Pro",
                  last: "Вчера, 18:04",
                },
              ].map((row, idx) => (
                <tr
                  key={row.email}
                  className={`transition hover:bg-slate-900/60 ${
                    idx !== 0 ? "border-t border-white/5" : ""
                  }`}
                >
                  <td className="px-4 py-3 text-[0.78rem] font-medium text-slate-50 first:pl-5">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[0.78rem] text-slate-200">
                    {row.email}
                  </td>
                  <td className="px-4 py-3 text-[0.78rem]">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${
                        row.status === "Активен"
                          ? "bg-emerald-500/15 text-emerald-200"
                          : row.status === "Заморожен"
                          ? "bg-rose-500/15 text-rose-100"
                          : "bg-amber-500/15 text-amber-100"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          row.status === "Активен"
                            ? "bg-emerald-400"
                            : row.status === "Заморожен"
                            ? "bg-rose-400"
                            : "bg-amber-400"
                        }`}
                      />
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[0.78rem] text-slate-100">
                    {row.plan}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[0.78rem] text-slate-400 last:pr-5">
                    {row.last}
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

