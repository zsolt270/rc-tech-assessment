type HeroListItemProps = {
	id: number;
	name: string;
	available: boolean;
	handleChange: (id: number) => void;
};

export default function HeroesListItem({
	id,
	name,
	available,
	handleChange,
}: HeroListItemProps) {
	return (
		<li
			className={`${available === true ? "available" : "unAvailable"}`}
			onClick={() => handleChange(id)}
		>{`${name} ${available ? '"Available"' : ""}`}</li>
	);
}
