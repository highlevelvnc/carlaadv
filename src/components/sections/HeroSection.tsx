'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Content } from '@/lib/content'
import { WHATSAPP } from '@/lib/content'

export function HeroSection({ c }: { c: Content['hero'] }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dark gradient */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 25% 50%, rgba(91,30,45,.07) 0%, transparent 55%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(18,22,40,.9) 0%, transparent 65%), linear-gradient(160deg, #0D1120 0%, #080C18 50%, #0A0D16 100%)',
        }} />

        {/* Subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(245,240,235,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
        }} />

        {/* Decorative circles */}
        <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
          <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(91,30,45,.06)" strokeWidth="1"/>
          <circle cx="50%" cy="50%" r="380" fill="none" stroke="rgba(245,240,235,.025)" strokeWidth=".8"/>
          <circle cx="50%" cy="50%" r="520" fill="none" stroke="rgba(245,240,235,.015)" strokeWidth=".5"/>
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(245,240,235,.02)" strokeWidth="1"/>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(245,240,235,.02)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .2 }}
          className="font-sans text-[10px] tracking-[.4em] text-glacier/40 uppercase mb-8"
        >
          {c.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: .45, ease: [.22, 1, .36, 1] }}
          className="font-serif font-light text-glacier leading-[1.05]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.6rem)' }}
        >
          {c.headline}<br />
          <em className="text-glacier/60 not-italic">{c.headline2}</em>
        </motion.h1>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: .8, delay: 1.1 }}
          className="h-px bg-wine mx-auto my-8"
          style={{ width: 120, transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: 1.3 }}
          className="font-sans font-light text-glacier/55 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(.9rem, 2vw, 1.05rem)' }}
        >
          {c.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: 1.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-wine hover:bg-wine-light text-glacier font-sans text-[11px] tracking-[.2em] uppercase transition-all duration-300 overflow-hidden hover:-translate-y-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.cta1}
          </a>
          <a href="#areas"
            className="px-8 py-4 border border-white/18 hover:border-white/55 text-glacier/60 hover:text-glacier font-sans text-[11px] tracking-[.2em] uppercase transition-all duration-300 hover:-translate-y-0.5">
            {c.cta2}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 font-sans text-[10px] tracking-[.38em] text-glacier/20 uppercase"
        >
          Rigor · Estratégia · Confiança
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-sans text-[9px] tracking-[.35em] text-glacier/20 uppercase">Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(245,240,235,.25), transparent)', animation: 'scrollBob 2s ease-in-out infinite' }} />
      </motion.div>
    </section>
  )
}
