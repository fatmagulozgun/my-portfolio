import React from 'react'

import taskImg from '../assets/task.png'
import arviaImg from '../assets/arvia.png'
import notImg from '../assets/not.png'
import movieImg from '../assets/movie.png'
import blogappImg from '../assets/blogapp.png'
import gameImg from '../assets/game.png'
import todoImg from '../assets/todo.png'
import burgerImg from '../assets/burger.png'
import posImg from '../assets/pos.png'
import filmImg from '../assets/film.png'
import shopImg from '../assets/shop.png'
import sebImg from '../assets/seb.png'
import havaImg from '../assets/hava.png'
import userImg from '../assets/user.png'

function Projelerim() {
  const projects = [
    {
      title: 'Sebzeci - Web, API ve Mobil Alışveriş Ekosistemi',
      imageSrc: sebImg,
      imageAlt: 'Sebzeci sebze ve meyve alışveriş ekosistemi',
      description:
        'Sebze ve meyve sipariş süreçlerini uçtan uca yöneten full stack bir proje. Web arayüzü, REST API altyapısı ve mobil uygulama ile kullanıcı dostu, ölçeklenebilir bir alışveriş deneyimi sunar.',
      tech: ['Web', 'REST API', 'Mobil', 'Full Stack'],
      bullets: [
        'Ürün listeleme ve detay görüntüleme',
        'Kategori bazlı gezinme ve filtreleme',
        'API destekli dinamik veri yönetimi',
        'Web + mobil platform uyumlu mimari',
        'Modern, performans odaklı ve sürdürülebilir yapı',
      ],
      links: [
        { label: 'Live Demo', href: 'https://sebzeci-web.vercel.app' },
        { label: 'APK İndir', href: '/sebzeci.apk', download: true },
        { label: 'GitHub (Client)', href: 'https://github.com/fatmagulozgun/sebzeci-web' },
        { label: 'GitHub (API)', href: 'https://github.com/fatmagulozgun/sebzeci-api' },
        { label: 'GitHub (Mobile)', href: 'https://github.com/fatmagulozgun/sebzeci-mobile-app' },
      ],
    },
    {
      title: 'MERN Stack Full Stack Not ve Üretkenlik Uygulaması',
      imageSrc: notImg,
      imageAlt: 'MERN not ve üretkenlik uygulaması',
      description:
        'Not yönetimini takvim, odak ve hedef takibi ile birleştiren full stack üretkenlik uygulaması.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
      bullets: [
        'Zengin metin editörü',
        'Odak/Pomodoro takibi',
        'Takvim + hedef panosu',
        'JSON/Markdown dışa aktarma',
      ],
      links: [
        { label: 'Live Demo', href: 'https://notes-client-bay.vercel.app/' },
        { label: 'GitHub (Client)', href: 'https://github.com/fatmagulozgun/notes-client' },
        { label: 'GitHub (API)', href: 'https://github.com/fatmagulozgun/notes-api-server' },
      ],
    },
    {
      title: 'Arvia Sanat',
      imageSrc: arviaImg,
      imageAlt: 'Arvia Sanat kurumsal web sitesi',
      description:
        'Sanatsal kimliği yansıtan, modern ve mobil uyumlu kurumsal web sitesi.',
      tech: ['React', 'Vite', 'CSS', 'Responsive UI'],
      bullets: [
        'Yönlendirme odaklı içerik akışı',
        'Atölye kartları + galeri',
        'Bileşen tabanlı yapı',
        'Tam responsive tasarım',
      ],
      links: [
        { label: 'Live Demo', href: 'https://arviasanat.com.tr/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/arvia-sanat-web' },
      ],
    },
    {
      title: 'MovieApp — Modern Next.js Movie Finder',
      imageSrc: movieImg,
      imageAlt: 'MovieApp film keşif uygulaması',
      description:
        'TMDB ile güncel listeler, arama, detay sayfası ve favoriler akışı sunan Next.js film uygulaması.',
      tech: ['Next.js (App Router)', 'React', 'TMDB API', 'Tailwind CSS'],
      bullets: [
        'Trend / Popüler / Yeni / Yakında listeleri',
        'Hızlı arama + sonuçlar',
        'Detay sayfası (puan/tarih/özet)',
        'Favoriler + son izlenenler',
        'Responsive UI',
      ],
      links: [
        { label: 'Live Demo', href: 'https://movie-app-eight-self-29.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/movie-app' },
      ],
    },
    {
      title: 'MovieAPP — Modern Next.js Movie Finder',
      imageSrc: filmImg,
      imageAlt: 'MovieAPP film keşif uygulaması',
      description:
        'TMDB ile güncel listeler, arama, detay sayfası ve favori yönetimi sunar. Dark/Light tema desteğiyle akıcı bir deneyim verir.',
      tech: ['Next.js', 'React', 'TMDB API'],
      bullets: [
        'Trend ve kategori bazlı film listeleri (Yükleme / Daha fazla)',
        'Hızlı arama (en az 3 karakter) + film detay sayfası',
        'Favoriler ve son izlenenler (localStorage)',
        'Dark/Light tema desteği',
      ],
      links: [
        { label: 'Live Demo', href: 'https://react-my-watchlist-master.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/react-my-watchlist-master' },
      ],
    },
    {
      title: 'Fullstack Blog Dashboard',
      imageSrc: blogappImg,
      imageAlt: 'Fullstack Blog Dashboard uygulaması',
      description:
        'React (Vite) + Express + MongoDB Atlas ile geliştirilmiş, SaaS tarzı arayüze sahip blog yönetim paneli.',
      tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB Atlas'],
      bullets: [
        'Blog CRUD (ekle/düzenle/sil)',
        'Dosya upload ile görsel yükleme',
        'Kategori yönetimi + filtreleme',
        'Arama + sayfalama',
        'SaaS dashboard UI',
      ],
      links: [
        { label: 'Live Demo', href: 'https://blog-app-client-ebon.vercel.app/' },
        { label: 'GitHub (Client)', href: 'https://github.com/fatmagulozgun/blog-app-client' },
        { label: 'GitHub (Server)', href: 'https://github.com/fatmagulozgun/blog-app-server' },
      ],
    },
    {
      title: 'Tic Tac Toe Game',
      imageSrc: gameImg,
      imageAlt: 'Tic Tac Toe Game',
      description:
        'PVP ya da CPU modunda oynanan; Zor seviyede Minimax tabanlı akıllı hamleler sunan klasik Tic Tac Toe.',
      tech: ['React', 'Minimax', 'JavaScript'],
      bullets: [
        'Oyuncu vs Oyuncu veya Kullanıcı vs Bilgisayar modu',
        'Kolay: rastgele hamle | Zor: Minimax (akıllı hamle)',
        'Kazanan satır vurgusu + skor takibi (X / O / Berabere)',
      ],
      links: [
        { label: 'Live Demo', href: 'https://tic-tac-toe-game-three-bay.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/Tic-Tac-Toe-game' },
      ],
    },
    {
      title: 'React Todo Uygulaması',
      imageSrc: todoImg,
      imageAlt: 'React Todo Uygulaması',
      description:
        'Hızlı ekleme, arama/filtreleme ve inline düzenleme sunan; todo’ları tarayıcıda saklayan bir React uygulaması.',
      bullets: [
        'localStorage ile cihazda kalıcı yapılacaklar',
        'useReducer + Context ile state yönetimi',
        'CRUD: ekle, sil, tamamla ve inline düzenle',
        'Arama + filtre (Tümü / Aktif / Tamamlanan)',
        'İstatistik ekranı (toplam/aktif/tamamlanan) + tamamlananları temizle',
        'Bootstrap/Reactstrap ile modern ve responsive UI',
        'UUID ile benzersiz todo id’leri',
      ],
      links: [
        { label: 'Live Demo', href: 'https://react-todo-app-orpin-pi.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/react-todo-app' },
      ],
    },
    {
      title: 'Lezzet Burger',
      imageSrc: burgerImg,
      imageAlt: 'Lezzet Burger restaurant uygulaması',
      description:
        'Gezinmesi kolay sayfalarla modern bir restoran deneyimi: ana sayfa hero, menü, sepet ve iletişim/hakkımızda ekranları.',
      bullets: [
        'React + Vite ile geliştirilen modern restoran landing page',
        'Glass/blur efektli navbar ve premium UI kart tasarımı',
        'Menü sayfasında dinamik ürün kartları (src/images görselleriyle) + fiyat/badge',
        'Sepet akışı: “Sepete Ekle” ile adet artışı ve navbar sepet sayacı',
        '/cart sayfasında adetler ve otomatik toplam hesaplama',
        'Responsive tasarım (mobil/masaüstü uyumlu)',
      ],
      links: [
        { label: 'Live Demo', href: 'https://react-restaurant-website-six.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/react-restaurant-website' },
      ],
    },
    {
      title: 'ShopMe – E‑Ticaret Arayüzü',
      imageSrc: shopImg,
      imageAlt: 'ShopMe e-ticaret arayüzü',
      description:
        'React + Redux Toolkit + Tailwind CSS ile geliştirilmiş, ürün listeleme, kategori filtreleme ve sepet/favori deneyimini öne çıkaran modern e‑ticaret arayüzü.',
      tech: ['React', 'Redux Toolkit', 'Tailwind CSS'],
      bullets: [
        'Ürün listeleme, detay sayfası ve sayfalama',
        'Kategori filtreleme ve fiyat sıralama (artan/azalan)',
        'Anlık ürün arama',
        'Sepet ve favoriler (localStorage ile kalıcı)',
        'Harici API entegrasyonu; hata durumunda yedek veri ile kesintisiz deneyim',
        'Mobil uyumlu, modern UI (Vercel’de canlı demo)',
      ],
      links: [
        { label: 'Live Demo', href: 'https://shop-me-app-main.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/shopMe-app-main' },
      ],
    },
    {
      title: 'Hava Atlas',
      imageSrc: havaImg,
      imageAlt: 'Hava Atlas hava durumu uygulaması',
      description:
        'React (Vite) + TypeScript ile geliştirilmiş, WeatherAPI tabanlı şehir aramalı hava durumu uygulaması.',
      tech: ['React', 'Vite', 'TypeScript', 'WeatherAPI'],
      bullets: [
        'Şehir / ilçe ile konum arama',
        'Anlık hava: sıcaklık, hissedilen, durum ikonu',
        'Günlük özet kartları (sıcaklık, yağış ihtimali, rüzgar, nem, UV)',
        'Türkçe tarih formatı ile gün bazlı görünüm',
        'Yükleme ve hata durumları için net geri bildirim',
      ],
      links: [
        { label: 'Live Demo', href: 'https://react-weather-app-main-self.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/react_weather_app_main' },
      ],
    },
    {
      title: 'AdminFlow – Kullanıcı Yönetim Paneli',
      imageSrc: userImg,
      imageAlt: 'AdminFlow kullanıcı yönetim paneli',
      description:
        'React (Vite) + Express + MongoDB Atlas ile geliştirilmiş; kullanıcı kayıtlarını listeleyen, arama/sıralama ve özet istatistikler sunan tam yönetim paneli.',
      tech: ['React (Vite)', 'Express', 'MongoDB Atlas', 'REST API'],
      bullets: [
        'Kullanıcı listeleme, ekleme, düzenleme ve silme (CRUD)',
        'İsim, e-posta ve ülkeye göre arama; sütuna göre sıralama',
        'Toplam kullanıcı, ülke sayısı ve ülkeye göre dağılım gibi özet istatistikler',
        'REST API ile ayrı frontend/backend mimarisi; CORS ve ortam değişkenleriyle dağıtım (Vercel + Render)',
      ],
      links: [
        { label: 'Live Demo', href: 'https://admin-flow-client.vercel.app/' },
        { label: 'GitHub (Client)', href: 'https://github.com/fatmagulozgun/AdminFlow-client' },
        { label: 'GitHub (Server)', href: 'https://github.com/fatmagulozgun/AdminFlow-server' },
      ],
    },
    {
      title: 'POS Application',
      imageSrc: posImg,
      imageAlt: 'POS Application fullstack arayüz',
      description:
        'Kategoriye göre ürün listeleyen ve sepet/vergilerle (KDV) otomatik toplam hesaplayan full-stack POS uygulaması.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      bullets: [
        'Kategori filtresi (Tümü, Yiyecek, İçecek, Meyve, Sebze vb.)',
        'Ürünleri görsel + fiyat bilgisiyle grid halinde listeleme',
        'Sepet paneli: ürün ekleme ve sepet özetinin canlı güncellenmesi',
        'KDV (%8) ve genel toplam hesaplama',
        'Sipariş oluşturma + sepet temizleme akışı',
        'Üst menü: Ana sayfa, Sepet, Faturalar, Müşteriler, İstatistikler, Çıkış',
      ],
      links: [
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/POS-application' },
      ],
    },
    {
      title: 'SEO Odaklı Beyaz Eşya Servis Web Sitesi',
      imageSrc: taskImg,
      imageAlt: 'SEO odaklı servis web sitesi arayüzü',
      description:
        'SEO odaklı, hızlı ve mobil uyumlu servis sitesi; dinamik sayfalar ve schema.org desteğiyle.',
      tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Schema.org'],
      bullets: [
        'Dinamik hizmet sayfaları',
        'Otomatik meta/başlık üretimi',
        'Schema.org entegrasyonu',
        'Performans + mobil uyum',
      ],
      links: [
        { label: 'Live Demo', href: 'https://internship-seo-website-task.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/fatmagulozgun/internship-seo-website-task' },
      ],
    },
  ];

  return (
    <section className="learn-page">
      <div className="learn-container portfolio-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                <img className="project-img" src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
              </div>

              <div className="project-body">
                <h2 className="project-title">{project.title}</h2>

                <div className="project-actions">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="project-link"
                      href={link.href}
                      target={link.download ? '_self' : '_blank'}
                      rel="noreferrer"
                      {...(link.download ? { download: '' } : {})}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="project-details">
                  <p className="project-desc">{project.description}</p>

                  <ul className="project-bullets">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projelerim