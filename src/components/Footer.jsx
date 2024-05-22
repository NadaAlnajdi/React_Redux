import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
      <footer className="mt-4">
        <div className="container footer_top">
          <div className="row">
            <div className="col-lg-7 col-sm-7">
              <div className="footer_item">
                <h4>About The Project</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum placeat, voluptate eveniet impedit tenetur veritatis
                  nisi harum rerum tempora voluptatum eaque vero. Blanditiis,
                  alias itaque maxime voluptatem amet consequatur rem?
                </p>

                <ul className="list-inline footer_social_icon">
                  <a className="social-tw" href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="social-fb" href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="social-li" href="">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a className="social-in" href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className="social-yt" href="">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-5">
              <div className="footer_item">
                <h4>Explore link</h4>
                <ul className="list-unstyled footer_menu">
                  <li>
                    <a href="">
                      <span className="fa fa-play"></span> Our Applications
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-play"></span> Meet our team
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-play"></span> About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-play"></span> Welcome
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-play"></span> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-5">
              <div className="footer_item">
                <h4>Contact us</h4>
                <ul className="list-unstyled footer_contact">
                  <li>
                    <a href="">
                      <span className="fa fa-map-marker"></span> Dakahlia, Egypt
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-envelope"></span> Crowd@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa fa-mobile"></span>
                      <p>+20 01289716802</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom text-center">
          <p className="wow fadeInRight">
            Made with
            <i className="fa fa-heart"></i>
            By ITI
            <a target="_blank" href=""></a>
            2023. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
