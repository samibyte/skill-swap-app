import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  ChevronDown,
} from "lucide-react";
import useAOS from "../../hooks/useAOS";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";
import FaqItem from "./components/FAQItem";

const ContactUs = () => {
  useAOS({ duration: 1200, once: true });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "support@skillswap.com",
      link: "mailto:support@skillswap.com",
      delay: 100,
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      delay: 150,
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Knowledge Street, Learning City, ED 10101",
      delay: 200,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM (EST)",
      delay: 250,
    },
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our phone support for faster assistance.",
    },
    {
      question: "Do you offer enterprise solutions for organizations?",
      answer:
        "Yes! We have tailored solutions for businesses, educational institutions, and organizations. Contact our business team at enterprise@skillswap.com for custom packages.",
    },
    {
      question: "Can I schedule a demo or consultation call?",
      answer:
        "Absolutely! You can schedule a 30-minute consultation call with our team through our booking system. We'll discuss your specific needs and show you how SkillSwap can help.",
    },
    {
      question: "What's the best way to report a technical issue?",
      answer:
        "For technical issues, please email tech@skillswap.com with screenshots and detailed steps to reproduce the problem. This helps us resolve issues faster.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 via-base-100 to-base-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="text-center" data-aos="fade">
            <h1 className="text-4xl md:text-5xl font-bold poppins-font mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
              Have questions, feedback, or need assistance? We're here to help
              you with anything SkillSwap-related.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div data-aos="fade">
                <h2 className="text-2xl font-bold poppins-font mb-6">
                  Get in touch
                </h2>
                <p className="text-base-content/70 mb-8">
                  Our team is dedicated to providing you with the best support.
                  Choose the most convenient way to reach out to us.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactCard key={index} {...info} />
                ))}
              </div>

              {/* Quick Help */}
              <div
                className="bg-linear-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6"
                data-aos="fade"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold">Need quick help?</h3>
                </div>
                <p className="text-sm text-base-content/70 mb-4">
                  Check our{" "}
                  <a className="text-primary hover:underline">Support Center</a>{" "}
                  for instant answers to common questions.
                </p>
                <a className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  Visit Support Center
                  <ChevronDown className="w-4 h-4 rotate-270" />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-base-200/30">
        <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade">
            <h2 className="text-3xl font-bold poppins-font mb-4">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Find quick answers to common questions about SkillSwap
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16">
        <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4">
          <div
            className="bg-linear-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
            data-aos="fade"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Users className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold poppins-font mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
              Connect with other SkillSwap users, share experiences, and get
              community support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a className="btn btn-primary">Visit Community Forum</a>
              <a className="btn btn-outline">Help Center</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
