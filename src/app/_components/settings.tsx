export default function SettingsPage() {
  return (
    <div className="space-y-4 md:space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Настройки
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">
            Профиль, безопасность и уведомления
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded-full bg-slate-900/80 px-3 py-1.5 font-medium text-slate-100">
            Сбросить
          </button>
          <button className="rounded-full bg-slate-50 px-3 py-1.5 font-semibold text-slate-950">
            Сохранить
          </button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-5 shadow-lg shadow-black/30">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Профиль
              </p>
              <p className="text-sm text-slate-200">
                Контактные данные и компания
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-300">
              Активен
            </span>
          </div>

          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-400">Имя</span>
              <span className="font-medium text-slate-50">Admin User</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Email</span>
              <span className="font-medium text-slate-50">
                admin@example.com
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Компания</span>
              <span className="font-medium text-slate-50">Nova Inc.</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-5 shadow-lg shadow-black/30">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Уведомления
              </p>
              <p className="text-sm text-slate-200">
                Каналы и частота событий
              </p>
            </div>
            <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-100">
              Настроено
            </span>
          </div>

          <div className="space-y-3 text-sm text-slate-200">
            <div className="flex justify-between">
              <span className="text-slate-400">Email</span>
              <span className="font-medium text-slate-50">Все события</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Slack</span>
              <span className="font-medium text-slate-50">Инциденты</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">SMS</span>
              <span className="font-medium text-slate-50">Только биллинг</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-5 shadow-lg shadow-black/30">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Безопасность
            </p>
            <p className="text-sm text-slate-200">
              Доступ, сессии и двухфакторная аутентификация
            </p>
          </div>
          <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[0.7rem] font-semibold text-amber-200">
            Требует внимания
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-3 text-sm text-slate-200">
          <div className="rounded-xl border border-white/5 bg-slate-900/60 p-3">
            <p className="text-[0.75rem] text-slate-400">2FA</p>
            <p className="text-sm font-semibold text-slate-50">Не подключено</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-slate-900/60 p-3">
            <p className="text-[0.75rem] text-slate-400">Активные сессии</p>
            <p className="text-sm font-semibold text-slate-50">3 устройства</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-slate-900/60 p-3">
            <p className="text-[0.75rem] text-slate-400">IP allow-list</p>
            <p className="text-sm font-semibold text-slate-50">Отключено</p>
          </div>
        </div>
      </div>
    </div>
  );
}

