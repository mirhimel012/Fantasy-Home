import 'animate.css';

const Profile = () => {
    return (
        <div className="">
      <div>
        <h2 className="text-2xl text-center font-bold m-5 animate__animated animate__bounce">Update your Profile Here:</h2>
      </div>
      <div className="justify-center flex ">
      <form className="m-4 w-72 p-6 border rounded-2xl border-opacity-30 border-primary hover:border-secondary">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            // onChange={handleNameChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            id="photoURL"
            // value={photoURL}
            // onChange={handlePhotoURLChange}
            className="mt-1 p-2 block w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save Changes</button>
      </form>
      </div>
    </div>
    );
};

export default Profile;