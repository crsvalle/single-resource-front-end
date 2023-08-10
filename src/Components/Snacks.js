import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  function sortByType(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => a.type !== b.type ? a.type < b.type ? -1: 1 :0)]);
  };
  
  function sortByProtein(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.protein - a.protein;})]);
  };

  function sortBySugar(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.sugar - a.sugar;})]);
  };
  
  function sortBySodium(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.sodium - a.sodium;})]);
  };

  return (
    <div className="Snacks">
      <section>
        <button onClick={sortByType}>Sort by Type</button>
        <button onClick={sortByProtein}>Sort by Protein</button>
        <button onClick={sortBySugar}>Sort by Sugar</button>
        <button onClick={sortBySodium}>Sort by Sodium</button>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Snack Name</th>
              <th>Protein</th>
              <th>Sugar</th>
              <th>Sodium</th>
              <th>Type</th>
              <th>See this snack !</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;