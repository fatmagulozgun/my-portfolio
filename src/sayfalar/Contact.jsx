import React, { useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('ftmglozgn@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="learn-page contact-page">
      <div className="learn-container contact-container">
        <h1 className="learn-sectionTitle">İletişim</h1>
        <p className="contact-subtitle">
          Yeni projeler, iş/staj fırsatları veya işbirlikleri için aşağıdaki kanallardan benimle hızlıca
          iletişime geçebilirsin.
        </p>

        <div className="contact-grid contact-gridModern">
          <a className="contact-card" href="tel:+905516447861">
            <span className="contact-icon" aria-hidden="true">
              📞
            </span>
            <span className="contact-label">Telefon</span>
            <span className="contact-value">+90 551 644 78 61</span>
          </a>

          <div className="contact-card contact-cardStatic">
            <span className="contact-icon" aria-hidden="true">
              ✉️
            </span>
            <span className="contact-label">E-posta</span>
            <div className="contact-emailRow">
              <a className="contact-emailLink" href="mailto:ftmglozgn@gmail.com">
                ftmglozgn@gmail.com
              </a>
              <button
                type="button"
                className="contact-copyBtn"
                onClick={handleCopy}
                aria-label={copied ? 'Kopyalandı' : 'E-postayı kopyala'}
                title={copied ? 'Kopyalandı' : 'Kopyala'}
              >
                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              </button>
            </div>
          </div>

          <a
            className="contact-card"
            href="https://github.com/fatmagulozgun?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              💻
            </span>
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/fatmagulozgun</span>
          </a>
          <a
            className="contact-card"
            href="https://www.linkedin.com/in/fatmagul-ozgun"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              🔗
            </span>
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/fatmagul-ozgun</span>
          </a>
          <div className="contact-card contact-cardStatic">
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <span className="contact-label">Konum</span>
            <span className="contact-value">Seyhan / Adana</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact