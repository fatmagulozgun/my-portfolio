import codeEditorMock from '../assets/code-editor-mock.svg'
import projectUiMock from '../assets/project-ui-mock.svg'
import { Link } from 'react-router-dom'

function Anasayfa() {
    return (
        <section className="hero">
            <div className="hero-grid">
                <div className="hero-left">
                    <div className="hero-kicker">Full Stack Developer</div>

                    <h1 className="hero-title">
                        Merhaba, ben <span className="hero-accent">Fatmagül</span>.
                        <br />Modern ve ölçeklenebilir web uygulamaları geliştiriyorum.
                    </h1>

                    <p className="hero-subtitle">
                    Frontend’den backend’e kadar tüm süreci uçtan uca yönetiyorum.
                    Performans, güvenlik ve kullanıcı deneyimini merkeze alarak sürdürülebilir dijital ürünler geliştiriyorum.
                    </p>

                    <div className="hero-bottom">
                        <div className="hero-actions">
                            <Link className="btn btn-primary" to="/contact">
                                İletişime geç
                            </Link>
                            <Link className="btn btn-ghost" to="/projelerim">
                                Projeleri incele
                            </Link>
                        </div>
                    </div>


                </div>

                <div className="hero-right" aria-hidden="true">
                    <div className="hero-imageFrame">
                        <div className="hero-mockups">
                            <img className="hero-mock hero-mockEditor" src={codeEditorMock} alt="" />
                            <img className="hero-mock hero-mockUi" src={projectUiMock} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Anasayfa