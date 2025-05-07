'use client';
import Image from 'next/image';
import { useState } from 'react';
import '../styles/portfoliosection.css';

const PortfolioSection = ({ items = [] }) => {
  return (
    <section id="portfolio" className="portfolio-section-1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2>Our Portfolio</h2>
              <p className='f_18 fw-semibold text-muted'>Explore the Interactive Portfolio to know more about us</p>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="portfolio-item rounded-0 position-relative">
                <div className="image-container rounded-0 position-relative">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="img-fluid rounded-0"
                  />
                  <div className="overlay-2 position-absolute bottom-0 w-100 text-light p-3 d-flex justify-content-center align-items-center">
                    <div className="overlay-text text-center">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                {/* Links */}
                <div className="portfolio-caption">
                  <a href="#portfolio-modal" data-toggle="modal" className="link-1">
                    <i className="fa fa-magic"></i>
                  </a>
                  <a href={item.link} className="link-2">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

