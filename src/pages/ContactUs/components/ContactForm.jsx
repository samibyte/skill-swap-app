import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold poppins-font mb-6">
        Send us a message
      </h3>

      {success && (
        <div className="alert alert-success mb-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Send className="w-5 h-5" />
            <span>
              Message sent successfully! We'll get back to you within 24 hours.
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="John Doe"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <label className="block text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="How can we help you?"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="250">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 bg-base-200 border border-base-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
            placeholder="Tell us more about your inquiry..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full md:w-auto gap-2"
          data-aos="fade"
          data-aos-delay="300"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
