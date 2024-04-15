import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";

const Home = () => {
    return (
        <div>
            <h4 className="text-4xl">This is Home</h4>
            <FirebaseProvider></FirebaseProvider>
        </div>
    );
};

export default Home;