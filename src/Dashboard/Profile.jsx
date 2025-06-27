import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 font-sans text-base-content">
      <div className="bg-white/70 dark:bg-base-200/50 backdrop-blur-md rounded-xl shadow-xl border border-border p-6 space-y-6">
        <h2 className="text-3xl font-heading text-primary mb-4">👤 My Profile</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user?.photoURL || "/default-user.png"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-lg">
              <FaUserCircle className="text-secondary" />
              <span className="font-semibold">Name:</span> {user?.displayName || "N/A"}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-secondary" />
              <span className="font-semibold">Email:</span> {user?.email || "N/A"}
            </p>
            {/* Future: Bio, Role, Joined Date */}
          </div>
        </div>

        {/* Optional Edit Button */}
        <div className="pt-4">
          <button className="btn btn-accent text-white rounded-full">
            ✏️ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
