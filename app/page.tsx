'use client'
import { useState, useEffect } from 'react'
import Cursor from '@/components/Cursor'
import Particles from '@/components/Particles'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Solutions from '@/components/Solutions'
import { Team, Partners, Contact, Footer, Modal, WhatsAppFloat } from '@/components/Sections'

export default function Home() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Particles />
      <Navbar onModal={() => setModal(true)} />
      <main>
        <Hero onModal={() => setModal(true)} />
        <Stats />
        <Partners />
        <Solutions />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat onClick={() => setModal(true)} />
      <Modal open={modal} onClose={() => setModal(false)} />
    </>
  )
}
