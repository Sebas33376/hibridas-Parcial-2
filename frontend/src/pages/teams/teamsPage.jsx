import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import List from "../../components/teamsList";

export default function TeamsPage() {

    const [teams, setTeams] = useState([])

useEffect(() => {
    fetch("http://localhost:2023/api/teams")
    .then(async data => {
      const teams = await data.json()
      setTeams(teams)
    })
},[])

useEffect(()=>{},[teams])

  return (
    <Layout url="/">
      <List teamsList={teams}/>
    </Layout>
  );
}