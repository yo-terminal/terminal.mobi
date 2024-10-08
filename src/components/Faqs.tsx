import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is this platform?',
      answer:
        'This is a decentralized finance (DeFi) application built on the SUI blockchain. It automates and optimizes yield strategies, helping users maximize returns across various DeFi protocols.',
    },
    {
      question: 'How does it work?',
      answer:
        'The platform uses smart algorithms to automate yield farming, staking, and other DeFi strategies. Users can deposit their assets, and the system will automatically allocate them to the best-performing pools and strategies to maximize returns.',
    },
    {
      question: 'Which blockchain is the platform built on?',
      answer:
        'The platform is built on the SUI blockchain, which provides low transaction fees, fast speeds, and a secure environment for decentralized applications.',
    },
  ],
  [
    {
      question: 'Is there a minimum deposit requirement?',
      answer:
        'There is no fixed minimum deposit requirement, but certain DeFi pools may have their own minimum limits. The platform will inform you of any such restrictions when you attempt to make a deposit.',
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer:
        'Yes, users have full control over their assets and can withdraw them at any time. However, depending on the specific DeFi protocol used, there may be a lock-up period or withdrawal fee associated with certain pools.',
    },
    {
      question: 'What kind of yields can I expect?',
      answer:
        'Yields vary based on market conditions and the performance of the selected strategies. The platform continuously seeks to optimize your returns by reallocating assets to the most profitable pools or protocols.',
    },
  ],
  [
    {
      question: 'What are the risks involved?',
      answer:
        'While the platform aims to maximize returns, DeFi investments carry inherent risks, such as smart contract vulnerabilities, liquidity risks, and market volatility. Users are encouraged to thoroughly research and understand these risks before participating.',
    },
    // {
    //   question: 'How are fees structured?',
    //   answer:
    //     'The platform charges a small performance fee on the profits earned through optimized yield strategies. Transaction fees on the SUI blockchain are minimal, but individual DeFi protocols may have their own associated fees.',
    // },
    {
      question: 'How does it ensure the security of my funds?',
      answer:
        'The platform is built on the SUI blockchain, leveraging its high-security standards and decentralization. Additionally, all smart contracts used are thoroughly audited to minimize risks, and users maintain control of their assets at all times.',
    },
    {
      question: 'What wallets are supported?',
      answer:
        'The platform supports popular wallets compatible with the SUI blockchain. This includes wallets like Suiet or any other browser-based wallets that integrate with SUI.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto lg:mx-0 md:text-center">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQ
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p> */}
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
            This section provides answers to common questions about the
            platform, detailing its functionality, supported wallets, associated
            risks, and fee structure. It explains how users can interact with
            the platform, manage deposits and withdrawals, and maximize yields,
            offering a clear understanding of the platform's core features and
            operations.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
