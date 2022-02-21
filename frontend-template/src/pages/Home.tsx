import Carousel from "../components/Home/Carousel";
import SliderComponent from "../components/Home/Slider/index"

const Home = () => {
    return(
		<>
			<Carousel/>

			<SliderComponent
				id={1}
			/>
			<SliderComponent
				id={2}
			/>
			<SliderComponent
				id={3}
			/>


		</>
	);
};

export default Home;
