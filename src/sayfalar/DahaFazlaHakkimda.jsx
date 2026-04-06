import React from "react";
import nodeJsImg from "../assets/nodejs.png";
import a1Img from "../assets/a1.jpg";
import cssImg from "../assets/css.png";
import jqueryImg from "../assets/165.jpg";
import bootstrapImg from "../assets/bot.jpg";
import jsImg from "../assets/js.png";
import gitImg from "../assets/git.png";
import reactMiniImg from "../assets/react-mini.png";
import jsMiniImg from "../assets/jss-mini.png";
import vueMiniImg from "../assets/vue-mini.png";
import htmlMiniImg from "../assets/html-mini.png";
import cssMiniImg from "../assets/css-mini.png";
import tailwindMiniImg from "../assets/tailwind-mini.png";
import phpMiniImg from "../assets/php-mini.png";
import nodeMiniImg from "../assets/nodejs-mini.jpg";
import expressMiniImg from "../assets/expressjs-mini.png";
import mysqlMiniImg from "../assets/mysql-mini.png";
import mongodbMiniImg from "../assets/mongodb-mini.png";
import gitMiniImg from "../assets/git-mini.png";
import postmanMiniImg from "../assets/postman-mini.png";
import figmaMiniImg from "../assets/figma-mini.png";
import bootstrap from "../assets/bootstrap.png";
import mku from "../assets/mku.png";
import mtal from "../assets/mtal.png";

const DahaFazlaHakkimda = () => {
  const skills = [
    { name: "React", iconImg: reactMiniImg, percent: 60 },
    { name: "JavaScript", iconImg: jsMiniImg, percent: 70 },
    { name: "Vue.js", iconImg: vueMiniImg, percent: 55 },
    { name: "HTML", iconImg: htmlMiniImg, percent: 65 },
    { name: "CSS", iconImg: cssMiniImg, percent: 60 },
    { name: "Next.js", iconImg: reactMiniImg, percent: 50 },
    { name: "Tailwind", iconImg: tailwindMiniImg, percent: 55 },
    { name: "PHP (Laravel)", iconImg: phpMiniImg, percent: 45 },
    { name: "Node.js", iconImg: nodeMiniImg, percent: 55 },
    { name: "Express.js", iconImg: expressMiniImg, percent: 45 },
    { name: "MySQL", iconImg: mysqlMiniImg, percent: 55 },
    { name: "MongoDB", iconImg: mongodbMiniImg, percent: 45 },
    { name: "Git", iconImg: gitMiniImg, percent: 60 },
    { name: "Postman", iconImg: postmanMiniImg, percent: 55 },
    { name: "Figma", iconImg: figmaMiniImg, percent: 55 },
    { name: "Bootstrap", iconImg: bootstrap, percent: 55 },
  ];

  const technicalCertifications = [
    { title: "Node.js ile Web Programlama", img: nodeJsImg, alt: "Node.js sertifikası" },
    { title: "A1 seviye İngilizce", img: a1Img, alt: "A1 İngilizce sertifikası" },
    { title: "A2 seviye İngilizce", img: a1Img, alt: "A2 İngilizce sertifikası" },
    { title: "CSS", img: cssImg, alt: "CSS sertifikası" },
    { title: "jQuery ile Web Programcılığı", img: jqueryImg, alt: "jQuery sertifikası" },
    { title: "Bootstrap 5", img: bootstrapImg, alt: "Bootstrap 5 sertifikası" },
    { title: "JavaScript", img: jsImg, alt: "JavaScript sertifikası" },
    { title: "Git ve GitHub", img: gitImg, alt: "Git ve GitHub sertifikası" },
  ];

  const experiences = [
    {
      title: "Full Stack Geliştirici Stajyeri",
      company: "Eterna Teknoloji",
      dates: "09.02.2026 - 24.05.2026",
    },
    {
      title: "Frontend Developer",
      company: "ISKUR Genclik Programi",
      dates: "24.11.2025 - 01.02.2026",
    },
    {
      title: "Full Stack Geliştirici Stajyeri",
      company: "Zenith Tech Innovation",
      dates: "01.07.2025 - 29.07.2025",
    },
    {
      title: "Grafiker",
      company: "Poyraz Dijital Reklam Ajansı",
      dates: "15.08.2021 - 20.12.2021",
    },
    {
      title: "Bilişim Stajyeri",
      company: "T.C. Posta ve Telgraf Teşkilatı",
      dates: "09.09.2019 - 19.06.2020",
    },
  ];

  return (
    <section className="learn-page">
      <div className="learn-container">


        <h2 className="learn-sectionTitle">Uzmanlıklarım</h2>
        <div className="learn-skillsGrid">
          {skills.map((skill) => (
            <div className="learn-skillCard" key={skill.name}>
              <div className="learn-skillTop">
                <div className="learn-skillIcon">
                  <img
                    src={skill.iconImg}
                    alt={`${skill.name} ikonu`}
                    className="learn-skillIconImg"
                  />
                </div>
                <div className="learn-skillName">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>

        <section className="learn-section">
          <h2 className="learn-sectionTitle">Sertifikalar</h2>
          <div className="learn-certList">
            {technicalCertifications.map((cert) => (
              <div className="learn-skillCard" key={cert.title}>
                <div className="learn-skillTop">
                  <div className="learn-skillIcon">
                    <img
                      src={cert.img}
                      alt={cert.alt}
                      className="learn-skillIconImg"
                    />
                  </div>
                  <div className="learn-skillName">{cert.title}</div>
                </div>
              </div>
            ))}
          </div>
          
        </section>

        <section className="learn-section">
          <h2 className="learn-sectionTitle">Eğitim</h2>
          <div className="learn-educationList">
            <div className="learn-educationItem">
              <div className="learn-educationContent">
                <div className="learn-educationName">Mehmet Akif Ersoy Üniversitesi - Yazılım Mühendisliği</div>
                <div className="learn-educationDates">2022 - 2026</div>
              </div>
            </div>
            <div className="learn-educationItem">
              <div className="learn-educationContent">
                <div className="learn-educationName">İsmet İnönü MTAL - Bilişim Teknolojileri</div>
                <div className="learn-educationDates">2016 - 2020</div>
              </div>
            </div>
          </div>
        </section>

        <section className="learn-section">
          <h2 className="learn-sectionTitle">Deneyimler</h2>
          <div className="learn-experienceList">
            {experiences.map((experience, idx) => (
              <div
                className={`learn-experienceItem ${idx % 2 === 0 ? "left" : "right"}`}
                key={`${experience.company}-${experience.dates}`}
              >
                <div className="learn-experienceTitle">{experience.title}</div>
                <div className="learn-experienceCompany">{experience.company}</div>
                <div className="learn-experienceDates">{experience.dates}</div>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </section>
  );
};

export default DahaFazlaHakkimda;