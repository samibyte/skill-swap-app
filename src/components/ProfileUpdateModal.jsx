import { useState, useContext } from "react";
import {
  X,
  User,
  UserRound,
  CircleUserRound,
  UserRoundPen,
} from "lucide-react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";

const ProfileUpdateModal = ({ isOpen, onClose }) => {
  const { db, setLoading, auth, setUser, updateUserProfile } =
    useContext(AuthContext);

  const user = auth.currentUser;
  const [userFormData, setUserFormData] = useState({
    name: user.displayName,
    photo:
      user.photoURL ||
      `https://avatar.iran.liara.run/username?username=${user.displayName}+`,
    bio: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(user);
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { name, photo, bio } = userFormData;

    // console.log(name, photo);
    try {
      if (!user) {
        toast.error("No authenticated user found.");
        return;
      }
      await updateUserProfile({ displayName: name, photoURL: photo });
      await user.reload();
      setUser(user);

      // set bio
      if (bio.trim()) {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(
          userDocRef,
          { bio, updatedAt: new Date() },
          { merge: true }
        );
      }

      setLoading(false);
      toast.success("Profile updated successfully.");
      onClose();
    } catch (err) {
      // console.error("Profile update failed:", err);

      let errorMessage = "Failed to update profile. Please try again.";

      switch (err.code) {
        case "auth/requires-recent-login":
          errorMessage =
            "For security reasons, please log in again before updating your profile.";
          break;
        case "auth/invalid-photo-url":
          errorMessage = "The provided profile photo URL is invalid.";
          break;
        case "auth/invalid-display-name":
          errorMessage = "Please enter a valid name.";
          break;
        case "auth/network-request-failed":
          errorMessage =
            "Network issue detected. Check your connection and try again.";
          break;
        case "permission-denied":
          errorMessage = "You don't have permission to update this profile.";
          break;
        default:
          errorMessage = err.message || errorMessage;
      }

      toast.error(errorMessage);
    }
  };

  return (
    <div
      data-aos="fade"
      data-aos-easing="ease-out"
      data-aos-mirror="true"
      data-aos-duration="700"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-99"
    >
      <div
        data-aos="zoom-in-down"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-duration="700"
        className="bg-base-300/90 backdrop-blur-md rounded-xl w-11/12 max-w-md p-6 shadow-lg relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral hover:text-primary"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-primary" /> Update Profile
        </h3>

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <UserRound size={20} />
              </span>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                value={userFormData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200`}
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="mb-6">
            <label
              htmlFor="photo"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Photo
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-neutral-500">
                <CircleUserRound size={20} />
              </span>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL (optional)"
                value={userFormData.photo}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 `}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label
              htmlFor="photo"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Bio
            </label>
            <div className="relative flex items-center">
              <span className="absolute top-3 left-3 text-neutral-500">
                <UserRoundPen size={20} />
              </span>
              <textarea
                name="bio"
                placeholder="Bio.."
                value={userFormData.bio}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200`}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex btn w-full items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 disabled:bg-neutral-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
