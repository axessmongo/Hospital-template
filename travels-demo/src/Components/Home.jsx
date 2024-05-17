import React, { useState } from 'react';
import logo from '../Assets/Image/LOGO.png';
import herohead from '../Assets/Image/hero/hero-img.png';
import heroplay from '../Assets/Image/hero/play.svg';
import serviceShape from '../Assets/Image/category/shape.svg';
import serviceIcon1 from '../Assets/Image/category/icon1.png';
import serviceIcon2 from '../Assets/Image/category/icon2.png';
import serviceIcon3 from '../Assets/Image/category/icon3.png';
import serviceIcon4 from '../Assets/Image/category/icon4.png';
import dest from '../Assets/Image/dest/shape.svg'
import dest1 from '../Assets/Image/dest/dest1.jpg'
import dest2 from '../Assets/Image/dest/dest2.jpg'
import dest3 from '../Assets/Image/dest/dest3.jpg'
import dest4 from '../Assets/Image/dest/navigation.svg'
import step1 from '../Assets/Image/steps/selection.svg'
import step2 from '../Assets/Image/steps/water-sport.svg'
import step3 from '../Assets/Image/steps/taxi.svg'
import step4 from '../Assets/Image/steps/booking-img.jpg'
import step5 from '../Assets/Image/steps/leaf.svg'
import step6 from '../Assets/Image/steps/building.svg'
import step7 from '../Assets/Image/steps/bg.png'
import step8 from '../Assets/Image/steps/map.svg'
import step9 from '../Assets/Image/steps/send.svg'
import step10 from '../Assets/Image/steps/favorite-placeholder.png'
import step11 from '../Assets/Image/steps/heart.svg'
import author1 from '../Assets/Image/testimonial/author.png'
import author2 from '../Assets/Image/testimonial/author2.png'
import author3 from '../Assets/Image/testimonial/author3.png'
import parter1 from '../Assets/Image/partner/1.png'
import parter2 from '../Assets/Image/partner/2.png'
import parter3 from '../Assets/Image/partner/3.png'
import parter4 from '../Assets/Image/partner/4.png'
import parter5 from '../Assets/Image/partner/5.png'
import cta1 from '../Assets/Image/cta/send.png'
import cta2 from '../Assets/Image/cta/mail.svg'
import cta3 from '../Assets/Image/cta/shape-bg1.png'
import cta4 from '../Assets/Image/cta/shape-bg2.png'
import footer1 from '../Assets/Image/logo2.svg'
import footer2 from '../Assets/Image/play-store.png'
import footer3 from '../Assets/Image/apple-store.png'
import up from '../Assets/Image/icons/up.svg'
import down from '../Assets/Image/icons/down.svg'

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <div className="main" id="top">

        <nav className="navbar navbar-expand-lg navbar-light fixed-top d-block nav-bg" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container ">
            
            <a className="navbar-brand " href="index.html"><img src={logo} alt="logo"className='logo1' /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
            <div className="collapse navbar-collapse  mt-4 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
                <li className="nav-item px-3 px-xl-4"><a className="nav-link fw-medium" aria-current="page" href="#service">Service</a></li>
                <li className="nav-item px-3 px-xl-4"><a className="nav-link fw-medium" aria-current="page" href="#destination">Destination</a></li>
                <li className="nav-item px-3 px-xl-4"><a className="nav-link fw-medium" aria-current="page" href="#booking">Booking</a></li>
                <li className="nav-item px-3 px-xl-4"><a className="nav-link fw-medium" aria-current="page" href="#testimonial">Testimonial</a></li>
                <li className="nav-item px-3 px-xl-4"><a className="nav-link fw-medium" aria-current="page" href="#contact">Contact</a></li>
                {/* <li className="nav-item px-3 px-xl-4"><a className="btn btn-outline-dark order-1 order-lg-0 fw-medium" href="#!">Sign Up</a></li> */}
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
          <a href="https://axesstechnology.in/contact" target='_blank'>
            <button className='buy-now-bt'>BuyNow</button></a>
        </div> */}

        <section className="pt-5">
          <div className="bg-holder" style={{ backgroundImage: 'url(assets/image/hero/hero-bg.svg)' }}></div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end">
                <img className="pt-7 pt-md-0 hero-img" src={herohead} alt="hero-header" />
              </div>
              <div className="col-md-7 col-lg-6 text-md-start text-center py-6">
                <h4 className="fw-bold text-danger mb-3">Explore the World's Best Destinations with Axess Travels</h4>
                <h1 className="hero-title">Travel, enjoy and live a new and full life</h1>
                <p className="mb-4 fw-medium">
                  <br className="d-none d-xl-block" />
                  From Machu Picchu to Tokyo, Paris to New Zealand, our destinations promise to inspire and captivate.<br className="d-none d-xl-block" />
                  Let Axess Travels guide you to extraordinary experiences and new perspectives. Start your journey
                  today.
                </p>
                <div className="text-center text-md-start">
                  {/* <a className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow" href="#!" role="button">Find out more</a> */}
                  <div className="w-100 d-block d-md-none"></div>
                  <button className="btn" onClick={() => setShowModal(true)}>
                    <span className="btn btn-danger round-btn-lg rounded-circle me-3 danger-btn-shadow">
                      <img src={heroplay} alt="play" className='img-fluid pt-2' />
                    </span>
                    Play Demo
                  </button>
                  {showModal &&
                    <div className="modal fade show" style={{ display: 'block' }} id="popupVideo" tabIndex="-1" aria-labelledby="popupVideo" aria-hidden="true" onClick={() => setShowModal(false)}>
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <iframe className="rounded" style={{ width: '100%', maxHeight: '500px' }} height="500px" src="https://www.youtube.com/embed/_lhdhL4UDIo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 pt-md-9" id="service">
          <div className="container">
            <div className="position-absolute z-index--1 end-0 d-none d-lg-block"><img src={serviceShape} style={{ maxWidth: "200px" }} alt="service" /></div>
            <div className="mb-7 text-center">
              <h5 className="text-secondary">Explore Our Top Services at Axess Travels </h5>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize mt-4">Discover the Best of Axess Travels</h3>
            </div>
            <div className="row">
              <ServiceCard image={serviceIcon1} title="Calculated Weather Service" description="Ensure a smooth journey with our calculated weather forecasts, providing you with accurate insights for
a seamless travel experience." />
              <ServiceCard image={serviceIcon2} title="Best Flights Service" description="Find the perfect flight for your adventure with Axess Travels. Our dedicated team  in
securing the best flights to your desired destinations." />
              <ServiceCard image={serviceIcon3} title="Local Events Service" description="Immerse yourself in the vibrant culture  destination with our local events service. From festivals
to cultural exhibitions." />
              <ServiceCard image={serviceIcon4} title="Customization Service" description="At Axess Travels, we understand that every traveller is unique. That's why we offer customizable
services specific preferences. " />
            </div>
          </div>
        </section>

        <section className="pt-5" id="destination">
          <div className="container">
            <div className="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n4"><img src={dest} alt="destination" /></div>
            <div className="mb-7 text-center">
              <h5 className="text-secondary">Top Selling </h5>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize mt-4">Top Destinations at Axess Travels</h3>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  <img className="card-img-top" src={dest1} alt="Rome, Italty" />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">Rome, Italty</a></h4>
                      <span className="fs-1 fw-medium">₹5.42 lakhs.</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={dest4} style={{ marginRight: '14px' }} width="20" alt="navigation" />
                      <span className="fs-0 fw-medium">10 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  <img className="card-img-top" src={dest2} alt="London, UK" />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">London, UK</a></h4>
                      <span className="fs-1 fw-medium">₹4.2 lakhs.</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={dest4} style={{ marginRight: '14px' }} width="20" alt="navigation" />
                      <span className="fs-0 fw-medium">12 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  <img className="card-img-top" src={dest3} alt="Full Europe" />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium"><a className="link-900 text-decoration-none stretched-link" href="#!">Full Europe</a></h4>
                      <span className="fs-1 fw-medium">₹15 lakhs.</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={dest4} style={{ marginRight: '14px' }} width="20" alt="navigation" />
                      <span className="fs-0 fw-medium">28 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mb-4 text-start">
                  <h5 className="text-secondary">Easy and Fast Booking Process with Axess Travels</h5>
                  <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize mt-4 ">Book Your Next Trip In 3 Easy Steps:</h3>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="bg-primary me-sm-4 me-3 p-3 mt-3" style={{ borderRadius: '13px' }}><img src={step1} width="22" alt="steps" /></div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0 mt-3">Choose Your Destination:</h5>
                    <p>Select your favourite destination from anywhere in the world. Whether you're <br className="d-none d-sm-block" />streets of Tokyo or the serene beaches of Bali, we've got you covered.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="bg-danger me-sm-4 me-3 p-3" style={{ borderRadius: '13px' }}><img src={step2} width="22" alt="steps" /></div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0">Make Payment</h5>
                    <p>Once you've found your perfect spot, proceed to make your payment securely and hassle-free. <br className="d-none d-sm-block" />Our streamlined payment process ensures a seamless booking experience.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div className="bg-info me-sm-4 me-3 p-3" style={{ borderRadius: '13px' }}><img src={step3} width="22" alt="steps" /></div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0">Reach Airport on Selected Date</h5>
                    <p>Finally, all that's left to do is to arrive at the airport on your selected date and time. From there, <br className="d-none d-sm-block" />you can sit back, relax, and enjoy your well-deserved vacation.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex justify-content-center align-items-start">
                <div className="card position-relative shadow" style={{ maxWidth: '370px' }}>
                  <div className="position-absolute z-index--1 me-10 me-xxl-0" style={{ right: '-160px', top: '-210px' }}><img src={step7} style={{ maxWidth: '550px' }} alt="shape" /></div>
                  <div className="card-body p-3"><img className="mb-4 mt-2 rounded-2 w-100" src={step4} alt="booking" />
                    <div>
                      <h5 className="fw-medium">Trip To Greece</h5>
                      <p className="fs--1 mb-3 fw-medium">14-29 June | by Robbin joseph</p>
                      <div className="icon-group mb-4"><span className="btn icon-item"><img src={step5} alt="" /></span><span className="btn icon-item"><img src={step8} alt="" /></span><span className="btn icon-item"><img src={step9} alt="" /></span></div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center mt-n1"><img className="me-3" src={step6} width="18" alt="building" /><span className="fs--1 fw-medium">24 people going</span></div>
                        <div className="show-onhover position-relative">
                          <div className="card hideEl shadow position-absolute end-0 start-xl-50 bottom-100 translate-xl-middle-x ms-3" style={{ width: '260px', borderRadius: '18px' }}>
                            <div className="card-body py-3">
                              <div className="d-flex">
                                <div style={{ marginRight: '10px' }}><img className="rounded-circle" src={step10} width="50" alt="favorite" /></div>
                                <div>
                                  <p className="fs--1 mb-1 fw-medium">Ongoing</p>
                                  <h5 className="fw-medium mb-3">Trip to Rome</h5>
                                  <h6 className="fs--1 fw-medium mb-2"><span>40%</span> completed</h6>
                                  <div className="progress" style={{ height: '6px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="btn"> <img src={step11} width="20" alt="step" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="mb-8 text-start">
                  <h5 className="text-secondary">Testimonials</h5>
                  <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize mt-4">What people say about Us.</h3>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <div className="pe-7 ps-5 ps-lg-0">
                  <div className="carousel slide carousel-fade position-static" id="testimonialIndicator" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button className="active" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="0" aria-current="true" aria-label="Testimonial 0"></button>
                      <button className="false" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="1" aria-current="true" aria-label="Testimonial 1"></button>
                      <button className="false" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="2" aria-current="true" aria-label="Testimonial 2"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item position-relative active">
                        <div className="card shadow" style={{ borderRadius: '10px' }}>
                          <div>
                            <img className="rounded-circle fit-cover" src={author1} height="65" width="65" alt="" />
                          </div>
                          {/* <div className="position-absolute start-0 top-0 translate-middle"><img className="rounded-circle fit-cover" src={author1} height="65" width="65" alt="" /></div> */}
                          <div className="card-body p-4">
                            <p className="fw-medium mb-4">"What an incredible experience! Axess Travels made my dream vacation a reality. From the moment I
                              booked my trip to the day I returned home, everything was seamless and stress-free. I can't wait to book
                              with them again!"</p>
                            <h5 className="text-secondary">Stephen J</h5>
                            <p className="fw-medium fs--1 mb-0">Milan, Italy</p>
                          </div>
                        </div>
                        <div className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style={{ borderRadius: '10px', transform: 'translate(25px, 25px)' }}></div>
                      </div>
                      <div className="carousel-item position-relative">
                        <div className="card shadow" style={{ borderRadius: '10px' }}>
                          <div>
                            <img className="rounded-circle fit-cover" src={author2} height="65" width="65" alt="" />
                          </div>
                          {/* <div className="position-absolute start-0 top-0 translate-middle"><img className="rounded-circle fit-cover" src={author2} height="65" width="65" alt="" /></div> */}
                          <div className="card-body p-4">
                            <p className="fw-medium mb-4">"Booking with Axess Travels was the best decision I ever made. The entire process, from selecting my
                              destination to reaching the airport, was effortless. I highly recommend them to anyone looking for an
                              easy and enjoyable travel experience."</p>
                            <h5 className="text-secondary">Rajesh Gupta,</h5>
                            <p className="fw-medium fs--1 mb-0">Mumbai, India</p>
                          </div>
                        </div>
                        <div className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style={{ borderRadius: '10px', transform: 'translate(25px, 25px)' }}></div>
                      </div>
                      <div className="carousel-item position-relative">
                        <div className="card shadow" style={{ borderRadius: '10px' }}>
                          <div>
                            <img className="rounded-circle fit-cover" src={author3} height="65" width="65" alt="" />
                          </div>
                          {/* <div className="position-absolute start-0 top-0 translate-middle"><img className="rounded-circle fit-cover" src={author3} height="65" width="65" alt="" /></div> */}
                          <div className="card-body p-4">
                            <p className="fw-medium mb-4">"Axess Travels exceeded all my expectations. Their attention to detail and personalised service made
                              me feel like a VIP throughout my entire trip. I'm already planning my next adventure with them!"</p>
                            <h5 className="text-secondary">Emily Johnson</h5>
                            <p className="fw-medium fs--1 mb-0">Sydney, Australia</p>
                          </div>
                        </div>
                        <div className="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style={{ borderRadius: '10px', transform: 'translate(25px, 25px)' }}></div>
                      </div>
                    </div>
                    <div className="carousel-navigation d-flex flex-column flex-between-center position-absolute end-0 top-lg-50 bottom-0 translate-middle-y z-index-1 me-3 me-lg-0" style={{ height: '60px', width: '20px' }}>
                      <button className="carousel-control-prev position-static" type="button" data-bs-target="#testimonialIndicator" data-bs-slide="prev"><img src={up} width="16" alt="icon" /></button>
                      <button className="carousel-control-next position-static" type="button" data-bs-target="#testimonialIndicator" data-bs-slide="next"><img src={down} width="16" alt="icon" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative pt-9 pt-lg-8 pb-6 pb-lg-8">
          <div className="container">
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 flex-center">
              <div className="col">
                <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
                  <div className="card-body text-center"> <img className="img-fluid" src={parter1} alt="" /></div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
                  <div className="card-body text-center"> <img className="img-fluid" src={parter2} alt="" /></div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
                  <div className="card-body text-center"> <img className="img-fluid" src={parter3} alt="" /></div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
                  <div className="card-body text-center"> <img className="img-fluid" src={parter4} alt="" /></div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-hover mb-4" style={{ borderRadius: '10px' }}>
                  <div className="card-body text-center"> <img className="img-fluid" src={parter5} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'></div>


        <section className="pt-6" id='contact'>
          <div className="container">
            <div className="py-8 px-5 position-relative text-center" style={{ backgroundColor: 'rgba(223, 215, 249, 0.199)', borderRadius: '129px 20px 20px 20px' }}>
              <div className="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3"> <img src={cta1} style={{ maxWidth: '70px' }} alt="send icon" /></div>
              <div className="position-absolute end-0 top-0 z-index--1"> <img src={cta4} width="264" alt="cta shape" /></div>
              <div className="position-absolute start-0 bottom-0 ms-3 z-index--1 d-none d-sm-block"> <img src={cta3} style={{ maxWidth: '340px' }} alt="cta shape" /></div>
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <h2 className="text-secondary lh-1-7 mb-7">Join our mailing list today to receive the latest news, exclusive offers, and exciting updates about our
                    travel services.</h2>
                    <p>Stay Updated with Axess Travels!</p>
                  <form className="row g-3 align-items-center w-lg-75 mx-auto">
                    <div className="col-sm">
                      <div className="input-group-icon">
                        <input className="form-control form-little-squirrel-control" type="email" placeholder="Enter email" aria-label="email" />
                        {/* <img className="input-box-icon" src={cta2} width="17" alt="mail" /> */}
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <button className="btn btn-danger orange-gradient-btn fs--1">Contact us</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0 pb-lg-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-7 col-12  mb-md-6 mb-lg-0 order-0">
              <a className="navbar-brand " href="index.html"><img src={logo} alt="logo"className='logo1' /></a>

              
                <p className="fs--1 text-secondary mb-0 fw-medium mt-4">Plan your journey in moments, seize the adventure for a lifetime.</p>
              </div>
              <div className="col-lg-2 col-md-4  mb-lg-0 order-lg-1 order-md-2">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Company</h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#service">Service</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#booking">Booking</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4  mb-lg-0 order-lg-2 order-md-3">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Contact</h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Help/FAQ</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Press</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Affiliate</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4  mb-lg-0 order-lg-3 order-md-4">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">More</h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Airlinefees</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Airline</a></li>
                  <li className="mb-2"><a className="link-900 fw-medium text-decoration-none" href="#!">Low fare tips</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-12  mb-md-6 mb-lg-0 order-lg-4 order-md-1">
                <div className="icon-group mb-4">
                  <a className="text-decoration-none icon-item shadow-social" id="facebook" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="text-decoration-none icon-item shadow-social" id="instagram" href="#!"><i className="fab fa-instagram"></i></a>
                  <a className="text-decoration-none icon-item shadow-social" id="twitter" href="#!"><i className="fab fa-twitter"></i></a>
                </div>
                <h4 className="fw-medium font-sans-serif text-secondary mb-3">Discover our app</h4>
                <div className="d-flex align-items-center">
                  <a href="#!"><img className="me-2" src={footer2} alt="play store" /></a>
                  <a href="#!"><img src={footer3} alt="apple store" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <p className="mb-0 text-secondary fs--1 fw-medium">All rights reserved@axesstravels.com</p>
          </div>
        </section>


      </div>
    </section>
  );
}

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="col-lg-3 col-sm-6 mb-6">
      <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
        <div className="card-body p-xxl-5 p-4">
          <img src={image} width="75" alt="Service" />
          <h4 className="mb-3">{title}</h4>
          <p className="mb-0 fw-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
