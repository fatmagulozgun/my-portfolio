import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.png'

export default function Navbar() {
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
      </div>
    </header>
  )
}

