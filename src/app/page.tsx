'use client'

import { useState } from 'react'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: '基础版',
      description: '适合初创企业和小型企业',
      priceMonthly: 990,
      priceYearly: 9900,
      features: [
        '最多10个项目',
        '5 GB 存储空间',
        '基础支持',
        '电子邮件通知',
        'API访问',
      ],
      popular: false,
    },
    {
      name: '专业版',
      description: '适合成长型团队',
      priceMonthly: 2490,
      priceYearly: 24900,
      features: [
        '无限项目',
        '100 GB 存储空间',
        '优先支持',
        '电子邮件和短信通知',
        '扩展API',
        '分析和报告',
        '集成功能',
      ],
      popular: true,
    },
    {
      name: '企业版',
      description: '适合大型企业',
      priceMonthly: 4990,
      priceYearly: 49900,
      features: [
        '无限项目',
        '1 TB 存储空间',
        'VIP 24/7支持',
        '所有类型通知',
        '完整API访问',
        '高级分析',
        '所有集成',
        '专属客户经理',
        'SLA保证',
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-red-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              CloudPro
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-red-900 hover:text-red-600 transition">
                功能
              </a>
              <a href="#pricing" className="text-red-900 hover:text-red-600 transition">
                价格
              </a>
              <a href="#contact" className="text-red-900 hover:text-red-600 transition">
                联系我们
              </a>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              登录
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-900 mb-6">
              高效管理项目
              <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                提升生产力
              </span>
            </h1>
            <p className="text-xl text-red-800 mb-8 max-w-2xl mx-auto">
              现代化的项目管理平台，帮助团队更高效地工作
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                免费开始
              </button>
              <button className="bg-white text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition border-2 border-red-200">
                观看演示
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-16 md:py-24 border-y border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-4">
                工作所需的一切
              </h2>
              <p className="text-lg text-red-800">
                强大的工具助力团队高效协作
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '任务管理',
                  description: '在便捷的界面中创建、分配和跟踪任务',
                  icon: '📋',
                },
                {
                  title: '团队协作',
                  description: '与同事实时协作工作',
                  icon: '👥',
                },
                {
                  title: '数据分析',
                  description: '获取项目进度的详细报告',
                  icon: '📊',
                },
                {
                  title: '集成功能',
                  description: '连接您喜爱的工具和服务',
                  icon: '🔗',
                },
                {
                  title: '安全保障',
                  description: '银行级别的数据保护标准',
                  icon: '🔒',
                },
                {
                  title: '24/7支持',
                  description: '专家团队全天候提供帮助',
                  icon: '💬',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-red-50 hover:bg-red-100 transition border border-red-200"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">{feature.title}</h3>
                  <p className="text-red-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-4">
                透明的价格
              </h2>
              <p className="text-lg text-red-800 mb-8">
                选择最适合您的方案
              </p>

              <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm border border-red-200">
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-6 py-2 rounded-md transition ${
                    activeTab === 'monthly'
                      ? 'bg-red-600 text-white'
                      : 'text-red-900 hover:text-red-600'
                  }`}
                >
                  按月付费
                </button>
                <button
                  onClick={() => setActiveTab('yearly')}
                  className={`px-6 py-2 rounded-md transition ${
                    activeTab === 'yearly'
                      ? 'bg-red-600 text-white'
                      : 'text-red-900 hover:text-red-600'
                  }`}
                >
                  按年付费
                  <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
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
                      ? 'bg-gradient-to-br from-red-600 to-red-800 text-white shadow-2xl scale-105'
                      : 'bg-white text-red-900 shadow-lg border border-red-200'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-100 text-red-900 px-4 py-1 rounded-full text-sm font-semibold">
                      最受欢迎
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={plan.popular ? 'text-red-100' : 'text-red-800'}>
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
                      <span className={`ml-2 ${plan.popular ? 'text-red-100' : 'text-red-800'}`}>
                        ₽/月
                      </span>
                    </div>
                    {activeTab === 'yearly' && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-red-100' : 'text-red-700'}`}>
                        每年 {plan.priceYearly.toLocaleString()} ₽
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.popular ? 'text-white' : 'text-red-600'
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
                        <span className={plan.popular ? 'text-red-50' : 'text-red-800'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-white text-red-600 hover:bg-red-50'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    选择方案
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-red-800">
                需要定制方案？{' '}
                <a href="#contact" className="text-red-600 hover:text-red-700 font-semibold">
                  联系我们
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16 md:py-24 border-t border-red-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-red-900 mb-4">
              准备开始了吗？
            </h2>
            <p className="text-lg text-red-800 mb-8">
              加入超过10,000个信任CloudPro的团队
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-900 transition shadow-xl">
              免费试用
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-red-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                CloudPro
              </div>
              <p className="text-red-200">
                现代化的项目管理平台
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-red-200">
                <li><a href="#" className="hover:text-white transition">功能</a></li>
                <li><a href="#" className="hover:text-white transition">价格</a></li>
                <li><a href="#" className="hover:text-white transition">集成</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-red-200">
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition">博客</a></li>
                <li><a href="#" className="hover:text-white transition">招聘</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-red-200">
                <li><a href="#" className="hover:text-white transition">帮助</a></li>
                <li><a href="#" className="hover:text-white transition">联系方式</a></li>
                <li><a href="#" className="hover:text-white transition">状态</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900 pt-8 text-center text-red-200">
            <p>© 2024 CloudPro. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}