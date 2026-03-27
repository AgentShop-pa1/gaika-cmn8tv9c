'use client'

import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Базовый',
      description: 'Для начинающих и малого бизнеса',
      priceMonthly: 990,
      priceYearly: 9900,
      features: [
        'До 10 проектов',
        '5 ГБ хранилища',
        'Базовая поддержка',
        'Email уведомления',
        'Доступ к API',
      ],
      popular: false,
    },
    {
      name: 'Профессиональный',
      description: 'Для растущих команд',
      priceMonthly: 2490,
      priceYearly: 24900,
      features: [
        'Безлимитные проекты',
        '100 ГБ хранилища',
        'Приоритетная поддержка',
        'Email и SMS уведомления',
        'Расширенный API',
        'Аналитика и отчёты',
        'Интеграции',
      ],
      popular: true,
    },
    {
      name: 'Корпоративный',
      description: 'Для крупного бизнеса',
      priceMonthly: 4990,
      priceYearly: 49900,
      features: [
        'Безлимитные проекты',
        '1 ТБ хранилища',
        'VIP поддержка 24/7',
        'Все виды уведомлений',
        'Полный доступ к API',
        'Расширенная аналитика',
        'Все интеграции',
        'Персональный менеджер',
        'SLA гарантия',
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CloudPro
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition">
                Возможности
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">
                Цены
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">
                Контакты
              </a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Войти
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Управляйте проектами
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                эффективно
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Современная платформа для управления проектами, которая помогает командам работать продуктивнее
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                Начать бесплатно
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition border-2 border-slate-200">
                Смотреть демо
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Всё что нужно для работы
              </h2>
              <p className="text-lg text-slate-600">
                Мощные инструменты для эффективной работы вашей команды
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Управление задачами',
                  description: 'Создавайте, назначайте и отслеживайте задачи в удобном интерфейсе',
                  icon: '📋',
                },
                {
                  title: 'Командная работа',
                  description: 'Работайте вместе в реальном времени с коллегами',
                  icon: '👥',
                },
                {
                  title: 'Аналитика',
                  description: 'Получайте подробные отчёты о прогрессе проектов',
                  icon: '📊',
                },
                {
                  title: 'Интеграции',
                  description: 'Подключайте любимые инструменты и сервисы',
                  icon: '🔗',
                },
                {
                  title: 'Безопасность',
                  description: 'Защита данных на уровне банковских стандартов',
                  icon: '🔒',
                },
                {
                  title: 'Поддержка 24/7',
                  description: 'Круглосуточная помощь от команды экспертов',
                  icon: '💬',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition border border-slate-200"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Прозрачные цены
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Выберите план, который подходит именно вам
              </p>

              <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-6 py-2 rounded-md transition ${
                    activeTab === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ежемесячно
                </button>
                <button
                  onClick={() => setActiveTab('yearly')}
                  className={`px-6 py-2 rounded-md transition ${
                    activeTab === 'yearly'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ежегодно
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    -17%
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                      : 'bg-white text-slate-900 shadow-lg'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={plan.popular ? 'text-blue-100' : 'text-slate-600'}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">
                        {activeTab === 'monthly'
                          ? plan.priceMonthly.toLocaleString()
                          : Math.round(plan.priceYearly / 12).toLocaleString()}
                      </span>
                      <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                        ₽/мес
                      </span>
                    </div>
                    {activeTab === 'yearly' && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                        {plan.priceYearly.toLocaleString()} ₽ в год
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-white' : 'text-green-500'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className={plan.popular ? 'text-blue-50' : 'text-slate-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Выбрать план
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600">
                Нужен индивидуальный план?{' '}
                <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Свяжитесь с нами
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Готовы начать?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Присоединяйтесь к более чем 10,000 команд, которые доверяют CloudPro
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-xl">
              Попробовать бесплатно
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CloudPro
              </div>
              <p className="text-slate-400">
                Современная платформа для управления проектами
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition">Цены</a></li>
                <li><a href="#" className="hover:text-white transition">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Блог</a></li>
                <li><a href="#" className="hover:text-white transition">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 CloudPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}