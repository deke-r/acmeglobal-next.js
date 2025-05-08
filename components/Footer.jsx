import Link from "next/link"
import { MapPin, Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Office Address */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <h4 className="text-white bpc ps-3 mb-4">Office Address</h4>
              <ul className="list-unstyled footer-contact">
                <li className="d-flex mb-3">
                  <MapPin className="tpc flex-shrink-0 me-2" size={20} />
                  <span>Plot No -281(A), Udyog kendra-1 Ecotech-3, Greater Noida- 201306.</span>
                </li>
                <li className="d-flex mb-3">
                  <Mail className="tpc flex-shrink-0 me-2" size={20} />
                  <a href="mailto:info@senseprojects.in" className="text-white text-decoration-none hover-underline">
                    info@senseprojects.in
                  </a>
                </li>
                <li className="d-flex mb-3">
                  <Phone className="tpc flex-shrink-0 me-2" size={20} />
                  <span>+91 9319412012</span>
                </li>
                <li className="d-flex mb-3">
                  <Globe className="tpc flex-shrink-0 me-2" size={20} />
                  <a
                    href="https://senseprojects.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none hover-underline"
                  >
                    www.senseprojects.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <h4 className="text-white bpc ps-3 mb-4">Services</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/print-media"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Print Media
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/electronic-media"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Electronic Media
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/outdoor-media"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Outdoor Media
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/online-media"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Online Media
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/market-planning"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Market Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <h4 className="text-white bpc ps-3 mb-4">Quick Links</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/" className="text-white text-decoration-none d-flex align-items-center hover-underline">
                    <ArrowRight className="tpc me-2" size={16} />
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Talk with us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/portfolio"
                    className="text-white text-decoration-none d-flex align-items-center hover-underline"
                  >
                    <ArrowRight className="tpc me-2" size={16} />
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links (replacing FLICKR STREAM) */}
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <h4 className="text-white bpc ps-3 mb-4">Connect With Us</h4>

              <div className="mb-4">
                <p>Stay updated with our latest news, projects and announcements by following us on social media.</p>
              </div>

              <div className="d-flex gap-3 mb-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <div className="bg-primary bg-opacity-25 hover-bg-primary p-2 rounded-circle transition-all">
                    <Facebook size={24} className="text-white" />
                  </div>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <div className="bg-primary bg-opacity-25 hover-bg-primary p-2 rounded-circle transition-all">
                    <Twitter size={24} className="text-white" />
                  </div>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <div className="bg-primary bg-opacity-25 hover-bg-primary p-2 rounded-circle transition-all">
                    <Instagram size={24} className="text-white" />
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <div className="bg-primary bg-opacity-25 hover-bg-primary p-2 rounded-circle transition-all">
                    <Linkedin size={24} className="text-white" />
                  </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <div className="bg-primary bg-opacity-25 hover-bg-primary p-2 rounded-circle transition-all">
                    <Youtube size={24} className="text-white" />
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Acme Global. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              <Link href="/privacy-policy" className="text-white text-decoration-none me-3 hover-underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white text-decoration-none hover-underline">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
