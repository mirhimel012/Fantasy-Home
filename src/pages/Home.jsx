import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import Blogs from "../components/Blogs";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="mx-6">
            <Slider></Slider>
            <div className="text-center m-10">
                <h2 className="text-base font-bold lg:text-5xl">Explore Your Dream</h2>
            </div>
            <Blogs></Blogs>
            <FirebaseProvider></FirebaseProvider>
        </div>
    );
};

export default Home;