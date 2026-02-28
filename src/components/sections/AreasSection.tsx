'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Content } from '@/lib/content'
import { WHATSAPP } from '@/lib/content'

export function AreasSection({ c }: { c: Content['areas'] }) {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 80)
          })
        }
      })
    }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="areas" ref={ref} className="py-28 px-6 bg-night">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-sans text-[10px] tracking-[.38em] uppercase text-glacier/35 mb-3 block">{c.label}</span>
          <h2 className="font-serif font-light text-glacier mb-3 leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
            {c.title}
          </h2>
          <div className="h-px bg-wine mb-5" style={{ width: 40 }} />
          <p className="font-sans text-glacier/40 text-sm max-w-lg leading-relaxed">{c.sub}</p>
        </div>

        {/* Navigator cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16" style={{ background: 'rgba(245,240,235,0.05)' }}>
          {c.list.map((area, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal reveal-d${i + 1} group relative text-left p-7 flex flex-col gap-5 transition-all duration-400 overflow-hidden ${
                active === i ? 'bg-wine/10' : 'bg-[#111520] hover:bg-[#0E1220]'
              }`}
            >
              {/* Active/hover bottom line */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-wine transition-all duration-400 ${active === i ? 'w-full' : 'w-0 group-hover:w-full'}`} />

              <span className="text-2xl opacity-50 group-hover:opacity-90 transition-opacity">{area.icon}</span>

              <div>
                <p className={`font-sans text-[9px] tracking-[.28em] uppercase mb-2 transition-colors duration-200 ${active === i ? 'text-wine' : 'text-glacier/30 group-hover:text-wine/70'}`}>
                  {area.title}
                </p>
                <h3 className="font-serif font-light text-glacier text-xl leading-snug">{area.headline}</h3>
              </div>

              <p className="font-sans text-xs text-glacier/35 group-hover:text-glacier/55 leading-relaxed transition-colors duration-300">
                {area.desc}
              </p>

              <span className={`font-sans text-[10px] tracking-wider uppercase transition-all duration-300 ${active === i ? 'text-wine' : 'text-wine/50 group-hover:text-wine'}`}>
                {active === i ? '▸ Selecionado' : 'Ver serviços →'}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .4 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 p-10 bg-[#0E1220] border border-white/5"
          >
            <div>
              <p className="font-sans text-[9px] tracking-[.3em] text-wine uppercase mb-3">{c.list[active].title}</p>
              <h3 className="font-serif font-light text-glacier text-3xl mb-6">{c.list[active].headline}</h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {c.list[active].items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * .06 }}
                    className="flex items-start gap-3 font-sans text-sm text-glacier/55 leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-wine flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <p className="font-sans text-[10px] text-glacier/18 border-t border-white/5 pt-5 leading-loose">
                Serviços descritos têm natureza meramente informativa. Cada situação é analisada individualmente.
              </p>
            </div>

            {/* CTA column */}
            <div className="flex flex-col items-start lg:items-end justify-between gap-6 min-w-[200px]">
              <div className="text-right hidden lg:block">
                <p className="font-sans text-[9px] tracking-[.28em] text-glacier/20 uppercase mb-2">Área activa</p>
                <span className="font-serif text-5xl text-wine/20 font-light">0{active + 1}</span>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="whitespace-nowrap px-6 py-3 bg-wine hover:bg-wine-light text-glacier font-sans text-[11px] tracking-[.2em] uppercase transition-all duration-300 hover:-translate-y-0.5">
                Consultar →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
