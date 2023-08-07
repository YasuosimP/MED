import React from 'react'
const frontPage =() =>{
    return(   <>

  {/* Masthead*/}
  <header className="masthead">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="text-center text-white">
            {/* Page heading*/}
            <h1 className="mb-5">
           Your treatment is our priority.
            </h1>
            </div>
            </div>
            </div>
            </div>
            </header>
  {/* Icons Grid*/}
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-window m-auto text-primary" />
            </div>
            <h3>Online Therapy</h3>
            <p className="lead mb-0">
            Talk to your therapist however you feel comfortable
            and&nbsp;<strong>Message him&nbsp;</strong>anytime from
            anywhere. No scheduling needed.<br />
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-layers m-auto text-primary" />
            </div>
            <h3>Flexible meetings</h3>
            <p className="lead mb-0">
            <strong>Schedule a live session</strong>&nbsp;at a time that's
                    convenient for you. Connect from your phone, tablet, or
                    computer.<br />
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-terminal m-auto text-primary" />
            </div>
            <h3>Refund Guaranteed</h3>
            <p className="lead mb-0">
            If you did not find our product useful to you , your money will
                    be refunded 100%
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Image Showcases*/}
  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img"
          style={{ backgroundImage: 'url("/assets/img/bg-showcase-1.jpg")' }}
        />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Who are we ?</h2>
          <p className="lead mb-0">
          Tap into the world's largest network of licensed, accredited, and
                  experienced therapists who can help you with a range of issues
                  including depression, anxiety, relationships, trauma, grief, and
                  more. With our therapists, you get the same professionalism and
                  quality you would expect from an in-office therapist, but with the
                  ability to communicate when and how you want.<br /><br />
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-6 text-white showcase-img"
          style={{ backgroundImage: 'url("/assets/img/bg-showcase-2.jpg")' }}
        />
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Our Mission</h2>
          <p className="lead mb-0">
          We are aiming to make mental health therapy as accessible and as
                  affordable as posisble by making the therapy sessions virtual to
                  reduce the&nbsp;
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img"
          style={{ backgroundImage: 'url("assets/img/bg-showcase-3.jpg")' }}
        />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>You can always ask for help</h2>
          <p className="lead mb-0">
          we belive that everybody should be happy with themselves , and
                  because of pandemic , depressions rates have increased in an
                  unbelivable way , and with the inability to go out , we tried to
                  make it accesible by making it a virtual space<br /><br />
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials*/}
  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src="assets/img/testimonials-1.jpg"
              alt="..."
            />
            <h5>Margaret E.</h5>
            <p className="font-weight-light mb-0">
              "This is fantastic! Thanks so much guys!"
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src="assets/img/testimonials-2.jpg"
              alt="..."
            />
            <h5>Fred S.</h5>
            <p className="font-weight-light mb-0">
            I can actually see progress in my mental health which is
                    something I haven’t been able to say in 15 years and it’s thanks
                    to my therapist in betterhelp<br />
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src="assets/img/testimonials-3.jpg"
              alt="..."
            />
            <h5>Sarah W.</h5>
            <p className="font-weight-light mb-0">
            Susan is amazing in her insights and conversational approach. I
                    am so glad and blessed to have found her and started healing
                    with her guidance.<br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call to Action*/}
  <section className="call-to-action text-white text-center" id="signup">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h2 className="mb-4">Ready to get started? Sign up now!</h2>
          {/* Signup form*/}
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          
        </div>
      </div>
    </div>
  </section>
</>

    )
}
export default frontPage