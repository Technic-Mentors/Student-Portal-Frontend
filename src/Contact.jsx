import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5 align-items-center">
          <div className="col-md-6">
            <div className="">
              <h1>Contact Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="trial-btn">
                <Link to="/contactus" className="btn btn-large freetrial">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bannerImg">
              <img src="img/contact.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="bannerImg">
              <img src="img/contact1.png" alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">

              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Meassage
                  </label>
                  <textarea
                    className="form-control"
                    rows="9"></textarea>
                </div>
                <button type="submit" className="btn freetrial">
                  Submit
                </button>
              </form>
              <div className="contact-head mt-3">
                <h3>Get in touch</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>

              <div className="footer mt-2">
                <p>
                  <span>
                    <img src="img/a1.png" alt="" /> : 92K Commercial
                    Area Phase-1 DHA Lahore
                  </span>
                </p>
                <p>
                  <span>
                    <img src="img/a4.png" alt="" /> : support@greengrapez.com
                  </span>
                </p><p>
                  <span>
                    <img src="img/a2.png" alt="" /> :
                    <a className="mobilesOnly" href="/">
                      +923244244934
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <img src="img/a3.png" alt="" /> :
                    <a className="mobilesOnly" href="/">
                      +923244244934
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
