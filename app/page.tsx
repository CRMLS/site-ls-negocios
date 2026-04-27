'use client'
import { useState, useEffect } from 'react'
import Cursor from '@/components/Cursor'
import Particles from '@/components/Particles'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Partners from '@/components/Partners'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import { Modal, WhatsAppFloat, Footer } from '@/components/UI'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Particles />
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Stats />
        <Partners />
        <Solutions />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat onClick={() => setModalOpen(true)} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
