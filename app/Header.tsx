
import React from "react"
import Link from "next/link";

const Header:React.FC =()=>(
<header className="header header--1 header--fixed">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="menu d-lg-flex justify-content-lg-between align-items-lg-center py-3 py-lg-0">
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href="index.html"
                    className="logo link d-inline-flex align-items-center flex-shrink-0"
                  >
                    <img
                      src="/img/logo-light.png"
                      alt="logo"
                      className="img-fluid object-fit-contain"
                    />
                  </a>
                  <button className="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-50 clr-neutral-100 :clr-neutral-100 transition :bg-primary-300 rounded flex-shrink-0 d-lg-none order-sm-3 fs-24">
                    <i className="bi bi-list"></i>
                  </button>
                </div>
                <div className="menu-nav d-flex align-items-lg-center flex-column flex-lg-row flex-grow-1 gap-4 pb-4 pb-lg-0 rounded">
                  <ul className="list list-lg-row mx-lg-auto">
                    <li className="menu-list">
                      <Link href='/' className="link menu-link ">      
                    
                        Home
                      </Link>  
                    
                    </li>
                    <li className="menu-list">
                     <Link href="/profile" className="link menu-link " >
                     
                        Profile
                    </Link>
                    </li>
                    {/* <li className="menu-list">
                      <a href="#" className="link menu-link has-sub">
                        {" "}
                        Blog{" "}
                      </a>
                      <ul className="list menu-sub">
                        <li className="menu-sub-list">
                          <a href="blog-1.html" className="link menu-sub-link">
                            Blog Listing 1
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a href="blog-2.html" className="link menu-sub-link">
                            Blog Listing 2
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a
                            href="blog-details.html"
                            className="link menu-sub-link"
                          >
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-list">
                      <a href="#" className="link menu-link has-sub">
                        {" "}
                        Pages{" "}
                      </a>
                      <ul className="list menu-sub">
                        <li className="menu-sub-list">
                          <a
                            href="featured.html"
                            className="link menu-sub-link"
                          >
                            Featured
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a href="about.html" className="link menu-sub-link">
                            About Us
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a
                            href="use-cases.html"
                            className="link menu-sub-link"
                          >
                            Use Cases
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a
                            href="copywrite.html"
                            className="link menu-sub-link"
                          >
                            Copywrite
                          </a>
                        </li>
                        <li className="menu-sub-list">
                          <a href="faq.html" className="link menu-sub-link">
                            Faq
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                  <ul className="list list-lg-row gap-4 gap-lg-6">
                    <li className="menu-list mx-4 mx-lg-0">
                      <a
                        href="login.html"
                        className="animated-border-btn link d-inline-flex justify-content-center rounded overflow-hidden position-relative z-1"
                      >
                        <span className="d-inline-block transition bg-neutral-10 :bg-primary-key clr-white px-6 py-2 fw-bold text-center rounded">
                          Login
                        </span>
                      </a>
                    </li>
                    <li className="menu-list mx-4 mx-lg-0">
                      <a
                        href="register.html"
                        className="gradient-btn-1 position-relative z-1 link d-inline-flex justify-content-center px-4 py-2 rounded fw-bold text-center"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
);
export default Header;