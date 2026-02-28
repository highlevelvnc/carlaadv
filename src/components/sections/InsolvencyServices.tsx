'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Content } from '@/lib/content'

const icons: Record<string, React.ReactNode> = {
  scale: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 7l7-4 7 4M3 17l4-8 4 8M13 17l4-8 4 8"/>
      <path d="M3 17h8M13 17h8"/>
    </svg>
  ),
  card: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
      <line x1="6" y1="15" x2="10" y2="15"/>
    </svg>
  ),
  calc: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <line x1="8" y1="7" x2="16" y2="7"/>
      <circle cx="8" cy="12" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
      <circle cx="16" cy="12" r="1" fill="currentColor"/>
      <circle cx="8" cy="16" r="1" fill="currentColor"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
      <rect x="14" y="14" width="4" height="4" rx=".5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  refresh: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 018-8 8 8 0 016.93 4"/>
      <path d="M20 4v4h-4"/>
      <path d="M20 12a8 8 0 01-8 8 8 8 0 01-6.93-4"/>
      <path d="M4 20v-4h4"/>
    </svg>
  ),
  lock: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="11" rx="2"/>
      <path d="M8 11V7a4 4 0 018 0v4"/>
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  balance: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 7l7-4 7 4"/>
      <path d="M3 17l4-8 4 8M13 17l4-8 4 8"/>
      <path d="M3 17h8M13 17h8"/>
      <line x1="7" y1="21" x2="17" y2="21"/>
    </svg>
  ),
}

export function InsolvencyServices({ c }: { c: Content['insolvency_section'] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 80)
          })
        }
      })
    }, { threshold: .1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-28 px-6" style={{ background: 'linear-gradient(to bottom, #0E1220, #0B0F1A)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-[10px] tracking-[.38em] uppercase text-wine mb-3 block">
            {c.label}
          </span>
          <h2 className="font-serif font-light text-glacier mb-4 leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            {c.title}
          </h2>
          <div className="h-px bg-wine mx-auto mb-4" style={{ width: 48 }} />
          <p className="font-sans text-glacier/40 max-w-2xl mx-auto text-sm leading-relaxed">
            {c.sub}
          </p>
        </div>

        {/* 3x2 Services Grid — styled like the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(245,240,235,0.05)' }}>
          {c.services.map((svc, i) => (
            <article
              key={i}
              className={`service-card reveal reveal-d${(i % 4) + 1} relative bg-[#0E1220] p-8 flex flex-col gap-4 group hover:bg-[#111520] transition-colors duration-400 overflow-hidden`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-wine/0 group-hover:border-wine/30 transition-colors duration-400" />

              {/* Icon */}
              <div className="text-wine opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {icons[svc.icon]}
              </div>

              {/* Title */}
              <h3 className="font-sans font-medium text-wine text-[.88rem] leading-snug" style={{ letterSpacing: '.01em' }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-glacier/45 group-hover:text-glacier/60 leading-relaxed transition-colors duration-300">
                {svc.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://api.whatsapp.com/send?phone=351962993794&text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-wine hover:bg-wine-light text-glacier font-sans text-[11px] tracking-[.2em] uppercase transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.label.includes('Insolvência') ? 'Consultar sobre Insolvência' : 'Get In Touch'}
          </a>
        </div>
      </div>
    </section>
  )
}
