import 'animate.css';
import { useState } from "react";
import useAuth  from "../hooks/useAuth";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    }
  };
    return (
        <div className="flex-col flex justify-center items-center lg:flex-row">
          <div className="m-4 p-6 border rounded-2xl border-opacity-30 border-primary hover:border-secondary">
    <h2 className="text-2xl text-center font-bold m-5 animate__animated animate__bounce">Your Information:</h2>
    <p className="text-gray-700"><span className='font-semibold'>Name:</span> {user.displayName}</p>
    <p className="text-gray-700"><span className='font-semibold'>Email:</span> {user.email}</p>
    <div className='flex justify-center m-6'>
      <img src={user?.photoURL || "https://i.ibb.co/WsZ4wFT/Rectangle-7.png"} alt="Profile" className="w-32 h-32 rounded-full mt-4" />
    </div>
        </div>

        <div className="m-4 w-72 p-6 border rounded-2xl border-opacity-30 border-primary hover:border-secondary">
      <div>
        <h2 className="text-2xl text-center font-bold m-5 animate__animated animate__bounce">Update your Profile Here:</h2>
      </div>
      <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={handlePhotoURLChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save Changes</button>
      </form>
      </div>
    </div>
        </div>
    );
};

export default Profile;