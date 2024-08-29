import { useEffect, useState } from "react";
import { HeroesType } from "../Types/HeroFetchType";
import { callApi } from "../call-api";

export const useFetchHeroes = (route: string) => {
	const [heroList, setHeroList] = useState<HeroesType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchHeroes = async () => {
			setIsLoading(true);
			try {
				const data = (await callApi(route)) as HeroesType[];
				setHeroList(data);
			} catch (err) {
				setError(true);
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchHeroes();
	}, [route]);

	return { heroList, setHeroList, isLoading, error };
};
