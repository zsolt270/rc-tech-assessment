import { useFetchHeroes } from "./hooks/useFetchHeroes";
import { HeroesType } from "./Types/HeroFetchType";
import HeroesList from "./heroes-list";
import "./app.css";

type FetchedDatas = {
	heroList: HeroesType[];
	setHeroList: React.Dispatch<React.SetStateAction<HeroesType[]>>;
	isLoading: boolean;
	error: boolean;
};

function App() {
	const { heroList, setHeroList, isLoading, error }: FetchedDatas =
		useFetchHeroes("heroes");

	if (isLoading) {
		return <h1 className='loading'>Loading</h1>;
	}

	if (error) {
		return <h1 className='errorMsg'>Failed to fetch heroes!</h1>;
	}

	return (
		<div>
			<h1>App</h1>
			<HeroesList
				heroes={heroList}
				setHeroList={setHeroList}
			/>
		</div>
	);
}

export default App;
