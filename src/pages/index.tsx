export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*==================== UNICONS ====================*/}
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
      {/*==================== SWIPER CSS ====================*/}
      <link rel="stylesheet" href="/packages/css/swiper-bundle.min.css" />
      {/*==================== CSS ====================*/}
      <link rel="stylesheet" href="/packages/css/styles.css" />
      <title>Prashanna</title>
      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Ananda Dimmas Budiarto
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon" />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon" />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon" />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon" />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon" />
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon" />
                  Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>
          <div className="nav__btns">
            {/* Theme change button */}
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>
      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/prashanna-sathiyamoorthy-194704153/"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-linkedin-alt" />
                </a>
                <a
                  href="https://twitter.com/prashanna01"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-twitter-alt" />
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  className="home__social-icon"
                >
                  <i className="uil uil-github-alt" />
                </a>
              </div>
              <div className="home__img">
                <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="home__blob-img"
                      x=""
                      xlinkHref="packages/images/pras-1.jpeg"
                    />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I am Prashanna</h1>
                <h3 className="home__subtitle">Data Analyst</h3>
                <p className="home__description">
                  High level experience in data analitical knowledge and digital
                  banking with quality work.
                </p>
                <a href="#contact" className="button button--flex home__button">
                  Contact Me
                  <i className="uil uil-message button__icon" />
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse" />
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow" />
              </a>
            </div>
          </div>
        </section>
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Introduction</span>
          <div className="about__container container grid">
            <img src="packages/images/pras-2.jpeg" alt="" className="about__img" />
            <div className="about__data">
              <p className="about__description">
                Data analyst, with extensive knowledge and years of experience,
                working in Digital banking technologies and other data analitical
                tools, delivering quality work.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">03+</span>
                  <span className="about__info-name">
                    Years <br /> experience
                  </span>
                </div>
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">
                    Completed <br /> certifications
                  </span>
                </div>
                <div>
                  <span className="about__info-title">02+</span>
                  <span className="about__info-name">
                    companies
                    <br />
                    worked
                  </span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href="packages/pdf/" className="button button--flex">
                  Download CV
                  <i className="uil uil-download-alt button__icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*==================== SKILLS ====================*/}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container container grid">
            <div>
              {/*==================== SKILL-1 ====================*/}
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-analytics skills__icon" />
                  <div>
                    <h1 className="skills__title">Data Analyst</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__python" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Tableau</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__tab" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">SQL</h3>
                      <span className="skills__number">50%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sql" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Google Suite</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__google" />
                    </div>
                  </div>
                </div>
              </div>
              {/*==================== SKILLS 2 ====================*/}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-money-bill skills__icon" />
                  <div>
                    <h1 className="skills__title">Banker</h1>
                    <span className="skills__subtitle">More than 3 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Digital Banking</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__bank" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Counters</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__counter" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Google suite</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__google" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">MS Office</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__office" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/*==================== SKILLS 3 ====================*/}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon" />
                  <div>
                    <h1 className="skills__title">Web Developer</h1>
                    <span className="skills__subtitle">More than 3 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js" />
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">WordPress</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__wordpress" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== QUALIFICATION ====================*/}
        <section className="qualification__section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i className="uil uil-graduation-cap qualification__icon" />
                Education
              </div>
              <div
                className="qualification__button button--flex"
                data-target="#work"
              >
                <i className="uil uil-briefcase-alt qualification__icon" />
                Work
              </div>
            </div>
            <div className="qualification__sections">
              {/*==================== QUALIFICATION CONTENT 1 ====================*/}
              <div
                className="qualification__content qualification__active"
                data-content=""
                id="education"
              >
                {/*==================== QUALIFICATION 1 ====================*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Diploma in English </h3>
                    <span className="qualification__subtitle">
                      British Council, Kandy
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2011 - 2012
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*==================== QUALIFICATION 2 ====================*/}
                <div className="qualification__data">
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">GCE Adavance Level</h3>
                    <span className="qualification__subtitle">
                      {/* St.Anthony's College, Kandy */}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2012 - 2014
                    </div>
                  </div>
                </div>
                {/*==================== QUALIFICATION 3 ====================*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      BSc Management Information System
                    </h3>
                    <span className="qualification__subtitle">
                      NSBM Green University
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2015 - 2018
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*==================== QUALIFICATION 4 ====================*/}
                <div className="qualification__data">
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    {/* <span class="qualification__line"></span> */}
                  </div>
                  <div>
                    <h3 className="qualification__title">
                      Data Analyst Professional Certification
                    </h3>
                    <span className="qualification__subtitle">
                      Google | Coursera - Online
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2021
                    </div>
                  </div>
                </div>
              </div>
              {/*==================== QUALIFICATION CONTENT 2 ====================*/}
              <div className="qualification__content" data-content="" id="work">
                {/*==================== QUALIFICATION 1 ====================*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Trainee Banking Assistant
                    </h3>
                    <span className="qualification__subtitle">
                      DFCC Head Office - Colombo
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2017 - 2019
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*==================== QUALIFICATION 2 ====================*/}
                <div className="qualification__data">
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">Banking Assistant</h3>
                    <span className="qualification__subtitle">
                      DFCC Head Office - Colombo
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2019 - 2020
                    </div>
                  </div>
                </div>
                {/*==================== QUALIFICATION 3 ====================*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Data Analyst - Digital banking
                    </h3>
                    <span className="qualification__subtitle">
                      DFCC Head Office - Colombo
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2020 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    {/* <span class="qualification__line"></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What I offer</span>
          <div className="services__container container grid">
            {/*==================== SERVICES 1 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-analytics skills__icon" />
                <h3 className="services__title">
                  Data Analyst
                  <br />
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Data Analyst <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>I analize data systems.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Automating information retrieval.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Systematically applying statistical and logical techniques.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Visualizing graphs, charts and preparing reports and
                        dashboards.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 2 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-money-bill skills__icon" />
                <h3 className="services__title">
                  Banker
                  <br />{" "}
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Banker
                    <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Assiting both personal and commercial clients with financial
                        questions and needs.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Maintain customer acoounts and help resolve disputes.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Refer customers to loan officers or other financial
                        specialist.
                      </p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>
                        Systematically applying statistical and logical techniques.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*==================== SERVICES 3 ====================*/}
            <div className="services__content">
              <div>
                <i className="uil uil-arrow services__icon" />
                <h3 className="services__title">
                  Web Developer
                  <br />
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View more
                <i className="uil uil-arrow-right button__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Web Developer
                    <br />
                  </h4>
                  <i className="uil uil-times services__modal-close" />
                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>I develop the user interface.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Webpage development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>I create Ux element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p>Well trained in WordPress.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== PORTFOLIO ====================*/}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent works</span>
          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">
              {/*==================== PORTFOLIO 1 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/images/portfolio1.jpg"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Modern Dashboard</h3>
                  <p className="portfolio__description">
                    Data analitical dashboard adaptable to all devices, with ui
                    components and animated interactions.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>
              {/*==================== PORTFOLIO 2 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/images/portfolio3.PNG"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">E-Commerce website</h3>
                  <p className="portfolio__description">
                    Above Amazon clone is adaptable to all devices, with ui
                    components and animated interactions.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>
              {/*==================== PORTFOLIO 3 ====================*/}
              <div className="portfolio__content grid swiper-slide">
                <img
                  src="/packages/images/portfolio2.png"
                  alt=""
                  className="portfolio__img"
                />
                <div className="portfolio_">
                  <h3 className="portfolio__title">Brand Design</h3>
                  <p className="portfolio__description">
                    Tesla Clone is adaptable to all devices, with ui components and
                    animated interactions.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon" />
                  </a>
                </div>
              </div>
            </div>
            {/* add arrows*/}
            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon" />
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon" />
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination" />
          </div>
        </section>
        {/*==================== PROJECT IN MIND ====================*/}
        <section className="project section">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">You have a new project?</h2>
                <p className="project__description">
                  Contact me now and get discounts on your Web development projects.
                </p>
                <a href="#contact" className="button button--flex button--white">
                  Contact me
                  <i className="uil uil-message project__icon button__icon" />
                </a>
              </div>
              {/* <img src="assets/img/project.png" alt="" class="project__img"> */}
            </div>
          </div>
        </section>
        {/*==================== TESTIMONIAL ====================*/}
        <section className="testimonial section">
          <h2 className="section__title">Testimonials</h2>
          <span className="section__subtitle">My client saying</span>
          <div className="testimonial__container container swiper-container">
            <div className="swiper-wrapper">
              {/*==================== TESTIMONIAL 1 ====================*/}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/arun.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Arun Prashanth</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
              {/*==================== TESTIMONIAL 2 ====================*/}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/yuga.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Yugadarshan</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
              {/*==================== TESTIMONIAL 3 ====================*/}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src="/packages/images/shenan.PNG"
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Shenan Sachinthan</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                    <i className="uil uil-star testimonial__icon-star" />
                  </div>
                </div>
                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
            {/*Add pagination*/}
            <div className="swiper-pagination swiper-pagination-testimonial" />
          </div>
        </section>
        {/*==================== CONTACT ME ====================*/}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone-alt contact__icon" />
                <div>
                  <h3 className="contact__title">Call me</h3>
                  <span className="contatc__subtitle">(+94) 755422421</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope contact__icon" />
                <div>
                  <h3 className="contact__title">E-mail</h3>
                  <span className="contatc__subtitle">Prashanna01@gmail.com</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon" />
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contatc__subtitle">Kandy, Sri Lanka</span>
                </div>
              </div>
            </div>
            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Name
                  </label>
                  <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    E-mail
                  </label>
                  <input type="email" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Subject
                </label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  cols={0}
                  rows={7}
                  className="contact__input"
                  defaultValue={""}
                />
              </div>
              <div>
                <a href="#" className="button button--flex">
                  Send message
                  <i className="uil uil-message button__icon" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
      {/*==================== FOOTER ====================*/}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Prashanna Sathiyamoorthy</h1>
              <span className="footer__subtitle">Data Analyst</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a
                href='https://www.facebook.com/prashanna.drashan"'
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-facebook" />
              </a>
              <a
                href="https://www.instagram.com/prashanna01/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-instagram" />
              </a>
              <a
                href="https://twitter.com/prashanna01"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter-alt" />
              </a>
            </div>
          </div>
          <p className="footer__copy">© Ratheshan03. All rights reserved.</p>
        </div>
      </footer>
      {/*==================== SCROLL TOP ====================*/}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon" />
      </a>

    </>

  );
}
