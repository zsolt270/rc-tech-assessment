import { HeroesType } from "./Types/HeroFetchType";
import HeroesListItem from "./HeroesListItem";

type HeroListProps = {
	heroes: HeroesType[];
	setHeroList: (heroes: HeroesType[]) => void;
};

function HeroesList({ heroes, setHeroList }: HeroListProps) {
	function handleAvailabilityChange(id: number) {
		const changedHeroesList = heroes.map((hero) => {
			if (id === hero.id) {
				return { ...hero, available: !hero.available };
			} else {
				return hero;
			}
		});
		setHeroList(changedHeroesList);
	}

	const list = heroes.map((hero) => {
		return (
			<HeroesListItem
				key={hero.id}
				id={hero.id}
				name={hero.name}
				available={hero.available}
				handleChange={handleAvailabilityChange}
			/>
		);
	});
	return (
		<>
			<h2>Heroes</h2>
			<ol>{list}</ol>
		</>
	);
}

export default HeroesList;
