'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const dot = document.getElementById('cursor-dot')
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0
    let curX = 0, curY = 0

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12
      cursor.style.left = curX + 'px'
      cursor.style.top = curY + 'px'
      requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => cursor.classList.add('hovering')
    const removeHover = () => cursor.classList.remove('hovering')

    document.addEventListener('mousemove', move)

    const hoverEls = document.querySelectorAll('a, button, .card-hover, .nav-link')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-dot" />
    </>
  )
}
