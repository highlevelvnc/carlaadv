'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)

    const seen = sessionStorage.getItem('cgm-intro')
    if (seen) { setVisible(false); return }

    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('cgm-intro', '1')
    }, mq.matches ? 800 : 3000)

    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0B0F1A' }}
          aria-label="A carregar"
          role="status"
        >
          {/* Justice Scale SVG */}
          <div className="mb-8" style={{ height: 96 }}>
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
              {/* Spinning ring behind */}
              <circle cx="48" cy="48" r="42" stroke="rgba(245,240,235,0.06)" strokeWidth="1" />
              <circle
                cx="48" cy="48" r="42"
                stroke="rgba(245,240,235,0.18)"
                strokeWidth="1"
                strokeDasharray="264"
                strokeDashoffset="80"
                strokeLinecap="round"
                style={{
                  transformOrigin: '48px 48px',
                  animation: 'spinRing 3s linear infinite'
                }}
              />

              {/* Base pole */}
              <line x1="48" y1="20" x2="48" y2="76" stroke="rgba(245,240,235,0.7)" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Top horizontal beam */}
              <line x1="24" y1="28" x2="72" y2="28" stroke="rgba(245,240,235,0.7)" strokeWidth="1.5" strokeLinecap="round"
                style={{ transformOrigin: '48px 28px', animation: 'scaleBalance 3s ease-in-out infinite' }}
              />

              {/* Left chain */}
              <line x1="28" y1="28" x2="24" y2="52" stroke="rgba(245,240,235,0.5)" strokeWidth="1"
                style={{ transformOrigin: '28px 28px', animation: 'swingLeft 3s ease-in-out infinite' }}
              />
              {/* Left pan */}
              <ellipse cx="24" cy="54" rx="10" ry="3" fill="none" stroke="#5B1E2D" strokeWidth="1.5"
                style={{ transformOrigin: '24px 28px', animation: 'swingLeft 3s ease-in-out infinite' }}
              />
              <line x1="14" y1="54" x2="34" y2="54" stroke="#5B1E2D" strokeWidth="1.5"
                style={{ transformOrigin: '24px 28px', animation: 'swingLeft 3s ease-in-out infinite' }}
              />

              {/* Right chain */}
              <line x1="68" y1="28" x2="72" y2="52" stroke="rgba(245,240,235,0.5)" strokeWidth="1"
                style={{ transformOrigin: '68px 28px', animation: 'swingRight 3s ease-in-out infinite' }}
              />
              {/* Right pan */}
              <ellipse cx="72" cy="54" rx="10" ry="3" fill="none" stroke="rgba(245,240,235,0.4)" strokeWidth="1.5"
                style={{ transformOrigin: '72px 28px', animation: 'swingRight 3s ease-in-out infinite' }}
              />
              <line x1="62" y1="54" x2="82" y2="54" stroke="rgba(245,240,235,0.4)" strokeWidth="1.5"
                style={{ transformOrigin: '72px 28px', animation: 'swingRight 3s ease-in-out infinite' }}
              />

              {/* Base foot */}
              <line x1="38" y1="76" x2="58" y2="76" stroke="rgba(245,240,235,0.5)" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Center knob */}
              <circle cx="48" cy="28" r="2.5" fill="rgba(245,240,235,0.8)" />
            </svg>
          </div>

          {/* Name */}
          <p
            className="font-serif text-glacier tracking-widest uppercase text-xl md:text-2xl"
            style={{
              fontWeight: 300,
              letterSpacing: '0.18em',
              opacity: 0,
              animation: 'fadeUp .8s ease .5s forwards'
            }}
          >
            Carla Guerreiro Marques
          </p>

          {/* Wine line */}
          <div
            style={{
              height: 1,
              background: '#5B1E2D',
              margin: '14px auto',
              width: 0,
              animation: 'expandW .7s ease 1s forwards'
            }}
          />

          {/* Tagline */}
          <p
            className="font-sans text-glacier/40 uppercase"
            style={{
              fontSize: '.6rem',
              letterSpacing: '.4em',
              opacity: 0,
              animation: 'fadeUp .6s ease 1.5s forwards'
            }}
          >
            Rigor · Estratégia · Confiança
          </p>

          {/* Progress bar */}
          <div
            className="mt-10 overflow-hidden"
            style={{ width: 120, height: 1, background: 'rgba(245,240,235,0.08)' }}
          >
            <div
              style={{
                height: 1,
                background: '#5B1E2D',
                width: 0,
                animation: 'loadBar 2.6s ease forwards'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
