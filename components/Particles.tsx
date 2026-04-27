'use client'
import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, raf: number
    let mx = 0, my = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 75 }, () => ({
      x: Math.random() * 800, y: Math.random() * 600,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.2 + .3, a: Math.random() * .3 + .08,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        const dx = mx - p.x, dy = my - p.y
        const d = Math.sqrt(dx*dx + dy*dy)
        if (d < 130) { p.vx -= dx*.00015; p.vy -= dy*.00015 }
        p.x += p.vx; p.y += p.vy
        p.vx *= .999; p.vy *= .999
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(74,158,255,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i+1; j < pts.length; j++) {
          const dx = pts[i].x-pts[j].x, dy = pts[i].y-pts[j].y
          const d = Math.sqrt(dx*dx+dy*dy)
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(74,158,255,${.07*(1-d/110)})`; ctx.lineWidth=.5; ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const mm = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', mm)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', mm) }
  }, [])

  return <canvas ref={ref} style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0, opacity:.7 }} />
}
