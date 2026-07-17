"use client";

export default function Contact() {
  return (
    <div className="legal-container">
      <h1 className="legal-title">Contact Us</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
        Have questions, feedback, or suggestion reviews for kitchen gadgets? Fill out the form below and we will get back to you shortly.
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" className="form-control" placeholder="yourname@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" rows={5} placeholder="How can we help you?" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
