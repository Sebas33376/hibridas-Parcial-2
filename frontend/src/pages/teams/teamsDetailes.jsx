import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const TeamsDetails = () => {
  const [team, setTeam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:2023/api/teams/${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  },[]);

  return team.name !== undefined ? (
    <Layout url="/teams">
      <div>
        <img src={team.img} alt="imagen ilustrativa del deporte" />
        <div>
          <h1>{team.name}</h1>
          <p>{team.description}</p>
          <ul>
            <li>cantidad</li>
            <li>{team.gender}</li>
            <li>{team.skills_level}</li>
          </ul>
        </div>
        <h2>{team.date}</h2>
        <p>{team.hour}</p>
        <h2>{team.place}</h2>
        <p>{team.direction}</p>
      </div>
    </Layout>
  ) : (
    <div>
        <h1>Cargando</h1>
    </div>
  )
};

export default TeamsDetails;
