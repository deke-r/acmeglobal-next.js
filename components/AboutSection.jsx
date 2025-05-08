import Image from "next/image";
import { CheckSquare } from "lucide-react";

const AboutSection = ({
  id = "about-section",
  image = "/images/corporate1.webp",
  imageAlt = "About Us",
  heading = "About Us",
  highlightedText = "",
  paragraphs = [],
  points = [],
}) => {
  const half = Math.ceil(points.length / 2);
  const leftPoints = points.slice(0, half);
  const rightPoints = points.slice(half);

  return (
    <section className="py-5 py-md-6 bg-light" id={id}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="card border-0 shadow-sm overflow-hidden">
              <Image
                src={image}
                width={600}
                height={400}
                alt={imageAlt}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ps-lg-4">
              <h2 className="fw-bold mb-4">
                {heading}{" "}
                {highlightedText && <span className="tpc">{highlightedText}</span>}
              </h2>

              {paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? " mb-4 fw-semibold text-muted f_15" : "mb-4 fw-semibold text-muted f_15"}>
                  {para}
                </p>
              ))}

              {points.length > 0 && (
                <div className="mt-5">
                  <h4 className="fw-bold mb-3">What Makes Us Different?</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        {leftPoints.map((item, idx) => (
                          <li className="mb-2" key={idx}>
                            <div className="d-flex align-items-center">
                              <CheckSquare className="tpc me-2" size={20} />
                              <span className="f_15 fw-semibold text-muted">{item}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        {rightPoints.map((item, idx) => (
                          <li className="mb-2" key={idx}>
                            <div className="d-flex align-items-center">
                              <CheckSquare className="tpc me-2" size={20} />
                              <span className="f_15 fw-semibold text-muted">{item}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
