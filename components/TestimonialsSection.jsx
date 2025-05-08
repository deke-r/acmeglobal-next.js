import Testimonial from "./testimonial"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michel Robert",
      position: "CEO",
      company: "ThemeBean",
      image: "/images/team-1.webp",
      quote:
        "Our living status has changed with Acme Global. They helped us to witness our dreams transforming into reality. With their excellent customer service, instant action is provided in any maintenance issue giving us a hassle-free modern living solution.",
    },
    {
      name: "Cristal Sheds",
      position: "CEO",
      company: "Lompian",
      image: "/images/team-2.webp",
      quote:
        "This is the best solution in regards to any construction related work. I am very glad to certify this company as the best service provider who can transform your entire brand to an ultimate destination.",
    },
    {
      name: "Regal Armas",
      position: "CEO",
      company: "Shimophi",
      image: "/images/team-3.webp",
      quote:
        "Working with Acme Global has been transformative for our business. Their strategic approach to advertising and deep understanding of our market has delivered exceptional results and ROI.",
    },
  ]

  return (
    <section className="testimonials-section py-5 py-md-6 bgp position-relative">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h2 className="text-white fw-bold mb-3">What Our Clients Say</h2>
            <p className="text-white-50">Discover why leading brands choose to work with us</p>
          </div>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
