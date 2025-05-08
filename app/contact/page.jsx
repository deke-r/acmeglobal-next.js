export const metadata = {
  title: 'Contact Us | Acme Global',
  description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
  author: 'Sense Project Pvt Ltd',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'Contact Us | Acme Global',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    url: 'https://acmeglobal.in/contact',
    images: ['/images/swello-VW7ll65EAwA-unsplash.webp'],
    site_name: 'Acme Global',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@acmeglobal',
    title: 'Contact Us | Acme Global',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    image: '/images/swello-VW7ll65EAwA-unsplash.webp',
  },
};




import Link from "next/link"
import ContactForm from "../../components/ContactForm"
import { MapPin, Phone, Mail } from "lucide-react"
import '../../styles/contact.css'
import PageBanner from "../../components/PageBanner";
export default function ContactPage() {
  return (
    <div className="contact-page">
   
   <PageBanner
        image="/images/kk.webp"
        title="Contact Us"
        pageName="Contact"
      />

      {/* Contact Section */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4 p-4">
              <div className="card-body">
                <h2 className="card-title mb-4">Get In Touch</h2>
                <p className="text-muted mb-4">
                  Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get
                  back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map and Address */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 h-100">
              <div className="card-body">
                <h2 className="card-title mb-4">Our Location</h2>

                {/* Map */}
                <div className="map-container mb-4 rounded-3 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1751.807342749621!2d77.322117!3d28.581331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce450b69f04d5%3A0x7c6b67089fa03164!2s17%2C%20Block%20A%2C%20Sector%204%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1746611360497!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <MapPin className="text-light" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Address</h5>
                      <p className="mb-0 text-muted">123 Business Avenue, New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <Phone className="text-light" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Phone</h5>
                      <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <Mail className="text-light" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="mb-0 text-muted">info@yourcompany.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
