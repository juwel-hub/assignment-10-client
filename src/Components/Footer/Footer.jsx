import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Tour management</a>
          <a className="link link-hover">Planing</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact With us</h6>
          <a
            href="https://www.facebook.com/"
            className="link text-3xl link-hover"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            className="link text-3xl link-hover"
          >
            <FaSquareInstagram />
          </a>
          <a href="" className="link text-3xl link-hover">
            <FaSquareWhatsapp />
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <div>
          <p className="text-center underline">
            Copy right by Travel hero LTD. 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
