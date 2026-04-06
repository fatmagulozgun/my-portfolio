import React from "react";
import aboutImg from "../assets/imgg.jpg";
import { useNavigate } from "react-router-dom";
const Hakkimda = () => {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="about-stars"></div>

      <div className="about-container">
        <div className="about-left">
          <h1 className="about-heading">Hakkımda</h1>

          <p className="about-description">
            Merhaba, ben Fatmagül. Yazılım geliştirmeyi sadece kod yazmak değil, 
            aynı zamanda faydalı ve güzel deneyimler oluşturmak olarak görüyorum. 
            Modern teknolojilerle kullanıcı dostu arayüzler tasarlamaya odaklanıyorum. 
            Yeni şeyler öğrenmeyi, üretmeyi ve her projede bir öncekinin daha iyisini 
            ortaya koymayı seviyorum.
          </p>

          <div className="about-feature-list">
            <div className="about-feature-item">
              <div className="about-feature-icon">💻</div>
              <span>Yazılım Geliştirici</span>
            </div>

            <div className="about-feature-item">
              <div className="about-feature-icon">⚙️</div>
              <span>Frontend & Backend</span>
            </div>

            <div className="about-feature-item">
              <div className="about-feature-icon">👤</div>
              <span>Kullanıcı Odaklı Arayüzler</span>
            </div>
          </div>

          <button className="about-cta" onClick={() => navigate('/daha-fazla-hakkimda')}>Daha fazlasını öğren</button>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="Fatmagül Özgün" className="about-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hakkimda;