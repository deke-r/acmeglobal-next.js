"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import axios from "axios"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data) => {
    console.log('data: ', data);
    try {
      const res = await axios.post("/api/contact-form-data", data)
      if (res.data.success) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message.")
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            <label htmlFor="name">Your Name</label>
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <label htmlFor="email">Your Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              id="phone"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit Indian phone number",
                },
              })}
            />
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              id="subject"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            <label htmlFor="subject">Subject</label>
            {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-3">
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              id="message"
              placeholder="Your Message"
              style={{ height: "150px" }}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            <label htmlFor="message">Your Message</label>
            {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
          </div>
        </div>

        <div className="col-12">
          {submitSuccess && (
            <div className="alert alert-success" role="alert">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary f_15 fw-semibold py-2 px-4 rounded-pill"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  )
}
