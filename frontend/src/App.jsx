import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


export default function App() {

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
    <div>
      <Outlet/>
    </div>
  );
}
