'use client'

import { useEffect, useRef } from 'react'
import type { Content } from '@/lib/content'
import { WHATSAPP } from '@/lib/content'

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Footer({ c, footerC }: { c: Content['contact']; footerC: Content['footer'] }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 90)
          })
        }
      })
    }, { threshold: .05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <footer id="contact" ref={ref} className="bg-night border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_280px] gap-16 pb-16 border-b border-white/5">

          {/* Brand */}
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[.35em] text-glacier/25 uppercase mb-3">
              Advocacia · Setúbal
            </p>
            <h2 className="font-serif text-3xl font-light text-glacier mb-2">
              Carla Guerreiro Marques
            </h2>
            <p className="font-sans text-[9px] tracking-[.28em] text-wine uppercase mb-5">
              Inscrita na Ordem dos Advogados Portugueses
            </p>
            <div className="h-px bg-wine mb-6" style={{ width: 40 }} />
            <p className="font-sans text-sm text-glacier/40 leading-loose max-w-xs">
              {c.tagline}
            </p>
          </div>

          {/* Details */}
          <address className="reveal reveal-d2 not-italic space-y-7">
            <div>
              <p className="font-sans text-[9px] tracking-[.32em] uppercase text-glacier/28 mb-2">{c.address_label}</p>
              <p className="font-sans text-sm text-glacier/55 leading-relaxed whitespace-pre-line">{c.address}</p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[.32em] uppercase text-glacier/28 mb-2">{c.phone_label}</p>
              <a href="tel:+351962993794" className="font-sans text-sm text-glacier/55 hover:text-glacier transition-colors duration-200">
                {c.phone}
              </a>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[.32em] uppercase text-glacier/28 mb-2">{c.hours_label}</p>
              <p className="font-sans text-sm text-glacier/55">{c.hours}</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-wine/10 border border-wine/22 hover:bg-wine/20 hover:border-wine/45 text-glacier/60 hover:text-glacier font-sans text-[11px] tracking-[.18em] uppercase transition-all duration-300">
              <span className="text-wine"><WhatsappIcon /></span>
              {c.whatsapp}
            </a>
          </address>

          {/* Map */}
          <div className="reveal reveal-d3">
            <p className="font-sans text-[9px] tracking-[.32em] uppercase text-glacier/28 mb-4">{c.map_label}</p>
            <div className="overflow-hidden border border-white/8" style={{ height: 200 }}>
              <iframe
                title="Localização do Escritório — Setúbal"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-8.8914!3d38.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMxJzI3LjgiTiA4wrA1MycyOS4wIlc!5e0!3m2!1spt!2spt!4v1"
                width="100%" height="200"
                style={{ border: 0, filter: 'grayscale(100%) contrast(.65) brightness(.35)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 font-sans text-[10px] text-glacier/25 leading-relaxed">
              Praceta Amadeu de Sousa Cardoso 4<br />
              2900-164 Setúbal
            </p>
          </div>
        </div>

        {/* Legal bottom */}
        <div className="pt-8 space-y-2">
          <p className="font-sans text-[10px] text-glacier/18 leading-loose">
            {footerC.legal}
          </p>
          <p className="font-sans text-[10px] text-glacier/10 leading-loose">
            {footerC.ethics}
          </p>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/10" style={{ background: 'rgba(11,15,26,.97)', backdropFilter: 'blur(12px)' }}>
        <div className="flex">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-wine text-glacier font-sans text-[10px] tracking-wider uppercase">
            <WhatsappIcon />
            WhatsApp
          </a>
          <a href="#contact"
            className="flex-1 flex items-center justify-center py-4 text-glacier/55 font-sans text-[10px] tracking-wider uppercase border-l border-white/10">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  )
}
