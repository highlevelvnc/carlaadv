'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Content } from '@/lib/content'

export function FAQSection({ c }: { c: Content['faq'] }) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 70)
          })
        }
      })
    }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="faq" ref={ref} className="py-28 px-6 bg-[#0E1220]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-[10px] tracking-[.38em] uppercase text-glacier/35 mb-3 block">{c.label}</span>
          <h2 className="font-serif font-light text-glacier mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {c.title}
          </h2>
          <div className="h-px bg-wine mx-auto" style={{ width: 40 }} />
        </div>

        <dl className="space-y-px">
          {c.items.map((item, i) => (
            <div key={i} className={`reveal reveal-d${(i % 3) + 1} border-t border-white/6 last:border-b`}>
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left py-6 flex justify-between items-start gap-6 group"
                >
                  <span className={`font-sans text-sm leading-relaxed transition-colors duration-200 ${open === i ? 'text-glacier' : 'text-glacier/60 group-hover:text-glacier'}`}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: .25 }}
                    className="text-wine text-xl leading-none flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >+</motion.span>
                </button>
              </dt>
              <dd>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-sans text-sm text-glacier/40 leading-loose pr-8">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center font-sans text-[10px] text-glacier/20 leading-loose reveal">
          {c.note}
        </p>
      </div>
    </section>
  )
}
