const ContactCard = ({ icon, title, content, link, delay = 0 }) => {
  const IconComponent = icon;

  return (
    <div
      className="bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          {link ? (
            <a className="text-base-content/70 hover:text-primary transition-colors">
              {content}
            </a>
          ) : (
            <p className="text-base-content/70">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
