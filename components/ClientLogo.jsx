"use client"
import Image from "next/image"





const clientsData= [
  {
    id: 1,
    name: "Client 1",
    imageUrl: "/images/client1.webp",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Client 2",
    imageUrl: "/images/client2.webp",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Client 3",
    imageUrl: "/images/client3.webp",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "Client 4",
    imageUrl: "/images/client4.webp",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "Client 5",
    imageUrl: "/images/client5.webp",
    website: "https://example.com",
  }
]

export default function ClientLogos() {

  return (
    <section className="client-logos py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="fw-bold">Our Trusted Clients</h2>
            <p className="text-muted f_14 fw-semibold">Proud to work with these amazing companies</p>
          </div>
        </div>

        <div className="row justify-content-center">
          {clientsData.map((client) => (
            <div key={client.id} className="col-6 col-md-4 col-lg-2 mb-4">
              <div className="client-logo-wrapper">
                {client.website ? (
                  <a href={client.website} target="_blank" rel="noopener noreferrer" className="d-block client-logo">
                    <Image
                      src={client.imageUrl || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={75}
                      className="img-fluid"
                    />
                  </a>
                ) : (
                  <div className="client-logo">
                    <Image
                      src={client.imageUrl || "/placeholder.svg"}
                      alt={client.name}
                      width={150}
                      height={75}
                      className="img-fluid"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .client-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 1rem;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }
        
        .client-logo-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .client-logo-wrapper:hover .client-logo {
          opacity: 1;
          filter: grayscale(0%);
        }
      `}</style>
    </section>
  )
}
