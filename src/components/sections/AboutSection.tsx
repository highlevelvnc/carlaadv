'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { Content } from '@/lib/content'

export function AboutSection({ c }: { c: Content['about'] }) {
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
    }, { threshold: .08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-28 px-6 border-t border-white/5" style={{ background: '#111520' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-sans text-[10px] tracking-[.38em] uppercase text-glacier/35 mb-3 block">{c.label}</span>
          <h2 className="font-serif font-light text-glacier mb-3 leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
            {c.title}
          </h2>
          <div className="h-px bg-wine" style={{ width: 40 }} />
        </div>

        {/* Main grid: Carla photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 mb-20 items-start">

          {/* Photo column */}
          <div className="reveal">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/carla-marques.webp"
                alt="Carla Guerreiro Marques — Advogada em Setúbal"
                fill
                className="object-cover object-top grayscale"
                priority={false}
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Dark overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: 'linear-gradient(to top, #111520, transparent)' }} />
              {/* Wine accent border */}
              <div className="absolute inset-0 border border-wine/15" />
            </div>

            {/* Name tag below photo */}
            <div className="mt-5 pb-5 border-b border-white/8">
              <p className="font-serif text-glacier text-xl font-light">Carla Guerreiro Marques</p>
              <p className="font-sans text-[10px] tracking-[.28em] text-wine uppercase mt-1">
                Advogada · Ordem dos Advogados Portugueses
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div className="reveal reveal-d2 flex flex-col gap-8 justify-center">
            <p className="font-sans text-glacier/60 leading-loose" style={{ fontSize: '1rem' }}>
              {c.sub}
            </p>
            <p className="font-sans text-glacier/45 leading-loose text-sm">
              {c.bio}
            </p>
            <p className="font-sans text-glacier/40 leading-loose text-sm">
              {c.bio2}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/8">
              {c.values.map((v, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-serif text-3xl text-wine font-light leading-none">{v.num}</span>
                  <span className="font-sans text-[10px] tracking-[.18em] text-glacier/40 uppercase">{v.label}</span>
                  <p className="font-sans text-xs text-glacier/30 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-2 border-wine/50 mt-2">
              <p className="font-serif text-xl font-light italic text-glacier/55 leading-relaxed">
                {c.quote}
              </p>
              <cite className="not-italic font-sans text-[10px] tracking-[.2em] text-wine uppercase mt-3 block">
                Carla Guerreiro Marques
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Office gallery row — real photos */}
        <div className="reveal">
          <p className="font-sans text-[10px] tracking-[.35em] uppercase text-glacier/30 mb-6">{c.office_label}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(245,240,235,.04)' }}>
            {[
              { src: '/images/office-desk.jpg', alt: 'Escritório — Mesa de trabalho, Setúbal' },
              { src: '/images/office-corridor.jpg', alt: 'Escritório — Corredor interior, Setúbal' },
              { src: '/images/office-door.jpg', alt: 'Escritório — Entrada, Praceta Amadeu de Sousa Cardoso 4' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-night/30 group-hover:bg-night/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
