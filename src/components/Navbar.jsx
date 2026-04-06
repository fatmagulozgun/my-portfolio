import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.png'

function Icon({ children, label }) {
  return (
    <span className="nav-icon" aria-label={label} role="img">
      {children}
    </span>
  )
}

export default function Navbar() {
  const links = {
    linkedin: 'https://www.linkedin.com/in/fatmagul-ozgun',
    github: 'https://github.com/',
    whatsapp: 'https://wa.me/905304104763',
  }

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <Link className="nav-logo" to="/" aria-label="Anasayfa">
          <span className="nav-avatar" aria-hidden="true">
            <img className="nav-avatarImg" src={profileImg} alt="" />
          </span>
        </Link>

        <nav className="nav-center" aria-label="Ana menü">
          <Link className="nav-link" to="/hakkimda">
            Hakkımda
          </Link>
          <Link className="nav-link" to="/projelerim">
            Projelerim
          </Link>
          <Link className="nav-link" to="/contact">
            İletişim
          </Link>
        </nav>

        <div className="nav-right">
          <div className="nav-social" aria-label="Sosyal linkler">
            <a
              className="nav-socialLink"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Icon label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1.01 1.84-2.07 3.79-2.07 4.05 0 4.8 2.66 4.8 6.12v9.35h-4v-8.29c0-1.98-.04-4.53-2.76-4.53-2.76 0-3.18 2.16-3.18 4.39v8.43h-4V7.98Z"
                  />
                </svg>
              </Icon>
            </a>

            <a
              className="nav-socialLink"
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Icon label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .5C5.73.5.75 5.6.75 11.94c0 5.1 3.2 9.42 7.64 10.95.56.1.77-.25.77-.55 0-.27-.01-.98-.02-1.93-3.11.69-3.77-1.54-3.77-1.54-.51-1.33-1.25-1.68-1.25-1.68-1.02-.71.08-.7.08-.7 1.13.08 1.72 1.17 1.72 1.17 1 .88 2.62.62 3.26.47.1-.74.39-1.25.71-1.54-2.48-.29-5.09-1.26-5.09-5.62 0-1.24.43-2.25 1.15-3.05-.12-.29-.5-1.46.11-3.05 0 0 .94-.31 3.09 1.16a10.4 10.4 0 0 1 2.81-.39c.95 0 1.91.13 2.81.39 2.15-1.47 3.09-1.16 3.09-1.16.61 1.59.23 2.76.11 3.05.71.8 1.15 1.81 1.15 3.05 0 4.37-2.61 5.33-5.1 5.61.4.36.76 1.07.76 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.65.78.55 4.44-1.53 7.63-5.85 7.63-10.95C23.25 5.6 18.27.5 12 .5Z"
                  />
                </svg>
              </Icon>
            </a>

            <a
              className="nav-socialLink"
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <Icon label="WhatsApp">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.48 0 .12 5.36.12 11.94c0 2.1.55 4.16 1.6 5.99L0 24l6.22-1.63a11.9 11.9 0 0 0 5.84 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.18-1.24-6.17-3.49-8.44ZM12.07 21.8h-.01a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-3.69.97.99-3.6-.23-.37a9.9 9.9 0 0 1-1.53-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.73-7.84c-.31-.16-1.85-.91-2.14-1.01-.29-.1-.5-.16-.71.16-.2.31-.82 1.01-1 1.22-.19.2-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.2-.31.31-.51.1-.2.05-.39-.03-.55-.08-.16-.71-1.7-.98-2.33-.26-.63-.53-.54-.71-.54h-.6c-.2 0-.55.08-.83.39-.29.31-1.09 1.07-1.09 2.6 0 1.53 1.12 3.01 1.27 3.22.16.2 2.2 3.35 5.33 4.7.75.32 1.34.51 1.8.65.76.24 1.45.2 2 .12.61-.09 1.85-.75 2.11-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.2-.6-.36Z"
                  />
                </svg>
              </Icon>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

