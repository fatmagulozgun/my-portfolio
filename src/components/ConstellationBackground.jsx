import { useEffect, useRef } from 'react'

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

export default function ConstellationBackground({
  className = '',
  density = 0.00008, // particles per px^2
  maxParticles = 140,
  minParticles = 55,
  speed = 0.35,
  linkDistance = 140,
  linkOpacity = 0.18,
  dotOpacity = 0.9,
  dotRadius = 1.35,
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const state = {
      dpr: 1,
      w: 0,
      h: 0,
      particles: [],
      mouse: { x: -9999, y: -9999, active: false },
      running: !prefersReducedMotion,
    }

    function resize() {
      const rect = canvas.getBoundingClientRect()
      state.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      state.w = Math.max(1, Math.floor(rect.width))
      state.h = Math.max(1, Math.floor(rect.height))

      canvas.width = Math.floor(state.w * state.dpr)
      canvas.height = Math.floor(state.h * state.dpr)
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)

      const target = clamp(
        Math.floor(state.w * state.h * density),
        minParticles,
        maxParticles,
      )

      if (state.particles.length < target) {
        const add = target - state.particles.length
        for (let i = 0; i < add; i += 1) state.particles.push(makeParticle())
      } else if (state.particles.length > target) {
        state.particles.length = target
      }
    }

    function makeParticle() {
      const angle = Math.random() * Math.PI * 2
      const sp = speed * (0.6 + Math.random() * 0.8)
      return {
        x: Math.random() * state.w,
        y: Math.random() * state.h,
        vx: Math.cos(angle) * sp,
        vy: Math.sin(angle) * sp,
        r: dotRadius * (0.9 + Math.random() * 0.35),
      }
    }

    function step() {
      ctx.clearRect(0, 0, state.w, state.h)

      // soft vignette
      const grd = ctx.createRadialGradient(
        state.w * 0.5,
        state.h * 0.35,
        0,
        state.w * 0.5,
        state.h * 0.5,
        Math.max(state.w, state.h) * 0.8,
      )
      grd.addColorStop(0, 'rgba(15, 35, 70, 0.0)')
      grd.addColorStop(1, 'rgba(0, 0, 0, 0.25)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, state.w, state.h)

      // update
      for (const p of state.particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -10) p.x = state.w + 10
        if (p.x > state.w + 10) p.x = -10
        if (p.y < -10) p.y = state.h + 10
        if (p.y > state.h + 10) p.y = -10
      }

      // links (O(n^2) but capped)
      ctx.lineWidth = 1
      for (let i = 0; i < state.particles.length; i += 1) {
        const a = state.particles[i]
        for (let j = i + 1; j < state.particles.length; j += 1) {
          const b = state.particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          const maxD = linkDistance
          if (d2 > maxD * maxD) continue

          const d = Math.sqrt(d2)
          const alpha = (1 - d / maxD) * linkOpacity
          ctx.strokeStyle = `rgba(120, 170, 255, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // mouse interaction (subtle)
      if (state.mouse.active) {
        const mx = state.mouse.x
        const my = state.mouse.y
        const maxD = linkDistance * 1.15
        for (const p of state.particles) {
          const dx = p.x - mx
          const dy = p.y - my
          const d2 = dx * dx + dy * dy
          if (d2 > maxD * maxD) continue
          const d = Math.sqrt(d2)
          const alpha = (1 - d / maxD) * (linkOpacity * 1.3)
          ctx.strokeStyle = `rgba(120, 170, 255, ${alpha})`
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.stroke()
        }
      }

      // dots
      ctx.fillStyle = `rgba(200, 225, 255, ${dotOpacity})`
      for (const p of state.particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = window.requestAnimationFrame(step)
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect()
      state.mouse.x = e.clientX - rect.left
      state.mouse.y = e.clientY - rect.top
      state.mouse.active = true
    }
    function onPointerLeave() {
      state.mouse.active = false
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave, { passive: true })

    resize()

    if (state.running) rafRef.current = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [
    density,
    dotOpacity,
    dotRadius,
    linkDistance,
    linkOpacity,
    maxParticles,
    minParticles,
    speed,
  ])

  return (
    <canvas
      ref={canvasRef}
      className={`bg-constellation ${className}`.trim()}
      aria-hidden="true"
    />
  )
}

