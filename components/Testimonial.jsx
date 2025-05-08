import Image from "next/image"



export default function Testimonial({ name, position, company, image, quote }) {
  return (
    <div className="testimonial-item text-center">
      <div className="mb-4">
        <Image
          src={image || "/placeholder.svg"}
          width={80}
          height={80}
          alt={name}
          className="rounded-circle border border-3 border-light shadow-sm"
        />
      </div>
      <h5 className="fw-bold text-white mb-1">{name}</h5>
      <p className="text-white-50 mb-3">
        {position}, {company}
      </p>
      <div className="bg-white bg-opacity-10 p-4 rounded-3 mb-4">
        <p className="text-white mb-0">{quote}</p>
      </div>
    </div>
  )
}
