'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP } from '@/lib/content'
import type { Locale } from '@/lib/content'

type NavStrings = {
  areas: string
  about: string
  faq: string
  contact: string
  cta: string
}

interface NavProps {
  c: NavStrings
  locale: Locale
  onLocale: (l: Locale) => void
}

export function Navigation({ c, locale, onLocale }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }
  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const links = [
    { label: c.areas, href: '#areas' },
    { label: c.about, href: '#about' },
    { label: c.faq, href: '#faq' },
    { label: c.contact, href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-night/95 backdrop-blur-md border-b border-white/5' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex flex-col gap-0.5">
            <span className="font-serif text-lg text-glacier font-light tracking-wide leading-none">
              Carla Guerreiro Marques
            </span>
            <span className="font-sans text-[9px] tracking-[.32em] text-wine uppercase font-normal">
              {locale === 'pt' ? 'Advogada · Setúbal' : 'Lawyer · Setúbal'}
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[11px] tracking-[.22em] uppercase text-glacier/50 hover:text-glacier transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}

            {/* Lang toggle */}
            <div className="flex border border-white/10 overflow-hidden">
              {(['pt', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => onLocale(l)}
                  className={`px-2.5 py-1 text-[10px] tracking-wider uppercase font-sans transition-all duration-200 ${
                    locale === l ? 'bg-wine text-glacier' : 'text-glacier/30 hover:text-glacier/60'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-wine hover:bg-wine-light text-glacier font-sans text-[11px] tracking-[.2em] uppercase transition-colors duration-200"
            >
              {c.cta}
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span
              className={`block w-[22px] h-px bg-glacier transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-px bg-glacier transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-px bg-glacier transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-night flex flex-col items-center justify-center gap-9"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={close}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-serif text-3xl text-glacier/60 hover:text-glacier font-light tracking-wide transition-colors"
              >
                {l.label}
              </motion.a>
            ))}

            <div className="flex gap-3 mt-4">
              {(['pt', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    onLocale(l)
                    close()
                  }}
                  className={`px-4 py-2 border text-xs uppercase tracking-widest font-sans transition-all ${
                    locale === l ? 'border-wine bg-wine text-glacier' : 'border-white/20 text-glacier/40'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}