import { Player } from "./model";

interface budgetProps {
  playerInfo: Player;
}

const List = ({ playerInfo }: budgetProps) => {
  const PlayerList = playerInfo.map((data) => (
    <ul className="grid grid-cols-6" key={data.name}>
      <li>{data.rank}.</li>
      <li>{data.name}</li>
      <li>{data.rating}</li>
      <li>{data.winRate}</li>
      <li>{data.games}</li>
      <li>{data.lastGame}</li>
    </ul>
  ));

  return <>{PlayerList}</>;
};
export default List;
