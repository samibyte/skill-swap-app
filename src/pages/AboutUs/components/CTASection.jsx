import React from "react";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="max-w-9/12 mx-auto px-4">
        <div
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold poppins-font mb-4">
            Ready to Start Your Skill Journey?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and teachers who are already sharing
            knowledge on SkillSwap
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth/signup">
              <button className="btn btn-primary btn-lg">Sign Up Free</button>
            </Link>
            <Link to="/skills">
              <button className="btn btn-outline btn-lg">Browse Skills</button>
            </Link>
          </div>
          <p className="text-base-content/60 mt-6">
            No credit card required • Join in 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
