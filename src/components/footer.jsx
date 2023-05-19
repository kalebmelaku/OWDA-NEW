import footerLogo from '../assets/footer-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faInbox, faFax } from '@fortawesome/free-solid-svg-icons';
import Banner from './banner';
function Footer() {
  return (
    <>
      <footer>
      <div className="container mx-auto px-2">
    <div className="footer-items">
        <div className="first-item">
            <div className="footer-logo">
                <img src={footerLogo} alt="footerlogo" />
            </div>
            <div className="head-loc">
                <p className="lead">Head Office | Addis Ababa, Ethiopia</p>
                <ul>
                  <li><FontAwesomeIcon icon={faPhone} className="green" /> +251 11 553 7041</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="green"/> info@owdaeth.org</li>
                    <li><FontAwesomeIcon icon={faInbox} className="green" /> 1502</li>
                    <li><FontAwesomeIcon icon={faFax} className="green" /> +251 11553 7051</li>
                </ul>
            </div>
            <div className="regional">
                <p className="lead">Regional Office | Jigjiga, Ethiopia</p>
                <ul>
                    <li><FontAwesomeIcon icon={faPhone} className="green" /> +251 25776 00 29</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="green"/> info@owdaeth.org</li>
                </ul>
            </div>
        </div>
        <div className="second-item">
            <h2 className='font-bold text-xl'>About OWDA</h2>
            <ul>
                <li><a href="who-we-are.html">Who we are</a></li>
                <li><a href="#">What we stand for</a></li>
                <li><a href="history.html">Our history</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
        </div>
        <div className="third-item">
            <h2 className='font-bold text-xl'>What we do</h2>
            <ul>
                <li><a href="#">Livelihoods</a></li>
                <li><a href="#">Health and Nutrition</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="emergency.html">Emergencies</a></li>
                <li><a href="#">Gender equality</a></li>
                <li><a href="#">COVID-19</a></li>
                <li><a href="#">Youth</a></li>
            </ul>
        </div>
        <div className="fourth-item">
            <h2 className='font-bold text-xl'>Where we work</h2>
            <ul>
                <li><a href="#">View all regions</a></li>
            </ul>
        </div>
        <div className="last-item">
            <ul>
                <li><a href="#">Support out work</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Bidding Jobs</a></li>
                <li><a href="#">Work with us</a></li>
                <li><a href="donate.html">Donate</a></li>
            </ul>
        </div>
    </div>
    <div className="socials">
        <div className="social">
            <ul>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
</div>
<Banner/>
      </footer>
    </>
  );
}

export default Footer;