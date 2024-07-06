import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="">
              <h1>About Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy.
              </p>
              <div className="trial-btn">
                <Link to="/contactus" className="btn btn-large freetrial">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="bannerImg">
              <img src="img/about.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="border mt-5"></div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3>What we are</h3>
              <p className="pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between pt-5 align-items-center">
          <div className="col-md-6">
            <div className="">
              <h2>What we are</h2>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
                <li>
                  A galley of type and scrambled it to make a type specimen
                  book.
                </li>
                <li>
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bannerImg">
              <img src="img/about2.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3>Our Mission</h3>
              <p className="pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between pt-5 align-items-center">
          <div className="col-md-5">
            <div className="bannerImg">
              <img src="img/about1.png" alt="img" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <h2>Our Mission</h2>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  A galley of type and scrambled it to make a type specimen
                  book.
                </li>
                <li>
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <div className="video">
              <iframe className="embed-responsive-item w-100" src="https://www.youtube.com/embed/hyBtQfvCzHI?si=k6GvyJ-BV-4REzPH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12">
            <div className="learning shadow-lg px-3 py-4 mb-5 mt-5 ">
              <h5 style={{ fontWeight: "bold", fontSize: "28px", color: "white" }}>Let start learning togethar</h5>

              <div className="trial-btn mb-0">
                <Link to="/logintype" style={{ fontSize: "13px", borderRadius: "13px", padding: "10px 20px" }} className="btn btn-large freetrial freetrial__white">
                  Login/Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
