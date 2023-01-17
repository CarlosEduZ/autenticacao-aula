import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getTrips from "../api/getTrips";
import getTripDetail from "../api/getTripsDetail";
import Header from "../components/Header";

function UserPage() {
  const [viagens, setViagens] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTrips(setViagens);
  }, []);

  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {id}</h1>
      {viagens.map((viagem) => {
        return (
          <>
            <ul>
              <li>id: {viagem.id}</li>
              <li>nome: {viagem.name}</li>
              <li>descrição: {viagem.description}</li>
              <button onClick={() => getTripDetail(id, viagem.id)}>
                Detalhes
              </button>
            </ul>
          </>
        );
      })}
    </main>
  );
}

export default UserPage;
