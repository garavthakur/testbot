import React from "react"
import Image from "next/image";
import Header from "../Header";
import CustomCursor from "../customCursor";
import Footer from "../footer";

    
const Profile:React.FC=()=>(
    <>


<CustomCursor/>
  <Header/>
  <section className="about-section-4">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-6 col-xl-7">
          <div className="text-center">
            <div className="d-inline-flex align-items-center py-2 px-4 bg-info-10 bg-opacity-3 rounded-1">
              <a href="index-7.html" className="link fs-12 clr-white">Home</a>
              <span className="fs-12 clr-white">-</span>
              <span className="fs-12 clr-white">About Us</span>
            </div>
            <h2 className="h3 fw-bold clr-neutral-90 mt-4">Your Gateway to Cutting Edge AI Innovations</h2>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="row">
          <div className="col-lg-12">
            <img src="/img/about-section-4-main.png" alt="image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/about-section-4-shape-top.png" alt="image" className="img-fluid about-section-4-shape about-section-4-shape-top"/>
    <img src="/img/about-section-4-shape-left.png" alt="image" className="img-fluid about-section-4-shape about-section-4-shape-left"/>
    <img src="/img/about-section-4-shape-right.png" alt="image" className="img-fluid about-section-4-shape about-section-4-shape-right"/>
    <img src="/img/about-section-4-shape-line-left.png" alt="image" className="img-fluid about-section-4-shape about-section-4-shape-line-left"/>
    <img src="/img/about-section-4-shape-line-right.png" alt="image" className="img-fluid about-section-4-shape about-section-4-shape-line-right"/>
  </section>
 
  <div className="ai-benefit-section section-space-sm-top section-space-bottom">
    <div className="container">
      <div className="ai-benefit-wrapper">
        <div className="text-lg-end pe-lg-20 mb-6">
          <span className="fs-20 fw-semibold clr-neutral-22">Benefit Use WriteBot AI </span>
        </div>
        <div className="row gy-4">
          <div className="col-lg-5">
            <img src="/img/ai-benefit-main.png" alt="image" className="img-fluid"/>
          </div>
          <div className="col-lg-7">
            <div className="list-slider-wrapper">
              <div className="list-slider-wrapper-inner">
                <div className="swiper listSlider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Cost Savings: Reduce operational costs by minimizing</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Smart Decision-Making: Utilize data-driven insights to make informed.</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Customer Service Enhancement: Improve customer support</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Innovation Driver: Foster innovation by leveraging AI for the development</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Continuous Availability: Ensure 24/7 service and support with AI systems</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Cost Savings: Reduce operational costs by minimizing</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Smart Decision-Making: Utilize data-driven insights to make informed.</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Customer Service Enhancement: Improve customer support</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Innovation Driver: Foster innovation by leveraging AI for the development</span>
                    </div>
                    <div className="swiper-slide">
                      <i className="bi bi-check2"></i>
                      <span>Continuous Availability: Ensure 24/7 service and support with AI systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/ai-benefit-line-top.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-top"/>
        <img src="/img/ai-benefit-line-bottom.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-bottom"/>
        <img src="/img/ai-benefit-line-left.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-left"/>
        <img src="/img/ai-benefit-line-right.png" alt="image" className="img-fluid ai-benefit-line ai-benefit-line-right"/>
      </div>
    </div>
    <img src="/img/ai-benefit-shape-left.png" alt="image" className="img-fluid ai-benefit-shape-left"/>
  </div>

  <section className="mission-section">
    <div className="container">
      <div className="mb-xl-5 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-gear"></i>
              </div>
              <h3 className="h3 fw-bold mb-0 clr-neutral-90">Our Mission</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-wrapper">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <p className="fs-18 fw-bold clr-neutral-80">We pride ourselves on offering AI Generators that are unmatched in their quality, versatility, and ease of use. Here's what sets us apart from the competition:</p>
            <p className="clr-neutral-80">With our AI Generators, the possibilities are endless. From generating compelling marketing copy and designing stunning visuals to automating data analysis and creating personalized user experiences, our tools will transform the way you work and help you achieve remarkable outcomes.</p>
            <p className="clr-neutral-80">Join our community of innovators, creators, and forward-thinkers who are leveraging the power of AI to revolutionize their industries. Start your journey with [Company Name] today and unlock the full potential of AI Generators.</p>
          </div>
          <div className="col-xl-6">
            <img src="/img/ai-mission.png" alt="image" className="img-fluid"/>
          </div>
        </div>
        <img src="/img/mission-line-top.png" alt="image" className="img-fluid mission-shape-line mission-shape-line-top"/>
        <img src="/img/mission-line-right.png" alt="image" className="img-fluid mission-shape-line mission-shape-line-right"/>
      </div>
    </div>
    <img src="/img/mission-shape-circle.png" alt="image" className="img-fluid mission-shape-circle"/>
  </section>

  <section className="key-feature-section section-space-bottom">
    <div className="container">
      <div className="mb-xl-5 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-gem"></i>
              </div>
              <h3 className="h3 fw-bold mb-0 pe-3 bg-black clr-neutral-90">Key Features</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="key-feature-wrapper">
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card d-flex flex-column">
              <img src="/img/key-feature-1.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Actual Current Content</h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card">
              <img src="/img/key-feature-2.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Ai Image Generate </h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card">
              <img src="/img/key-feature-3.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Adding knowledge Dashboard</h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card">
              <img src="/img/key-feature-4.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Easy to use Ai Chatting </h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card">
              <img src="/img/key-feature-5.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Awesome Dashboard</h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="key-feature-card">
              <img src="/img/key-feature-6.png" alt="image" className="img-fluid key-feature-card__img"/>
              <h4 className="clr-neutral-90 fs-18 fw-700 mb-3 mt-6">Easy to use Ai Chatting </h4>
              <p className="clr-neutral-80 mb-0">AI can generate written content, including articles blog posts descriptions</p>
            </div>
          </div>
        </div>
        <img src="/img/key-feature-line-left.png" alt="image" className="img-fluid key-feature-line-left"/>
      </div>
    </div>
  </section>

  <section className="team-section section-space-bottom">
    <div className="container">
      <div className="mb-xl-10 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-people-fill"></i>
              </div>
              <h3 className="clr-neutral-90 h3 fw-bold mb-0">Team Members</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="team-section-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="scroller-x mb-5 dark-overlay" data-direction="right" data-speed="slow" data-animated="true">
              <ul className="list list-row gap-5 scroller-x__list">
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-1.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Matheo Shena</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-2.png" alt="image" className="img-fluid"/>
                    <h5 className="fs-18 mb-1 mt-5 clr-neutral-90">Bessie Cooper</h5>
                    <span className="fs-12 clr-neutral-80">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-3.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Jerome Bell</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-4.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Guy Hawkins</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-1.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Matheo Shena</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="scroller-x mb-4 dark-overlay" data-direction="left" data-speed="slow" data-animated="true">
              <ul className="list list-row gap-5 scroller-x__list">
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-1.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Matheo Shena</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-2.png" alt="image" className="img-fluid"/>
                    <h5 className="fs-18 mb-1 mt-5 clr-neutral-90">Bessie Cooper</h5>
                    <span className="fs-12 clr-neutral-80">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-3.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Jerome Bell</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-4.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Guy Hawkins</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="team-card rounded-3 py-12 px-6 text-center">
                    <img src="/img/team-1.png" alt="image" className="img-fluid"/>
                    <h5 className="clr-neutral-90 fs-18 mb-1 mt-5">Matheo Shena</h5>
                    <span className="clr-neutral-80 fs-12">UI & UX Designer</span>
                    <ul className="list list-row gap-5 mt-4 justify-content-center">
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="link clr-neutral-40">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src="/img/team-section-line.png" alt="image" className="img-fluid team-section-line"/>
      </div>
    </div>
    <img src="/img/team-section-shape.png" alt="image" className="img-fluid team-section-shape"/>
  </section>

  <section className="how-work-section-2 section-space-sm-bottom">
    <div className="container">
      <div className="mb-xl-10 mb-8">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center gap-4">
              <div className="w-14 h-14 bg-primary-key rounded-circle d-flex align-items-center justify-content-center clr-primary-key fs-24 bg-opacity-2">
                <i className="bi bi-gem"></i>
              </div>
              <h3 className="clr-neutral-90 h3 fw-bold mb-0">How we works</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="how-work-2-wrapper">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 px-lg-8 ps-xl-12 ps-xxl-20">
            <div className="accordion how-work-accordion" id="howWorkAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-1" aria-expanded="false" aria-controls="c-1">
                    <i className="bi bi-check2"></i> Trust & Safety team </button>
                </h2>
                <div id="c-1" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#c-2" aria-expanded="true" aria-controls="c-2">
                    <i className="bi bi-check2"></i> In Adherence to SOC 2 & GDPR Standards. </button>
                </h2>
                <div id="c-2" className="accordion-collapse collapse show" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-3" aria-expanded="false" aria-controls="c-3">
                    <i className="bi bi-check2"></i> Content Moderation Policy </button>
                </h2>
                <div id="c-3" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c-4" aria-expanded="false" aria-controls="c-4">
                    <i className="bi bi-check2"></i> Chat with your project </button>
                </h2>
                <div id="c-4" className="accordion-collapse collapse" data-bs-parent="#howWorkAccordion">
                  <div className="accordion-body">
                    <p>Our data handling practices, systems and processes have been independently audited & certified. Below is a suggested course outline for a Figma course. This outline covers essential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/img/how-work-section-2-main.png" alt="image" className="img-fluid"/>
          </div>
        </div>
        <img src="/img/how-work-section-2-line.png" alt="image" className="img-fluid how-work-2-wrapper-line"/>
      </div>
    </div>
    <img src="/img/how-work-section-2-shape-right.png" alt="image" className="img-fluid how-work-section-2-shape"/>
  </section>

  <div className="ticker-section-5 section-space-sm-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="overflow-hidden bg-neutral-4 rounded-2 py-4">
            <div className="scroller-x" data-direction="left" data-speed="slow">
              <ul className="list list-row align-items-center gap-4 scroller-x__list">
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> 100% Strong </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> 1M+ People Join Our Community </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> Join Our WriteBot Community </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
                <li>
                  <p className="h5 fw-bold mb-0 clr-neutral-87"> WriteBot AI </p>
                </li>
                <li>
                  <img src="/img/icon-star-gradient-sm.png" alt="image" className="img-fluid"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section className="cta-section-5 section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="cta-wrapper-5">
            <div className="text-center">
              <span className="rounded-1 bg-primary-key bg-opacity-2 clr-white fs-12 fw-bold px-4 py-2 d-inline-block mb-4">WriteBot AI</span>
              <h3 className="clr-neutral-90 fw-bold">Start Your 30-Day Free Trial</h3>
              <p className="mb-0 fs-14 clr-neutral-80">Write 10x faster, engage your audience, & never struggle with the blank page again.</p>
              <a href="login.html" className="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key :border-primary-30 bg-primary-key :bg-primary-30 rounded-1 fw-bold clr-white mt-8 :arrow-btn">
                <span>Get Started Now</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <img src="/img/cta-4-bg.png" alt="image" className="img-fluid cta-wrapper-4-bg w-100 h-100 object-fit-cover"/>
          </div>
        </div>
      </div>
    </div>
  </section>

 <Footer/>
 
  
    </>
    );

export default Profile;
  
 
   