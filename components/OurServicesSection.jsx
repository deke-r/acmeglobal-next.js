"use client"


import { useEffect, useState } from "react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"
import { Printer, Zap, Users, Diamond, ShoppingCart, Lightbulb, LayoutGrid, Square } from "lucide-react"


const serviceItems= [
  {
    id: "print-media",
    title: "Print Media",
    description: "Print media advertising is a form or structure of advertising that...",
    icon: <Printer size={30} />,
    link: "/print-media",
  },
  {
    id: "electronic-media",
    title: "Electronic Media",
    description: "Initiating with the electronic media, the journey has been amazing...",
    icon: <Zap size={30} />,
    link: "/electronic-media",
  },
  {
    id: "outdoor-media",
    title: "Outdoor Media",
    description: "Outdoor Media is became essential part for large scale and small...",
    icon: <Users size={30} />,
    link: "/outdoor-media",
  },
  {
    id: "online-media",
    title: "Online Media",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    icon: <Diamond size={30} />,
    link: "/online-media",
  },
  {
    id: "market-planning",
    title: "Market Planning",
    description: "A great marketing strategy is a key factor for brand...",
    icon: <ShoppingCart size={30} />,
    link: "/market-planning",
  },
  {
    id: "media-planning",
    title: "Media Planning",
    description: "When a client hires our media planning services, they...",
    icon: <Lightbulb size={30} />,
    link: "/media-planning",
  },
  {
    id: "media-buying-implementation",
    title: "Media Buying & implementation",
    description: "Media buying and implementation is an integral part of running...",
    icon: <LayoutGrid size={30} />,
    link: "/media-buying-implementation",
  },
  {
    id: "digital-planning",
    title: "Digital Planning",
    description: "At the most simple, a digital planning is a computerized method...",
    icon: <Square size={30} />,
    link: "/digital-planning",
  },
]

export default function OurServicesSection() {

  return (
    <section id="service-section" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">We provide a wide range of services to meet your needs</p>
          </div>
        </div>

        <div className="row">
          {serviceItems.map((service) => (
            <div key={service.id} className="col-md-3">
              <div className="services-post">
                <Link href={service.link} className="service-icon">
                  {service.icon}
                </Link>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        #service-section {
          padding-top: 80px;
          padding-bottom: 40px;
        }

        .services-post {
          text-align: center;
          margin-bottom: 80px;
        }

        .services-post a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          -moz-transition: all 0.2s ease-in-out;
          -webkit-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          width: 100px;
          height: 100px;
          margin: 0 0 24px;
          color: #111;
          text-align: center;
          background: transparent;
          border: 2px solid #111;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -o-border-radius: 50%;
          border-radius: 50%;
        }

        .services-post:hover a,
        .services-post a.active {
          background: #ff432e;
          color: #ffffff;
          border: 2px solid transparent;
        }

        .services-post h2 {
          color: #111;
          font-weight: 400;
          margin: 0 0 14px;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>
    </section>
  )
}
