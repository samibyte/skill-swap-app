import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Former education technology consultant with 10+ years experience in peer-to-peer learning platforms.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA==&w=400&fit=max",
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      role: "Head of Learning",
      bio: "PhD in Educational Psychology, specializes in skill acquisition and community-based learning methodologies.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MnwxMHx8d2VvbWFufGVufDB8fDB8fA==&w=400&fit=max",
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Tech Lead",
      bio: "Full-stack developer passionate about building inclusive platforms that connect people through knowledge sharing.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA==&w=400&fit=max",
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Community Manager",
      bio: "Expert in building engaged communities and creating safe spaces for meaningful skill exchanges.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VvbWFufGVufDB8fDB8fA==&w=400&fit=max",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-9/12 mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold poppins-font mb-4">
            Meet Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            The passionate people behind SkillSwap
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-base-100/70 backdrop-blur-sm border border-base-300/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-base-content/70 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
