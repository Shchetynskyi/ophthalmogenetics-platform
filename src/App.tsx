import { useState } from 'react'

type Page =
  | 'Кабінет родини'
  | 'Картка пацієнта'
  | 'Стрічка супроводу'
  | 'Документи'
  | 'Дослідження і лікування'
  | 'Обмін документами'
  | 'Листи до клінік'
  | 'Задачі родини'
  | 'Кабінет лікаря'
  | 'Черга оцінок'
  | 'Адмін-вид'

const pages: Page[] = [
  'Кабінет родини',
  'Картка пацієнта',
  'Стрічка супроводу',
  'Документи',
  'Дослідження і лікування',
  'Обмін документами',
  'Листи до клінік',
  'Задачі родини',
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
  const news = [
    'Отримано генетичний висновок USH2A',
    'Отримано відповідь клініки Institut de la Vision',
    'Знайдено нове клінічне дослідження',
  ]

  const counters = [
    ['Очікує лікаря', '3', 'відкриті оцінки'],
    ['Задачі родини', '2', 'потрібна дія'],
    ['Клініки', '1/3', 'відповідь отримано'],
    ['Дослідження', '3', 'нові сигнали'],
  ]

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 md:p-6">
        <p className="text-sm font-semibold text-blue-700">Панель справи пацієнта</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Марія К.</h2>
            <p className="mt-2 text-sm text-slate-700">
              Пігментний ретиніт • ген USH2A • мутація c.2299delG
            </p>
          </div>
          <div className="rounded-xl bg-amber-100 px-4 py-3 text-sm font-semibold text-amber-900">
            Очікує оцінки лікаря
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {counters.map(([label, value, hint]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{hint}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-slate-200 p-4 md:p-5">
          <p className="text-sm font-semibold text-blue-700">Що нового</p>
          <div className="mt-4 space-y-3">
            {news.map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4 md:p-5">
          <p className="text-sm font-semibold text-amber-800">Наступний крок</p>
          <h3 className="mt-2 text-lg font-bold">Оцінити генетичний висновок</h3>
          <p className="mt-2 text-sm text-slate-700">
            Лікар має додати короткий висновок. Після цього він стане видимим для родини.
          </p>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-500">Документи</p>
          <p className="mt-2 text-lg font-bold">4 файли у справі</p>
          <p className="mt-1 text-sm text-slate-600">1 документ очікує оцінки лікаря</p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-500">Клініки</p>
          <p className="mt-2 text-lg font-bold">3 звернення</p>
          <p className="mt-1 text-sm text-slate-600">1 відповідь отримано, 2 очікуються</p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4 md:p-5">
          <p className="text-sm font-semibold text-slate-500">Дослідження</p>
          <p className="mt-2 text-lg font-bold">Моніторинг активний</p>
          <p className="mt-1 text-sm text-slate-600">Нові сигнали передаються на оцінку лікаря</p>
        </div>
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
        <div key={label} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
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
        <div key={text} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
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
        <div key={doc} className="flex items-center justify-between rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
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
        <div key={title} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
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
        <div key={title} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
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


function ClinicLetters() {
  return (
    <div className="space-y-4">
      {[
        ['Charité Berlin', 'Німеччина', 'Лист розіслано', 'Очікуємо відповідь'],
        ['Moorfields Eye Hospital', 'Велика Британія', 'Документи перекладено', 'Очікує оцінки лікаря'],
        ['Institut de la Vision', 'Франція', 'Отримано відповідь', 'Потрібні додаткові документи'],
      ].map(([clinic, country, action, status]) => (
        <div key={clinic} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">{country}</p>
              <p className="mt-1 text-lg font-semibold">{clinic}</p>
              <p className="mt-2 text-sm text-slate-600">{action}</p>
            </div>
            <StatusBadge>{status}</StatusBadge>
          </div>
        </div>
      ))}

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm font-semibold text-blue-700">Що бачить родина</p>
        <p className="mt-2 text-sm text-slate-700">
          Родина бачить, куди вже надіслано документи, які відповіді отримано
          і що ще потрібно підготувати.
        </p>
      </div>
    </div>
  )
}


function FamilyTasks() {
  return (
    <div className="space-y-4">
      {[
        ['Завантажити попереднє ОКТ', 'Потрібно для порівняння динаміки', 'Потрібні додаткові документи'],
        ['Підтвердити згоду на лист до клініки', 'Після згоди команда надішле пакет документів', 'Очікує оцінки лікаря'],
        ['Ознайомитись із перекладеним генетичним висновком', 'Переклад підготовлено командою для звернення до закордонної клініки', 'Виявлено системою'],
      ].map(([title, description, status]) => (
        <div key={title} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
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
    <div className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
      <h2 className="text-xl font-semibold">Робочий кабінет лікаря</h2>
      <p className="mt-3 text-slate-600">
        Лікар бачить події, які очікують оцінки, додає висновок і відкриває його для родини.
      </p>
    </div>
  )
}

function ReviewQueue() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        {[
          ['Генетичний висновок USH2A', 'Потрібно оцінити клінічне значення мутації'],
          ['ОКТ у динаміці', 'Порівняти з попереднім обстеженням'],
          ['Відповідь клініки', 'Перевірити, чи потрібні додаткові документи'],
        ].map(([title, description]) => (
          <button
            key={title}
            className="w-full rounded-xl border border-amber-200 bg-amber-50 p-4 md:rounded-2xl md:p-5 text-left transition hover:bg-amber-100"
          >
            <StatusBadge>Очікує оцінки лікаря</StatusBadge>
            <p className="mt-3 font-semibold">{title}</p>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            <p className="mt-4 text-sm font-semibold text-blue-700">Відкрити оцінку →</p>
          </button>
        ))}
      </div>

      <aside className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
        <p className="text-sm font-semibold text-blue-700">Панель лікаря</p>
        <h2 className="mt-2 text-xl font-semibold">Оцінка події</h2>

        <div className="mt-5 rounded-xl bg-slate-50 p-3 md:rounded-2xl md:p-4">
          <p className="text-sm text-slate-500">Тестовий висновок</p>
          <p className="mt-2 text-sm text-slate-700">
            Виявлений варіант потребує зіставлення з клінічною картиною,
            родинним анамнезом та результатами ОКТ/ЕРГ.
          </p>
        </div>

        <button className="mt-5 w-full rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
          Опублікувати висновок для родини
        </button>

        <p className="mt-3 text-xs text-slate-500">
          Після публікації статус зміниться на “Оцінено лікарем”.
        </p>
      </aside>
    </div>
  )
}

function AdminView() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {['Пацієнт', 'Справа пацієнта', 'Діагноз', 'Ген', 'Мутація', 'Документ', 'Подія', 'Оцінка лікаря'].map((entity) => (
        <div key={entity} className="rounded-xl border border-slate-200 p-4 md:rounded-2xl md:p-5">
          <p className="font-semibold">{entity}</p>
          <p className="mt-2 text-sm text-slate-500">Тестова сутність MVP</p>
        </div>
      ))}
    </div>
  )
}

function PageContent({ page }: { page: Page }) {
  if (page === 'Кабінет родини') return <FamilyDashboard />
  if (page === 'Картка пацієнта') return <PatientCard />
  if (page === 'Стрічка супроводу') return <Timeline />
  if (page === 'Документи') return <Documents />
  if (page === 'Дослідження і лікування') return <ResearchMonitoring />
  if (page === 'Обмін документами') return <DocumentExchange />
  if (page === 'Листи до клінік') return <ClinicLetters />
  if (page === 'Задачі родини') return <FamilyTasks />
  if (page === 'Кабінет лікаря') return <DoctorCabinet />
  if (page === 'Черга оцінок') return <ReviewQueue />
  return <AdminView />
}

function App() {
  const [activePage, setActivePage] = useState<Page>('Кабінет родини')

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 md:flex-row md:px-6 md:py-8">
        <aside className="w-full shrink-0 rounded-2xl bg-white p-3 shadow-sm md:w-72 md:rounded-3xl md:p-5">
          <p className="text-sm font-semibold text-blue-700">
            Офтальмогенетична платформа
          </p>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:mt-6 md:block md:space-y-2 md:overflow-visible md:pb-0">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`shrink-0 rounded-xl px-3 py-2 text-left text-sm font-medium transition md:w-full ${
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

        <section className="min-h-[720px] flex-1 rounded-2xl bg-white p-4 shadow-sm md:rounded-3xl md:p-8">
          <p className="text-sm font-semibold text-blue-700">{activePage}</p>
          <h1 className="mt-3 text-xl font-bold md:text-2xl tracking-tight md:text-4xl">{activePage}</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-lg">
            Клікабельний MVP для обговорення структури супроводу пацієнтів із
            генетичними захворюваннями сітківки.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:grid-cols-4 md:gap-3">
            {[
              ['Статус справи', 'Активна'],
              ['Очікує лікаря', '3 події'],
              ['Відповіді клінік', '1 отримана'],
              ['Задачі родини', '2 відкриті'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-3 md:rounded-2xl md:p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-2 text-lg font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 md:mt-8">
            <PageContent page={activePage} />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
