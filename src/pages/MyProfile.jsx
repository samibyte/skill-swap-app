import { useContext, useEffect, useState } from "react";
import {
  User,
  Star,
  Settings,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  PlusCircle,
  Search,
} from "lucide-react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router";
import ProfileUpdateModal from "../components/ProfileUpdateModal";
import { doc, onSnapshot } from "firebase/firestore";
import useAOS from "../hooks/useAOS";

// dummy data

const offeredSkills = [
  {
    id: 1,
    name: "Guitar Basics",
    rating: 4.5,
    students: 7,
    image: "https://i.ibb.co.com/JjR2jSHz/guitar-basics.jpg",
  },
  {
    id: 2,
    name: "React for Beginners",
    rating: 4.9,
    students: 19,
    image: "https://i.ibb.co.com/B5xCvxG4/react-code.jpg",
  },
];

const learnedSkills = [
  {
    id: 1,
    name: "Photography 101",
    provider: "Emily Clark",
    image: "https://i.ibb.co.com/0ydbtpXk/canon-camera.jpg",
  },
  {
    id: 2,
    name: "Cooking Essentials",
    provider: "John Doe",
    image: "https://i.ibb.co.com/60g9S1rG/cooking-ess.jpg",
  },
];

const MyProfile = () => {
  useAOS({ duration: 1200, once: true });
  const { user, db } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userBio, setUserBio] = useState(
    "Currently accepting skill trades, high-fives, and cookies. Skills optional."
  );

  useEffect(() => {
    if (!user) return;

    const docRef = doc(db, "users", user.uid);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setUserBio(docSnap.data().bio || "");
      }
    });

    return () => unsubscribe();
  }, [user, db]);

  return (
    <div className="min-h-screen bg-base-200 pt-10 pb-25">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile header */}
        <div
          className="relative bg-base-300/50 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6"
          data-aos="fade-up"
        >
          <div className="w-28 h-28 rounded-full ring-4 ring-primary overflow-hidden">
            <img
              src={
                user?.photoURL ||
                `https://avatar.iran.liara.run/username?username=${user?.displayName}+`
              }
              alt={user?.displayName || "User"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-base-content flex items-center justify-center md:justify-start gap-2">
              <User className="w-5 h-5 text-primary" />{" "}
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="flex items-center justify-center md:justify-start text-sm text-neutral gap-2 mt-1">
              <Mail className="w-4 h-4" /> {user?.email}
            </p>
            <p className="mt-3 text-neutral/80 max-w-md mx-auto md:mx-0">
              {userBio}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-outline btn-primary flex items-center gap-2"
          >
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </div>
        <ProfileUpdateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-base-300/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <Award />
            <p className="font-semibold mt-2">4</p>
            <p className="text-xs text-neutral/70">Total Swaps</p>
          </div>
          <div className="bg-base-300/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <Star />
            <p className="font-semibold mt-2">4.7</p>
            <p className="text-xs text-neutral/70">Average Rating</p>
          </div>
          <div className="bg-base-300/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <BookOpen />
            <p className="font-semibold mt-2">2</p>
            <p className="text-xs text-neutral/70">Skills Learned</p>
          </div>
          <div className="bg-base-300/50 backdrop-blur-md rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <Briefcase />
            <p className="font-semibold mt-2">2</p>
            <p className="text-xs text-neutral/70">Skills Offered</p>
          </div>
        </div>

        {/* skills offered */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-4 text-base-content">
            Skills I Offer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offeredSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm text-neutral mt-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" /> {skill.rating}
                  </p>
                  <p className="text-xs text-neutral/70 mt-1">
                    {skill.students} students taught
                  </p>
                </div>
              </div>
            ))}

            {/* add new skill card*/}
            <Link className="flex flex-col justify-center items-center border-2 border-dashed border-primary/40 rounded-2xl p-6 hover:bg-base-300/40 hover:border-primary/70 transition-all duration-300 cursor-pointer text-center">
              <PlusCircle className="w-10 h-10 text-primary mb-3" />
              <p className="font-semibold text-base-content mb-1">
                Add New Skill
              </p>
              <p className="text-sm text-neutral/70">
                Offer something new to the community
              </p>
            </Link>
          </div>
        </div>

        {/* skills learned */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-bold mb-4 text-base-content">
            Skills I've Learned
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnedSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-base-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm text-neutral/80 mt-1">
                    By {skill.provider}
                  </p>
                </div>
              </div>
            ))}

            {/* browse skills card */}
            <Link className="flex flex-col justify-center items-center border-2 border-dashed border-secondary/40 rounded-2xl p-6 hover:bg-base-300/40 hover:border-secondary/70 transition-all duration-300 cursor-pointer text-center">
              <Search className="w-10 h-10 text-secondary mb-3" />
              <p className="font-semibold text-base-content">
                Browse New Skills
              </p>
              <p className="text-sm text-neutral/70 mt-1">
                Discover skills to learn next
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
