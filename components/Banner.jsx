"use client"

import Link from "next/link"
import '../styles/banner.css'


const carouselSlides = [
  {
    id: 1,
    title: "Transform Your",
    highlight: "Business",
    subtitle: "Innovative solutions to help your company reach new heights",
    buttonText: "Get Started",
    buttonLink: "/services",
    backgroundImage: "/images/banner.webp",
  },
  {
    id: 2,
    title: "Creative",
    highlight: "Marketing",
    subtitle: "Strategic campaigns that drive results and increase engagement",
    buttonText: "Our Work",
    buttonLink: "/portfolio",
    backgroundImage: "/images/premium_photo-1666997726532-33f671ca24c8.webp",
  },
  {
    id: 3,
    title: "Digital",
    highlight: "Excellence",
    subtitle: "Cutting-edge technology solutions for the modern business landscape",
    buttonText: "Learn More",
    buttonLink: "/about",
    backgroundImage: "/images/g-visuals-WKu4oNdGjcQ-unsplash.jpg",
  },
]

const BannerCarousel = () => {


  return (
    <div id="bannerCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {carouselSlides.map((slide, index) => (
          <button
            key={`indicator-${slide.id}`}
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel slides */}
      <div className="carousel-inner">
        {carouselSlides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div
              className="banner d-flex align-items-center justify-content-center text-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="overlay w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="intro-text text-white">
                    <h1 className="animate-title">
                      {slide.title} <span>{slide.highlight}</span>
                    </h1>
                    <p className="animate-subtitle">{slide.subtitle}</p>
                    <Link href={slide.buttonLink} className="btn banner-btn rounded-pill animate-btn">
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>


    </div>
  )
}

export default BannerCarousel
