import Teams from "./teams.jsx";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const List = ({ teamsList }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [teams, setTeams] = useState(teamsList);

  const onChangeProductos = (e) => {
    //    setTeams(e.target.value)
    const filterText = e.target.value.toLowerCase();
    const listaFiltrada = teams.filter((teams) =>
      teams.name.toLowerCase().includes(filterText)
    );
    setTeams(listaFiltrada);
  };

  useEffect( () => {
    setTeams(teamsList);
  }, [teamsList]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Filtro: <input type="text" name="" id="" onChange={onChangeProductos} />
      </form>
      <ul>
        {teams.map((teams) => (
          <Teams key={teams._id} teams={teams} />
        ))}
      </ul>
    </>
  );
};

export default List;
