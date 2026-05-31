import { useState } from 'react'

const pages = [
  'Кабінет сімʼї',
  'Картка пацієнта',
  'Стрічка супроводу',
  'Документи',
  'Кабінет лікаря',
  'Черга оцінок',
  'Адмін-вид',
]

function App() {
  const [activePage, setActivePage] = useState('Кабінет сімʼї')

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">
        <aside className="w-72 shrink-0 rounded-3xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-blue-700">
            Офтальмогенетична платформа
          </p>

          <nav className="mt-6 space-y-2">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  activePage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </aside>

        <section className="min-h-[720px] flex-1 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-blue-700">{activePage}</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {activePage}
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Клікабельний MVP для обговорення структури супроводу пацієнтів із
            генетичними захворюваннями сітківки.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Пацієнт</p>
              <h2 className="mt-2 text-xl font-semibold">Марія К.</h2>
              <p className="mt-2 text-sm text-slate-600">
                Справа активна. Основний діагноз: пігментний ретиніт.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm text-amber-700">Поточний статус</p>
              <h2 className="mt-2 text-xl font-semibold">
                Очікує оцінки лікаря
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Новий документ додано до справи. Потрібен висновок спеціаліста.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Документи</p>
              <h2 className="mt-2 text-xl font-semibold">4 файли</h2>
              <p className="mt-2 text-sm text-slate-600">
                ОКТ, ЕРГ, генетичний тест, лист до клініки.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
