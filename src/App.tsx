import { useState } from 'react'

type Page =
  | 'Кабінет сімʼї'
  | 'Картка пацієнта'
  | 'Стрічка супроводу'
  | 'Документи'
  | 'Дослідження і лікування'
  | 'Обмін документами'
  | 'Кабінет лікаря'
  | 'Черга оцінок'
  | 'Адмін-вид'

const pages: Page[] = [
  'Кабінет сімʼї',
  'Картка пацієнта',
  'Стрічка супроводу',
  'Документи',
  'Дослідження і лікування',
  'Обмін документами',
  'Кабінет лікаря',
  'Черга оцінок',
  'Адмін-вид',
]

function StatusBadge({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
      {children}
    </span>
  )
}

function FamilyDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">Пацієнт</p>
        <h2 className="mt-2 text-xl font-semibold">Марія К.</h2>
        <p className="mt-2 text-sm text-slate-600">
          Справа активна. Основний діагноз: пігментний ретиніт.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm text-amber-700">Поточна подія</p>
        <h2 className="mt-2 text-xl font-semibold">Очікує оцінки лікаря</h2>
        <p className="mt-2 text-sm text-slate-600">
          Додано генетичний висновок. Родина бачить, що документ ще не оцінений.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">Наступна дія</p>
        <h2 className="mt-2 text-xl font-semibold">Висновок спеціаліста</h2>
        <p className="mt-2 text-sm text-slate-600">
          Після оцінки лікаря висновок стане видимим у кабінеті сімʼї.
        </p>
      </div>
    </div>
  )
}

function PatientCard() {
  return (
    <div className="space-y-4">
      {[
        ['Діагноз', 'Пігментний ретиніт'],
        ['Ген', 'USH2A'],
        ['Мутація', 'c.2299delG'],
        ['Поточна справа', 'Супровід активний'],
      ].map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-xl font-semibold">{value}</p>
        </div>
      ))}
    </div>
  )
}

function Timeline() {
  return (
    <div className="space-y-4">
      {[
        ['Виявлено системою', 'Додано новий документ: генетичний тест'],
        ['Очікує оцінки лікаря', 'Потрібно підтвердити клінічне значення мутації'],
        ['Очікуємо відповідь', 'Надіслано лист до клініки в Німеччині'],
      ].map(([status, text]) => (
        <div key={text} className="rounded-2xl border border-slate-200 p-5">
          <StatusBadge>{status}</StatusBadge>
          <p className="mt-3 text-slate-700">{text}</p>
        </div>
      ))}
    </div>
  )
}

function Documents() {
  return (
    <div className="space-y-4">
      {['ОКТ сітківки.pdf', 'ЕРГ дослідження.pdf', 'Генетичний тест.pdf', 'Лист до клініки.docx'].map((doc) => (
        <div key={doc} className="flex items-center justify-between rounded-2xl border border-slate-200 p-5">
          <p className="font-medium">{doc}</p>
          <StatusBadge>Очікує оцінки лікаря</StatusBadge>
        </div>
      ))}
    </div>
  )
}


function ResearchMonitoring() {
  return (
    <div className="space-y-4">
      {[
        ['Нове клінічне дослідження', 'Генна терапія для USH2A', 'Виявлено системою'],
        ['Оновлення від виробника', 'Компанія RetinaBio оновила програму досліджень', 'Очікує оцінки лікаря'],
        ['Потенційний препарат', 'Новий препарат на ранній фазі дослідження', 'Очікує оцінки лікаря'],
        ['Клініка за кордоном', 'Клініка в Німеччині приймає запити щодо IRD', 'Очікуємо відповідь'],
      ].map(([title, text, status]) => (
        <div key={title} className="rounded-2xl border border-slate-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
            <StatusBadge>{status}</StatusBadge>
          </div>
        </div>
      ))}
    </div>
  )
}

function DocumentExchange() {
  return (
    <div className="space-y-4">
      {[
        ['Генетичний висновок', 'Отримано від родини', 'Очікує оцінки лікаря'],
        ['ОКТ', 'Перекладено українською', 'Оцінено лікарем'],
        ['Лист до клініки', 'Розіслано до 3 клінік', 'Очікуємо відповідь'],
        ['Відповідь клініки', 'Отримано відповідь, потрібні додаткові документи', 'Потрібні додаткові документи'],
      ].map(([title, text, status]) => (
        <div key={title} className="rounded-2xl border border-slate-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
            <StatusBadge>{status}</StatusBadge>
          </div>
        </div>
      ))}
    </div>
  )
}

function DoctorCabinet() {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <h2 className="text-xl font-semibold">Робочий кабінет лікаря</h2>
      <p className="mt-3 text-slate-600">
        Лікар бачить події, які очікують оцінки, додає висновок і відкриває його для сімʼї.
      </p>
    </div>
  )
}

function ReviewQueue() {
  return (
    <div className="space-y-4">
      {['Генетичний висновок USH2A', 'ОКТ у динаміці', 'Відповідь клініки'].map((item) => (
        <div key={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <StatusBadge>Очікує оцінки лікаря</StatusBadge>
          <p className="mt-3 font-semibold">{item}</p>
        </div>
      ))}
    </div>
  )
}

function AdminView() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {['Пацієнт', 'Справа пацієнта', 'Діагноз', 'Ген', 'Мутація', 'Документ', 'Подія', 'Оцінка лікаря'].map((entity) => (
        <div key={entity} className="rounded-2xl border border-slate-200 p-5">
          <p className="font-semibold">{entity}</p>
          <p className="mt-2 text-sm text-slate-500">Тестова сутність MVP</p>
        </div>
      ))}
    </div>
  )
}

function PageContent({ page }: { page: Page }) {
  if (page === 'Кабінет сімʼї') return <FamilyDashboard />
  if (page === 'Картка пацієнта') return <PatientCard />
  if (page === 'Стрічка супроводу') return <Timeline />
  if (page === 'Документи') return <Documents />
  if (page === 'Дослідження і лікування') return <ResearchMonitoring />
  if (page === 'Обмін документами') return <DocumentExchange />
  if (page === 'Кабінет лікаря') return <DoctorCabinet />
  if (page === 'Черга оцінок') return <ReviewQueue />
  return <AdminView />
}

function App() {
  const [activePage, setActivePage] = useState<Page>('Кабінет сімʼї')

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
          <h1 className="mt-3 text-4xl font-bold tracking-tight">{activePage}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Клікабельний MVP для обговорення структури супроводу пацієнтів із
            генетичними захворюваннями сітківки.
          </p>

          <div className="mt-8">
            <PageContent page={activePage} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
