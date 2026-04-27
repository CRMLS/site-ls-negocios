'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Partners from '@/components/Partners'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Stats />
      <Partners />
      <Solutions />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppFloat onClick={() => setModalOpen(true)} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
