import React from 'react';

function Index() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container justify-content-center">
    <a className="navbar-brand" href="#home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Profile section */}
      <div class="container">
  <div class="row">
    <div class="col-md-8"> 
      <section id="home" class="profile-section"> 
        <div class="row">
          <div class="col-md-6">
            <img src="assets/images/brayo.jpg" alt="Profile" class="profile-image img-fluid rounded-circle" />
          </div>
          <div class="col-md-6">
            <h2>Brian Maweu</h2>
            <p>Full Stack Developer</p>
            <p>Location: Makindu, Eastern Kenya</p>
            <p>Contact: +254740770403</p>
            <p>Email: maweubrayo2@gmail.com</p>
            <div class="social-media">
              <a href="https://twitter.com/BrianMaweu" target="_blank" rel="noopener noreferrer"><i class="bi-twitter"></i></a>
              <a href="https://facebook.com/BrianMaweu" target="_blank" rel="noopener noreferrer"><i class="bi-facebook"></i></a>
              <a href="https://wa.me/254740770403" target="_blank" rel="noopener noreferrer"><i class="bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>



      {/* About Me section */}
      <section className="about section-padding" id="section_2">
    <div className="container text-center">
        <div className="row justify-content-center">

            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                   
                    <h3 className="pt-2 mb-3">About Me</h3>
                    <p>My name is Brian Maweu, and I was born in Makindu, a small town in Eastern Kenya. I pursued a Bachelor's degree in Information Technology at Kenya Highlands University.</p>
                    <p>I am a passionate full-stack developer with expertise in a wide range of technologies and frameworks. I enjoy building innovative solutions that solve real-world problems and enhance user experiences.</p>
                </div>
            </div>
        </div>
    </div>
</section>




      {/* Projects section */}
      <section id="projects" className="projects-section">
    <div className="container">
        <h2>Projects</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="assets/images/computer.jpg" className="card-img-top" alt="Project 1" />
                    <div className="card-body">
                        <h5 className="card-title">REMORENA WEBSITE</h5>
                        <p className="card-text">An online Shopping center.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card">
                    <img src="assets/images/clients/shopify.svg" className="card-img-top" alt="Project 2" />
                    <div className="card-body">
                        <p className="card-text">Online shop</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="assets/images/clients/happy.svg" className="card-img-top" alt="Project 3" />
                    <div className="card-body">
                        <p className="card-text">Music school</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>




            <section className="services section-padding" id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src="/images/hands.png" className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Services</h2>
                            </div>
                            <div className="row pt-lg-5">
    <div className="col-lg-6 col-12">
        <div className="services-thumb">
            <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                <h3 className="mb-0">Web Development</h3>

                <div className="services-price-wrap ms-auto">
                    <p className="services-price-text mb-0">Custom Quote</p>
                    <div className="services-price-overlay"></div>
                </div>
            </div>

            <p>Building responsive and interactive web applications using modern technologies and frameworks like React, Angular, Vue.js, and more.</p>

            <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

            <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                <i className="services-icon bi-laptop"></i>
            </div>
        </div>
    </div>

    <div className="col-lg-6 col-12">
        <div className="services-thumb services-thumb-up">
            <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                <h3 className="mb-0">Backend Development</h3>

                <div className="services-price-wrap ms-auto">
                    <p className="services-price-text mb-0">Custom Quote</p>
                    <div className="services-price-overlay"></div>
                </div>
            </div>

            <p>Creating robust server-side applications, APIs, and databases using technologies such as Node.js, Express, Django, Flask, PHP, Laravel and Python.</p>

            <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

            <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                <i className="services-icon bi-server"></i>
            </div>
        </div>
    </div>
</div>
<>

                                <div className="col-lg-6 col-12">
                                    <div className="services-thumb">
                                        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 className="mb-0">Ecommerce</h3>

                                            <div className="services-price-wrap ms-auto">
                                                <p className="services-price-text mb-0">$3,600</p>
                                                <div className="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>

                                        <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i className="services-icon bi-phone"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <div className="services-thumb services-thumb-up">
                                        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 className="mb-0">SEO</h3>

                                            <div className="services-price-wrap ms-auto">
                                                <p className="services-price-text mb-0">$1,450</p>
                                                <div className="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.</p>

                                        <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i className="services-icon bi-google"></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </section>


      {/* Contact Me section */}
      <section id="contact-me" className="contact-section">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <img src="hands.jpg" alt="Contact Icon" className="contact-icon img-fluid" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
