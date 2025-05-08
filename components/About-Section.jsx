import Image from "next/image"
import { CheckSquare } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-5 py-md-6 bg-light" id="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm overflow-hidden">
              <Image
                src="/images/corporate2.jpg"
                width={600}
                height={400}
                alt="About Acme Global"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <h2 className="fw-bold mb-4">
                About <span className="text-primary">Acme Global</span>
              </h2>
              <p className="lead mb-4">
                Acme Global is one of the leading promotion, branding, advertising and media buying agencies of India.
                We are widely recognized to have more than 25 years experience in advertising marketing.
              </p>
              <p className="mb-4">
                Being a full-service advertising agency we offer our customers the entire range of media communication
                platforms in both classical and digital formats. We are widely known for our blending creativity and
                techniques that transform and grow our clients businesses. We attempt to move with your needs.
              </p>
              <p className="mb-4">
                Our target derives to 'motivate our clients' and we make consumers more technology statics that's why we
                strongly believe in trustful relationships we build. We are widely appreciated to create experience
                based working availability and intentionally simplify business and brand marketing capabilities to touch
                worldwide fame.
              </p>

              <div className="mt-5">
                <h4 className="fw-bold mb-3">What Makes Us Different?</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="d-flex align-items-center">
                          <CheckSquare className="text-primary me-2" size={20} />
                          <span>We create experiences</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center">
                          <CheckSquare className="text-primary me-2" size={20} />
                          <span>We simplify marketing</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="d-flex align-items-center">
                          <CheckSquare className="text-primary me-2" size={20} />
                          <span>We amplify brands</span>
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="d-flex align-items-center">
                          <CheckSquare className="text-primary me-2" size={20} />
                          <span>We communicate with purpose</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
