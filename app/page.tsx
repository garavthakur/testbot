import Image from "next/image";
import Header from "./Header";
import CustomCursor from "./customCursor";
import Footer from "./footer";
export default function Home() {
  return (
     <>
   <CustomCursor/>

      <Header/>

      <div className="trigger-showcase position-relative z-1">
        <div className="hero-1-shapes">
          <img
            src="/img/hero-shape-left.webp"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--1"
          />
          <img
            src="/img/hero-shape-right.webp"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--2"
          />
          <img
            src="/img/hero-shape-ring-1.png"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--3"
          />
          <img
            src="/img/hero-shape-ring-2.png"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--4"
          />
        </div>

        <section className="hero-1">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-10 col-lg-9 col-xxl-10 text-center">
                <h1 className="clr-white fw-extrabold mb-6 animate-line-3d">
                  Best AI Content Platform
                  <span className="clr-grad-1">Image Generate</span>
                </h1>
                <p className="fs-18 fw-bold clr-neutral-80 max-text-50 mx-auto mb-10 animate-text-from-bottom">
                  Your One-Stop Solution for Content Creation,Audio Generation,
                  Image Crafting, & AI Chatbot Development.
                </p>
                <div className="newsletter-1 d-inline-block w-100 max-text-60 mx-auto mb-4 position-relative z-1 overflow-hidden rounded fadeIn_bottom">
                  <div className="d-flex p-3 bg-neutral-10 rounded">
                    <input
                      type="text"
                      className="form-control newsletter-1__input bg-transparent clr-neutral-60"
                      placeholder="An Astronaut riding a horse on mars, hd"
                    />
                    <button
                      type="button"
                      className="newsletter-1__btn d-inline-block py-3 px-5 rounded fw-bold clr-white bg-grad-1"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <ul className="hero-1__tag-list list list-row align-items-center justify-content-center gap-3 flex-wrap">
                  <li className="animate-fadeInBottom">
                    <span className="d-block fs-14 clr-white">
                      {" "}
                      Popular Tags:{" "}
                    </span>
                  </li>
                  <li className="animate-fadeInBottom">
                    <a
                      href="#"
                      className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
                    >
                      Creative
                    </a>
                  </li>
                  <li className="animate-fadeInBottom">
                    <a
                      href="#"
                      className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
                    >
                      Sport
                    </a>
                  </li>
                  <li className="animate-fadeInBottom">
                    <a
                      href="#"
                      className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
                    >
                      Animation
                    </a>
                  </li>
                  <li className="animate-fadeInBottom">
                    <a
                      href="#"
                      className="link d-inline-block text-center py-1 px-2 rounded bg-neutral-10 clr-neutral-80 fs-14 fw-medium"
                    >
                      Fantasy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img
            src="/img/hero-shape-img-1.webp"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--5"
          />
          <img
            src="/img/hero-shape-img-2.webp"
            alt="image"
            className="img-fluid hero-1-shapes__img hero-1-shapes__img--6"
          />
        </section>

        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12">
                  <img
                    src="/img/generated-img-1.jpg"
                    alt="image"
                    className="img-fluid rounded-1 img-fadeIn-1"
                  />
                </div>
                <div className="col-12">
                  <h6 className="clr-neutral-80 mb-10 animate-line-3d">
                    We're passionate about empowering creatives with the tools
                    they need to
                    <span className="clr-grad-1">
                      bring their vision to
                    </span>{" "}
                    life that's why we've developed
                  </h6>
                  <div className="d-flex flex-wrap align-items-center gap-10 reveal-from-bottom">
                    <a
                      href="register.html"
                      className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-4 rounded fw-bold text-center"
                    >
                      <span className="d-inline-block"> Join Community </span>
                      <span className="d-inline-block">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                    <div className="d-inline-flex align-items-center gap-2">
                      <h4 className="mb-0 fw-extrabold clr-neutral-90">80k+</h4>
                      <span className="d-inline-block clr-neutral-90">
                        Happy Customer 😊
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-md-6">
                  <img
                    src="/img/generated-img-2.jpg"
                    alt="image"
                    className="img-fluid rounded-1 w-100 img-fadeIn-2"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="/img/generated-img-3.jpg"
                    alt="image"
                    className="img-fluid rounded-1 w-100 img-fadeIn-3"
                  />
                </div>
                <div className="col-12">
                  <img
                    src="/img/generated-img-4.jpg"
                    alt="image"
                    className="img-fluid rounded-1 img-fadeIn-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-space-sm-y">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-6">
                <h6 className="mb-0 clr-neutral-90 text-center fw-extrabold animate-line-3d">
                  We Worked With Global Largest
                  <span className="clr-grad-1">25,000+ BRANDS</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div
                className="scroller-x mb-4"
                data-direction="right"
                data-speed="slow"
              >
                <ul className="list list-row gap-4 scroller-x__list">
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/spotify.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-1.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-2.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-3.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-4.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-5.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-6.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-7.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-8.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-9.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-10.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-11.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-12.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="scroller-x"
                data-direction="left"
                data-speed="slow"
              >
                <ul className="list list-row gap-4 scroller-x__list">
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/spotify.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-1.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-2.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-3.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-4.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-5.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-6.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-7.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-8.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-9.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-10.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-11.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
                      <img
                        src="/img/brand-icon-12.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative section-space-sm-top section-space-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="text-xl-end pe-xl-6">
                <div className="d-inline-block position-relative">
                  <img
                    src="/img/welcome-img.png"
                    alt="image"
                    className="w-100 parallax-image"
                  />
                  <a href="#" className="circle-btn welcome-img-btn">
                    <span className="circle-btn__text">
                      more about service exlpore
                    </span>
                    <img
                      src="/img/long-arrow-down.png"
                      alt="image"
                      className="img-fluid mb-4 z-1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-wrap gap-4 mb-4">
                <div className="w-30 border-bottom border-2x border-neutral-100 welcome-dash"></div>
                <h6 className="mb-0 clr-neutral-90 animate-text-from-right">
                  Welcome
                </h6>
              </div>
              <h2 className="d4 clr-neutral-90 mb-6 fw-extrabold animate-line-3d">
                Powerful AI Features Built for
                <span className="clr-grad-1">Marketing</span>
              </h2>
              <div className="pt-4 ps-4 pt-md-8 ps-md-16 border-start border-neutral-90 border-opacity-1">
                <p className="mb-6 clr-neutral-80 animate-text-from-right">
                  We're passionate about empowering creatives with the tools
                  they need to bring their vision to life that's why we've
                  developed.
                </p>
                <p className="mb-10 clr-neutral-80 animate-text-from-right">
                  Working globally with largest brands, We believe that safe. We
                  combine ideas and behaviours, and insights with that customers
                  love our services.
                </p>
                <ul className="list gap-6">
                  <li className="welcome-list-1">
                    <div className="d-flex gap-3">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block clr-neutral-80">
                        Intelligent image editing
                      </span>
                    </div>
                  </li>
                  <li className="welcome-list-1">
                    <div className="d-flex gap-3">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block clr-neutral-80">
                        Customizable image styles
                      </span>
                    </div>
                  </li>
                  <li className="welcome-list-1">
                    <div className="d-flex gap-3">
                      <span className="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                        <i className="bi bi-check2"></i>
                      </span>
                      <span className="d-block clr-neutral-80">
                        Unprecedented Image Creation
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/welcome-section-shape.webp"
          alt="image"
          className="img-fluid position-absolute pointer-none start-0 top-0 z-n1"
        />
      </div>

      <div className="ticker-section section-space-sm-y overflow-hidden mx-auto">
        <div className="ticker-section__content section-space-xsm-top">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div
                  className="scroller-x mb-4"
                  data-direction="left"
                  data-speed="slow"
                >
                  <ul className="list list-row align-items-center gap-4 scroller-x__list">
                    <li>
                      <h2 className="mb-0 clr-neutral-90">
                        Take Your Visuals to the
                      </h2>
                    </li>
                    <li>
                      <img
                        src="/img/icon-star-outline.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </li>
                    <li>
                      <h2 className="mb-0 text-outline">Next Level</h2>
                    </li>
                    <li>
                      <img
                        src="/img/icon-star-gradient.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </li>
                    <li>
                      <h2 className="mb-0 clr-neutral-90">
                        AI Image Generator
                      </h2>
                    </li>
                    <li>
                      <img
                        src="/img/icon-star-gradient.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="what-todo-section section-space-sm-y">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-md-5">
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <div className="w-30 subtitle-flush-x subtitle_line_1"></div>
                  <h6 className="mb-0 fs-18 clr-neutral-90 fw-extrabold animate-text-from-right">
                    What We Do
                  </h6>
                </div>
              </div>
              <div className="col-md-7 col-xl-5">
                <h5 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                  Explore the power of AI
                  <span className="clr-grad-1">Development</span> tools Crafted
                  with Brilliance, Style Quality and Creativity.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-5 order-xl-2">
              <nav className="todo-nav" id="toDoScrollspy">
                <ul className="list gap-5 todo-nav__menu">
                  <li>
                    <a
                      href="#imageGenerator"
                      className="nav-link link todo-nav__link"
                    >
                      AI Image Generator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#imageCustomization"
                      className="nav-link link todo-nav__link"
                    >
                      Customizable Image Styles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#generateVideos"
                      className="nav-link link todo-nav__link"
                    >
                      Generate Videos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#removedBg"
                      className="nav-link link todo-nav__link"
                    >
                      Removed any Background
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trainCustom"
                      className="nav-link link todo-nav__link"
                    >
                      Train Custom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#imgCreation"
                      className="nav-link link todo-nav__link"
                    >
                      Image Clean
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-7">
              <div
                data-bs-spy="scroll"
                data-bs-target="#toDoScrollspy"
                data-bs-smooth-scroll="true"
              >
                <div className="section-space-bottom" id="imageGenerator">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Generate Images
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_2">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Text to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <img
                      src="/img/todo-img.jpg"
                      alt="image"
                      className="img-fluid rounded-1 parallax-image"
                    />
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-2.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
                <div className="section-space-y" id="imageCustomization">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Reimagine Any Image
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_3">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Image to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <img
                      src="/img/todo-img-3.jpg"
                      alt="image"
                      className="img-fluid rounded-1 parallax-image"
                    />
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-4.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
                <div className="section-space-y" id="generateVideos">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Generate Videos
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_4">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Text to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <video autoPlay loop className="ratio ratio-16x9">
                      <source src="/img/todo-video.mp4" type="video/mp4" />
                    </video>
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-2.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
                <div className="section-space-y" id="removedBg">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Remove Image Background
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_5">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Text to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <img
                      src="/img/todo-img-5.jpg"
                      alt="image"
                      className="img-fluid rounded-1 parallax-image"
                    />
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-6.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
                <div className="section-space-y" id="trainCustom">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Image Cleaning
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_6">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Text to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <img
                      src="/img/todo-img-7.jpg"
                      alt="image"
                      className="img-fluid rounded-1 parallax-image"
                    />
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-8.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
                <div className="section-space-y" id="imgCreation">
                  <div className="todo-box position-relative z-1 bg-black py-10 pe-10">
                    <h4 className="clr-neutral-90 animate-line-3d">
                      Generate Images
                    </h4>
                    <p className="mb-6 clr-neutral-80 animate-text-from-right">
                      We are constantly rethinking the future by creating the
                      next generation of products, brands and services from a
                      hybrid perspective.
                    </p>
                    <div className="fadein_bottom_7">
                      <a
                        href="login.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 p-4 rounded fw-bold text-center z-1"
                      >
                        <span className="d-inline-block">
                          {" "}
                          Try Text to Image{" "}
                        </span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="todo-img">
                    <img
                      src="/img/todo-img-9.jpg"
                      alt="image"
                      className="img-fluid rounded-1 parallax-image"
                    />
                    <img
                      src="/img/todo-img-1.png"
                      alt="image"
                      className="img-fluid todo-img__1"
                    />
                    <img
                      src="/img/todo-img-2.png"
                      alt="image"
                      className="img-fluid todo-img__2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-space-sm-top">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-md-6 col-lg-7 col-xxl-6">
                <h3 className="mb-0 clr-neutral-90 animate-line-3d">
                  Supercharge your Creative Shapes as well
                </h3>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="d-flex align-items-center gap-4 flex-wrap mb-4">
                  <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_2"></div>
                  <h6 className="mb-0 clr-secondary-key fs-18 animate-text-from-right">
                    Creative Approach
                  </h6>
                </div>
                <p className="mb-0 clr-neutral-80 animate-text-from-right">
                  We're passionate about empowering creatives with the tools
                  they need to bring their vision to life that's why we've
                  developed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="creative-approach-section position-relative overflow-hidden">
          <div className="container">
            <div className="row g-4 g-xl-0">
              <div className="col-md-6 col-xl-3 creative-approach-section__item">
                <div className="p-6 py-xl-18 fadein_bottom_8">
                  <div className="d-inline-block mb-10">
                    <img
                      src="/img/ca-icon-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="mb-6 clr-neutral-90">Excellent Support</h6>
                  <p className="mb-0 clr-neutral-80">
                    We're passionate about empowering creatives with the tools
                    they need to bring their vision to life that's why we've
                    developed.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 creative-approach-section__item">
                <div className="p-6 py-xl-18 fadein_bottom_8">
                  <div className="d-inline-block mb-10">
                    <img
                      src="/img/ca-icon-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="mb-6 clr-neutral-90">Reliable Expert</h6>
                  <p className="mb-0 clr-neutral-80">
                    We're passionate about empowering creatives with the tools
                    they need to bring their vision to life that's why we've
                    developed.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 creative-approach-section__item">
                <div className="p-6 py-xl-18 fadein_bottom_8">
                  <div className="d-inline-block mb-10">
                    <img
                      src="/img/ca-icon-3.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="mb-6 clr-neutral-90">Unique Technology</h6>
                  <p className="mb-0 clr-neutral-80">
                    We're passionate about empowering creatives with the tools
                    they need to bring their vision to life that's why we've
                    developed.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 creative-approach-section__item">
                <div className="p-6 py-xl-18 fadein_bottom_8">
                  <div className="d-inline-block mb-10">
                    <img
                      src="/img/ca-icon-4.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <h6 className="mb-6 clr-neutral-90">High Image Quality</h6>
                  <p className="mb-0 clr-neutral-80">
                    We're passionate about empowering creatives with the tools
                    they need to bring their vision to life that's why we've
                    developed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-space-xsm-y overflow-hidden bg-neutral-10">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div
                className="scroller-x mb-4"
                data-direction="left"
                data-speed="slow"
              >
                <ul className="list list-row align-items-center gap-4 scroller-x__list">
                  <li>
                    <h2 className="mb-0 d4 clr-neutral-90">
                      Take Your Visuals to the
                    </h2>
                  </li>
                  <li>
                    <img
                      src="/img/icon-star-outline.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h2 className="mb-0 d4 text-outline">Next Level</h2>
                  </li>
                  <li>
                    <img
                      src="/img/icon-star-gradient-alt.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h2 className="mb-0 d4 clr-grad-1">AI Image Generator</h2>
                  </li>
                  <li>
                    <img
                      src="/img/icon-star-gradient-alt.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <h2 className="mb-0 d4 clr-neutral-90">
                      AI Image Generator
                    </h2>
                  </li>
                  <li>
                    <img
                      src="/img/icon-star-outline.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section-1 section-space-top section-space-sm-bottom">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-6">
                <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-4">
                  <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_3"></div>
                  <h6 className="mb-0 clr-secondary-key fs-18 fadein_1">
                    Creative Approach
                  </h6>
                  <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_4"></div>
                </div>
                <h3 className="mb-0 clr-neutral-90 text-center animate-line-3d">
                  What Creatives People Are Saying About Us
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper faq-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
                      <p className="faq-1__para mb-6 clr-neutral-80">
                        "Our AI image solutions have exceeded our customers'
                        expectations. they appreciate the remarkable quality,
                        efficiency, and creative Here's a opportunities. Here's
                        a glimpse of their positive feedback and new found
                        creative opportunities satisfaction.."
                      </p>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                          <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                            <img
                              src="/img/user.jpg"
                              alt="image"
                              className="img-fluid object-fit-cover rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0 fs-18 clr-neutral-80">
                              Mark Villomas
                            </h6>
                            <span className="d-block fs-14 clr-neutral-80">
                              Designer
                            </span>
                          </div>
                        </div>
                        <ul className="list list-row gap-1">
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
                      <p className="faq-1__para mb-6 clr-neutral-80">
                        "Our AI image solutions have exceeded our customers'
                        expectations. they appreciate the remarkable quality,
                        efficiency, and creative Here's a opportunities. Here's
                        a glimpse of their positive feedback and new found
                        creative opportunities satisfaction.."
                      </p>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                          <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                            <img
                              src="/img/user-1.png"
                              alt="image"
                              className="img-fluid object-fit-cover rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0 fs-18 clr-neutral-80">
                              Mark Villomas
                            </h6>
                            <span className="d-block fs-14 clr-neutral-80">
                              Designer
                            </span>
                          </div>
                        </div>
                        <ul className="list list-row gap-1">
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
                      <p className="faq-1__para mb-6 clr-neutral-80">
                        "Our AI image solutions have exceeded our customers'
                        expectations. they appreciate the remarkable quality,
                        efficiency, and creative Here's a opportunities. Here's
                        a glimpse of their positive feedback and new found
                        creative opportunities satisfaction.."
                      </p>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                          <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                            <img
                              src="/img/user.jpg"
                              alt="image"
                              className="img-fluid object-fit-cover rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0 fs-18 clr-neutral-80">
                              Mark Villomas
                            </h6>
                            <span className="d-block fs-14 clr-neutral-80">
                              Designer
                            </span>
                          </div>
                        </div>
                        <ul className="list list-row gap-1">
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="d-flex flex-column justify-content-between px-8 py-12 rounded-1 border border-neutral-10 h-100">
                      <p className="faq-1__para mb-6 clr-neutral-80">
                        "Our AI image solutions have exceeded our customers'
                        expectations. they appreciate the remarkable quality,
                        efficiency, and creative Here's a opportunities. Here's
                        a glimpse of their positive feedback and new found
                        creative opportunities satisfaction.."
                      </p>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                          <div className="avatar w-12 ratio ratio-1x1 flex-shrink-0">
                            <img
                              src="/img/user-1.png"
                              alt="image"
                              className="img-fluid object-fit-cover rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0 fs-18 clr-neutral-80">
                              Mark Villomas
                            </h6>
                            <span className="d-block fs-14 clr-neutral-80">
                              Designer
                            </span>
                          </div>
                        </div>
                        <ul className="list list-row gap-1">
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                          <li>
                            <span className="d-inline-block text-warning">
                              <i className="bi bi-star"></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/faq-shape-1.webp"
          alt="image"
          className="img-fluid faq-section-1__img faq-section-1__img--1"
        />
        <img
          src="/img/faq-shape-2.webp"
          alt="image"
          className="img-fluid faq-section-1__img faq-section-1__img--2"
        />
      </div>

      <div className="overflow-hidden">
        <div className="pricing-section-1 section-space-sm-y">
          <div className="section-space-sm-bottom">
            <div className="container">
              <div className="row g-4 justify-content-between">
                <div className="col-md-5">
                  <div className="d-flex align-items-center gap-4 flex-wrap">
                    <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_5"></div>
                    <h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
                      Simple and Affordable
                    </h6>
                  </div>
                </div>
                <div className="col-md-7 col-xl-5">
                  <h5 className="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
                    Unleash creativity with
                    <span className="clr-grad-1">AI image</span> generation
                    pricing. Find the perfect plan for your visual projects.
                  </h5>
                  <div className="d-flex align-items-center gap-4">
                    <label
                      htmlFor="switch2"
                      className="d-block clr-neutral-99 pointer fadein_bottom_9"
                    >
                      Monthly
                    </label>
                    <div className="form-check form-switch form--switch form--switch-lg form--switch-primary-40 align-items-center gap-2 flex-shrink-0 fadein_bottom_9">
                      <input
                        className="form-check-input pricing-toggle"
                        type="checkbox"
                        role="switch"
                        id="switch2"
                      />
                    </div>
                    <label  htmlFor="switch2"
                      className="d-block clr-neutral-99 pointer fadein_bottom_9"
                    >
                      Yearly
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="bg-neutral-10 bg-opacity-6 border border-neutral-10 p-4 px-xl-8 py-xl-10 rounded-3 pricing-card">
                  <h6 className="mb-1 fw-extrabold clr-neutral-99">
                    Free Plan
                  </h6>
                  <span className="d-block mb-6 fs-14 clr-neutral-80">
                    Get started with our startup package
                  </span>
                  <h4 className="mb-6 fw-extrabold clr-neutral-99">
                    Free Plan
                  </h4>
                  <a
                    href="login.html"
                    className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 clr-white :bg-primary-40 px-6 py-3 fs-14 text-center rounded top-shadow mb-12"
                  >
                    <span className="d-inline-block fw-extrabold">
                      Join this Plan
                    </span>
                    <span className="d-inline-block">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                  <ul className="list gap-4">
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">ChatGPT</span> 3.5Open AI
                          Model
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          37 AI Templates
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">5000</span> Words per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">10</span> Images per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          2 Speech to Text per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">2 MB</span> Audio file size
                          limit
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Stable Diffusion Images
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          AI Blog Wizard
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Speech to Text
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Custom Templates
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="position-relative z-1 overflow-hidden bg-neutral-10 bg-opacity-6 border border-secondary-40 p-4 px-xl-8 py-xl-10 rounded-3 pricing-card">
                  <span className="pricing-label bg-secondary-40">
                    {" "}
                    Save 40%{" "}
                  </span>
                  <h6 className="mb-1 fw-extrabold clr-neutral-80">
                    Standard Plan
                  </h6>
                  <span className="d-block mb-6 fs-14 clr-neutral-99">
                    Get started with our startup package
                  </span>
                  <h4 className="mb-6 fw-extrabold clr-neutral-99 monthly-price">
                    $ 20.00
                  </h4>
                  <h4 className="mb-6 fw-extrabold clr-neutral-99 yearly-price">
                    $ 239.00
                  </h4>
                  <a
                    href="login.html"
                    className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 :bg-primary-40 clr-white px-6 py-3 fs-14 text-center rounded top-shadow mb-12"
                  >
                    <span className="d-inline-block fw-extrabold">
                      Join this Plan
                    </span>
                    <span className="d-inline-block">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                  <ul className="list gap-4">
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">ChatGPT</span> 3.5Open AI
                          Model
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          37 AI Templates
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">5000</span> Words per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">10</span> Images per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          2 Speech to Text per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">2 MB</span> Audio file size
                          limit
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Stable Diffusion Images
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          AI Blog Wizard
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Speech to Text
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Custom Templates
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="bg-neutral-10 bg-opacity-6 border border-neutral-10 p-4 px-xl-8 py-xl-10 rounded-3 pricing-card">
                  <h6 className="mb-1 fw-extrabold clr-neutral-99">
                    Premium Plan
                  </h6>
                  <span className="d-block mb-6 fs-14 clr-neutral-80">
                    Get started with our startup package
                  </span>
                  <h4 className="mb-6 fw-extrabold clr-neutral-99 monthly-price">
                    $ 39.99
                  </h4>
                  <h4 className="mb-6 fw-extrabold clr-neutral-99 yearly-price">
                    $ 479.88
                  </h4>
                  <a
                    href="login.html"
                    className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 :bg-primary-40 clr-white px-6 py-3 fs-14 text-center rounded top-shadow mb-12"
                  >
                    <span className="d-inline-block fw-extrabold">
                      Join this Plan
                    </span>
                    <span className="d-inline-block">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                  <ul className="list gap-4">
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">ChatGPT</span> 3.5Open AI
                          Model
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          37 AI Templates
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">5000</span> Words per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">10</span> Images per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          2 Speech to Text per month
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          <span className="fw-bold">2 MB</span> Audio file size
                          limit
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Stable Diffusion Images
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          AI Blog Wizard
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Speech to Text
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-3">
                        <span className="flex-shrink-0 d-grid place-content-center w-5 h-5 rounded-circle border border-primary-key border-opacity-3 bg-primary-key bg-opacity-2 clr-primary-key">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="d-block fs-14 clr-neutral-80">
                          Custom Templates
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/img/pricing-section-shape-1.webp"
            alt="image"
            className="img-fluid pricing-section-1__img pricing-section-1__img--1"
          />
        </div>

        <div className="faq-section-2 section-space-sm-y">
          <div className="faq-section-2__inner section-space-sm-top">
            <div className="section-space-sm-y">
              <div className="container">
                <div className="row justify-content-lg-end">
                  <div className="col-lg-8">
                    <div className="d-flex align-items-center gap-4 flex-wrap mb-4">
                      <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_6"></div>
                      <h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
                        Creative Approach
                      </h6>
                    </div>
                    <h3 className="mb-0 clr-neutral-90 animate-line-3d">
                      Questions? We have <br />
                      Answers.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <nav className="todo-nav">
                    <ul className="list gap-5 nav todo-nav__menu">
                      <li>
                        <a
                          href="#aiImgGenerateTab"
                          className="nav-link link todo-nav__link active"
                          data-bs-toggle="tab"
                          data-bs-target="#"
                        >
                          AI Image Generator
                        </a>
                      </li>
                      <li>
                        <a
                          href="#generateVideoTab"
                          className="nav-link link todo-nav__link"
                          data-bs-toggle="tab"
                          data-bs-target="#"
                        >
                          Generate Videos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#removeBgTab"
                          className="nav-link link todo-nav__link"
                          data-bs-toggle="tab"
                          data-bs-target="#"
                        >
                          Removed any Background
                        </a>
                      </li>
                      <li>
                        <a
                          href="#trainCustomTab"
                          className="nav-link link todo-nav__link"
                          data-bs-toggle="tab"
                          data-bs-target="#"
                        >
                          Train Custom
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-lg-8">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="aiImgGenerateTab"
                    >
                      <div
                        className="accordion custom-accordion custom-accordion--faq mb-8"
                        id="faqAccordionOne"
                      >
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion1"
                              aria-expanded="true"
                            >
                              How does the Type tone AI app work / Where do I
                              start?
                            </button>
                          </h2>
                          <div
                            id="faqAccordion1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordionOne"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion2"
                              aria-expanded="false"
                            >
                              Do you have languages other than English and
                              Dutch?
                            </button>
                          </h2>
                          <div
                            id="faqAccordion2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionOne"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion3"
                              aria-expanded="false"
                            >
                              What paid subscription would you recommend to me?
                            </button>
                          </h2>
                          <div
                            id="faqAccordion3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionOne"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordion4"
                              aria-expanded="false"
                            >
                              How exactly does this AI work and how can it write
                              texts so well?
                            </button>
                          </h2>
                          <div
                            id="faqAccordion4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionOne"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="faq.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
                      >
                        <span className="d-inline-block">Show More Faq</span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="tab-pane fade" id="generateVideoTab">
                      <div
                        className="accordion custom-accordion custom-accordion--faq mb-8"
                        id="faqAccordionTwo"
                      >
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionGV1"
                              aria-expanded="true"
                            >
                              How does the Type tone AI app work / Where do I
                              start?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionGV1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordionTwo"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionGV2"
                              aria-expanded="false"
                            >
                              Do you have languages other than English and
                              Dutch?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionGV2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionTwo"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionGV3"
                              aria-expanded="false"
                            >
                              What paid subscription would you recommend to me?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionGV3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionTwo"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionGV4"
                              aria-expanded="false"
                            >
                              How exactly does this AI work and how can it write
                              texts so well?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionGV4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionTwo"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="faq.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
                      >
                        <span className="d-inline-block">Show More Faq</span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="tab-pane fade" id="removeBgTab">
                      <div
                        className="accordion custom-accordion custom-accordion--faq mb-8"
                        id="faqAccordionThree"
                      >
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionRBG1"
                              aria-expanded="true"
                            >
                              How does the Type tone AI app work / Where do I
                              start?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionRBG1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordionThree"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionRBG2"
                              aria-expanded="false"
                            >
                              Do you have languages other than English and
                              Dutch?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionRBG2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionThree"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionRBG3"
                              aria-expanded="false"
                            >
                              What paid subscription would you recommend to me?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionRBG3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionThree"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionRBG4"
                              aria-expanded="false"
                            >
                              How exactly does this AI work and how can it write
                              texts so well?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionRBG4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionThree"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="faq.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
                      >
                        <span className="d-inline-block">Show More Faq</span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="tab-pane fade" id="trainCustomTab">
                      <div
                        className="accordion custom-accordion custom-accordion--faq mb-8"
                        id="faqAccordionFour"
                      >
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionTC1"
                              aria-expanded="true"
                            >
                              How does the Type tone AI app work / Where do I
                              start?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionTC1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordionFour"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionTC2"
                              aria-expanded="false"
                            >
                              Do you have languages other than English and
                              Dutch?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionTC2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionFour"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionTC3"
                              aria-expanded="false"
                            >
                              What paid subscription would you recommend to me?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionTC3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionFour"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item border-bottom-0 border-start-0 border-end-0">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button fs-20 fw-bold collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faqAccordionTC4"
                              aria-expanded="false"
                            >
                              How exactly does this AI work and how can it write
                              texts so well?
                            </button>
                          </h2>
                          <div
                            id="faqAccordionTC4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordionFour"
                          >
                            <div className="accordion-body">
                              <ol className="add-0 d-flex flex-column gap-4 mb-8">
                                <li>
                                  Create an account and write completely free,
                                  forever! If you want more features and Tone
                                </li>
                                <li>
                                  Log in to the app and choose a template, such
                                  as "Article Writing".
                                </li>
                                <li>
                                  Fill in the required fields and click Generate
                                  the more context output.
                                </li>
                              </ol>
                              <p className="mb-0">
                                Have questions about how the app works? Ask your
                                question to our live chat or send an email and
                                we will help you further.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="faq.html"
                        className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-4 py-3 rounded fw-bold text-center z-1 mb-1"
                      >
                        <span className="d-inline-block">Show More Faq</span>
                        <span className="d-inline-block">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/img/faq-section-2-shape.webp"
            alt="image"
            className="img-fluid faq-section-2__img"
          />
        </div>
      </div>

      <div
        className="section-space-sm-top position-relative z-1 overflow-hidden"
        data-cursor="Subscribe Now"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-section-1 section-space-y ps-xl-15">
                <div className="row g-4 justify-content-xxl-between align-items-center">
                  <div className="col-lg-6 col-xxl-5">
                    <span className="d-block mb-2 fw-extrabold clr-secondary-key reveal-text">
                      For Update Newsletter
                    </span>
                    <h3 className="mb-12 clr-neutral-90 animate-text-from-right">
                      Subscribe for the Updates!
                    </h3>
                    <div className="input-group input--group input--group-underline input--group-inverse-surface mb-6 fadein_bottom_10">
                      <input
                        type="text"
                        className="form-control form--control"
                        placeholder="Enter Email Address"
                      />
                      <span className="input-group-text">
                        <button
                          type="button"
                          className="newsletter-1__btn d-inline-block py-3 px-4 fw-bold clr-white bg-grad-1 fs-14"
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                    <div className="form-check check-box check-box--dash check-box-neutral-60 gap-2 fadein_bottom_11">
                      <input
                        className="form-check-input check-box__input clr-white my-auto"
                        type="checkbox"
                        id="n60dash"
                      />
                      <label
                        className="form-check-label clr-neutral-80 fs-14"
                        htmlFor="n60dash"
                      >
                        I agree to the
                        <a
                          href="privacy-policy.html"
                          className="link d-inline-block clr-primary-60 text-decoration-underline"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-xl-center fadein_bottom_12">
                      <div className="newsletter-section-1__img-container d-inline-flex justify-content-center align-items-center">
                        <div className="newsletter-section-1__img newsletter-section-1__img--1 d-none d-xl-inline-block border border-neutral-4 border-8x rounded-3 overflow-hidden">
                          <img
                            src="/img/newsletter-section-1-img-1.jpg"
                            alt="image"
                            className="img-fluid rounded-3 object-fit-cover"
                          />
                        </div>
                        <div className="d-inline-block border border-neutral-4 border-8x rounded-3 overflow-hidden">
                          <img
                            src="/img/newsletter-section-1-img-3.jpg"
                            alt="image"
                            className="img-fluid object-fit-cover"
                          />
                        </div>
                        <div className="newsletter-section-1__img newsletter-section-1__img--2 d-none d-xl-inline-block border border-neutral-4 border-8x rounded-circle overflow-hidden">
                          <img
                            src="/img/newsletter-section-1-img-2.png"
                            alt="image"
                            className="img-fluid object-fit-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/newsletter-1-shape.webp"
          alt="image"
          className="img-fluid newsletter-section-1__shape"
        />
      </div>

      <div className="blog-section-1 section-space-y bg-neutral-4">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-md-5">
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <div className="w-30 subtitle-flush-x subtitle-flush-x--secondary subtitle_line_7"></div>
                  <h6 className="mb-0 fs-18 clr-secondary-key fw-extrabold animate-text-from-right">
                    Discover AI-Enhanced Visual Stories
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-xxl-5">
                <h3 className="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                  The Latest Updates News & Blog
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_13">
                <div className="d-flex align-items-center gap-2">
                  <div className="w-12 h-2px bg-primary-key"></div>
                  <span className="d-block fw-bold clr-primary-key">
                    {" "}
                    AI News{" "}
                  </span>
                </div>
                <div className="blog-card-1__img">
                  <img
                    src="/img/blog-img-1.jpg"
                    alt="image"
                    className="img-fluid h-100 object-fit-cover"
                  />
                </div>
                <div className="blog-card-1__body">
                  <h6 className="mb-6 fs-24">
                    <a
                      href="blog-details.html"
                      className="link d-block clr-neutral-90"
                    >
                      Antenna Promises New era For Satellite Communication
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="d-inline-block clr-neutral-90 fs-14 fw-semibold">
                      March 18, 2022
                    </span>
                    <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                    <a
                      href="#"
                      className="link d-inline-block clr-neutral-90 fs-14 fw-semibold"
                    >
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_13">
                <div className="d-flex align-items-center gap-2">
                  <div className="w-12 h-2px bg-primary-key"></div>
                  <span className="d-block fw-bold clr-primary-key">
                    {" "}
                    AI News{" "}
                  </span>
                </div>
                <div className="blog-card-1__img">
                  <img
                    src="/img/blog-img-2.jpg"
                    alt="image"
                    className="img-fluid h-100 object-fit-cover"
                  />
                </div>
                <div className="blog-card-1__body">
                  <h6 className="mb-6 fs-24">
                    <a
                      href="blog-details.html"
                      className="link d-block clr-neutral-90"
                    >
                      AI software offers repetitive & mundane patterns
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="d-inline-block clr-neutral-90 fs-14 fw-semibold">
                      March 18, 2022
                    </span>
                    <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                    <a
                      href="#"
                      className="link d-inline-block clr-neutral-90 fs-14 fw-semibold"
                    >
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-card-1 top-shadow px-6 py-10 position-relative z-1 overflow-hidden rounded-3 bg-neutral-10 bg-opacity-6 fadein_bottom_13">
                <div className="d-flex align-items-center gap-2">
                  <div className="w-12 h-2px bg-primary-key"></div>
                  <span className="d-block fw-bold clr-primary-key">
                    {" "}
                    AI News{" "}
                  </span>
                </div>
                <div className="blog-card-1__img">
                  <img
                    src="/img/blog-img-3.jpg"
                    alt="image"
                    className="img-fluid h-100 object-fit-cover"
                  />
                </div>
                <div className="blog-card-1__body">
                  <h6 className="mb-6 fs-24">
                    <a
                      href="blog-details.html"
                      className="link d-block clr-neutral-90"
                    >
                      Antenna Promises New era For Satellite Communication
                    </a>
                  </h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="d-inline-block clr-neutral-90 fs-14 fw-semibold">
                      March 18, 2022
                    </span>
                    <span className="d-inline-block w-1 h-1 rounded-circle bg-neutral-90"></span>
                    <a
                      href="#"
                      className="link d-inline-block clr-neutral-90 fs-14 fw-semibold"
                    >
                      Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-space-sm-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-space-y px-4 top-shadow position-relative z-1 overflow-hidden rounded-3 bg-neutral-key bg-opacity-6">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-8 col-xxl-6">
                      <h4 className="mb-14 text-center clr-neutral-90 animate-line-3d">
                        Having Come this Distance, Why not Formalize your
                        <span className="clr-grad-1">Achievement?</span>
                      </h4>
                      <div className="d-flex align-items-center justify-content-center gap-6 flex-wrap fadein_bottom_14">
                        <a
                          href="login.html"
                          className="gradient-btn-1 position-relative link d-inline-flex justify-content-center align-items-center gap-2 px-6 py-3 rounded fw-bold text-center"
                        >
                          <span className="d-inline-block">
                            Try WriteBot Free
                          </span>
                          <span className="d-inline-block">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                        <a
                          href="register.html"
                          className="link d-inline-flex justify-content-center align-items-center gap-3 rounded bg-neutral-10 :bg-primary-key clr-white px-6 py-3 text-center rounded top-shadow"
                        >
                          <span className="d-inline-block fw-extrabold">
                            Request Demo
                          </span>
                          <span className="d-inline-block">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/img/nl-img-1.webp"
                    alt="image"
                    className="img-fluid newsletter-1-img newsletter-1-img--1 fadein_2"
                  />
                  <img
                    src="/img/nl-img-2.webp"
                    alt="image"
                    className="img-fluid newsletter-1-img newsletter-1-img--2 fadein_3"
                  />
                  <img
                    src="/img/nl-img-3.webp"
                    alt="image"
                    className="img-fluid newsletter-1-img newsletter-1-img--3 fadein_4"
                  />
                  <img
                    src="/img/nl-img-4.webp"
                    alt="image"
                    className="img-fluid newsletter-1-img newsletter-1-img--4 fadein_5"
                  />
                  <img
                    src="/img/nl-img-5.webp"
                    alt="image"
                    className="img-fluid newsletter-1-img newsletter-1-img--5 fadein_6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/blog-section-1-img-1.webp"
          alt="image"
          className="img-fluid blog-section-1__img blog-section-1__img--1"
        />
        <img
          src="/img/blog-section-1-img-2.webp"
          alt="image"
          className="img-fluid blog-section-1__img blog-section-1__img--2"
        />
      </div>

     <Footer/>
    </>
  );
}
