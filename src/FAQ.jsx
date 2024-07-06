import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FAQ extends Component {
  render() {
    return (
      <div>
        
      <div className="container-fluid">
        <div className="row align-items-baseline">
          <div className="col-6">
            <div className="bannertitle">
              <h1>FAQs</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
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
          <div className="col-6">
            <div className="bannerImg p-5">
              <img src="img/about.png" alt="img" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="faq">
                        <h1 className='text-green text-center m-5'>FAQs</h1>
                        <h3 className='text-green'>What Is Hema Math</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default FAQ
