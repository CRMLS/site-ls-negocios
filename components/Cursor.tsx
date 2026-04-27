'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const dot = document.getElementById('cursor-dot')
    if (!cursor || !dot) return

    let mx = 0, my = 0, cx = 0, cy = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }

    const tick = () => {
      cx += (mx - cx) * 0.12
      cy += (my - cy) * 0.12
      cursor.style.left = cx + 'px'
      cursor.style.top = cy + 'px'
      requestAnimationFrame(tick)
    }
    tick()

    document.addEventListener('mousemove', onMove)

    const over = () => cursor.classList.add('hovering')
    const out = () => cursor.classList.remove('hovering')

    const timer = setInterval(() => {
      document.querySelectorAll('a,button,.card-light').forEach(el => {
        el.removeEventListener('mouseenter', over)
        el.removeEventListener('mouseleave', out)
        el.addEventListener('mouseenter', over)
        el.addEventListener('mouseleave', out)
      })
    }, 1000)

    return () => {
      document.removeEventListener('mousemove', onMove)
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-dot" />
    </>
  )
}
