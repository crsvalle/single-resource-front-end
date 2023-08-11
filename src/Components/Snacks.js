import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const [toggle, setToggle] = useState(0)

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
    setToggle(1)
  };
  
  function sortByProtein(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.protein - a.protein;})]);
    setToggle(2)
  };

  function sortBySugar(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.sugar - a.sugar;})]);
    setToggle(3)
  };
  
  function sortBySodium(){
    setSnacks([...snacks
      .map((e)=>e)
      .sort((a,b) => {return b.sodium - a.sodium;})]);
    setToggle(4)
  };

  return (
    <div className="Snacks">
      <section>
        <div className="sort">
          <div></div>
          <div>
            <button className="sortButton" onClick={sortByType} style={toggle === 1 ? {backgroundColor:"black", color:"white"}:{}}>Sort by Type</button>
            <button className="sortButton sortProtein" onClick={sortByProtein} style={toggle === 2 ? {backgroundColor:"black", color:"white"}:{}}>Sort by Protein</button>
            <button className="sortButton sortSugar" onClick={sortBySugar} style={toggle === 3 ? {backgroundColor:"black", color:"white"}:{}}>Sort by Sugar</button>
            <button className="sortButton" onClick={sortBySodium} style={toggle === 4 ? {backgroundColor:"black", color:"white"}:{}}>Sort by Sodium</button>
          </div>
        </div>
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