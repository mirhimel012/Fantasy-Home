import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FirebaseProvider></FirebaseProvider>
        </div>
    );
};

export default Home;