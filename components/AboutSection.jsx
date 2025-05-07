'use client';
import { FaCheckSquare } from 'react-icons/fa';


const AboutSection = ({
  title = 'OUR VISION',
  imageSrc = '/images/corporate1.webp', 
  description,
  valuesTitle = 'Our Values',
  valuesSubtitle = 'MIND MEETS HEART',
  valuesList = [],
}) => {
  return (
    <section id="about-section" className="py-5 bg-white">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-semibold">{title}</h2>
          </div>
        </div>
        <div className="row align-items-start gy-4">
          <div className="col-md-5">
            <div className="about-img">
              <img
                src='/images/corporate1.webp'
                alt="about section"
                className="img-fluid rounded shadow"
                style={{ height: '450px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-md-7">
            {description && <p className="lead text-muted f_14 fw-semibold">{description}</p>}
            <div>
              <h2 className="h4 fw-semibold f_20">{valuesTitle}</h2>
              <h4 className="h5 text-muted mb-3 f_20">{valuesSubtitle}</h4>
              <ul className="list-unstyled">
                {valuesList.map((item, index) => (
                  <li key={index} className="d-flex mb-2">
                    <FaCheckSquare className="text-dark me-2 mt-1" />
                    <span className='f_14 fw-semibold'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
