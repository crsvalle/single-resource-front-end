import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./SnackEditForm.css"
const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    serving: 0,
    protein: 0,
    sugar: 0,
    sodium: 0,
    fat: 0,
    type: "",
    is_favorite: false,
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`,updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_favorite: !snack.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div className="editForm">
        <div>
          <p>This snack is {snack.name}, a {snack.type} type snack</p>
          <p>Each serving size is {snack.serving}g</p>
          <p>It has a protein amount of {snack.protein}g</p>
          <p>It has a sugar amount of {snack.sugar}g</p>
          <p>It has a sodium level of {snack.sodium}mg</p>
          <p>It has a fat level of {snack.fat}g</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={snack.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Snack"
              required
            />
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="text"
              pattern="http[s]*://.+"
              
              value={snack.image}
              placeholder="http://"
              onChange={handleTextChange}
            />
            <label htmlFor="serving">Serving Size(g):</label>
            <input
              id="serving"
              type="number"
              value={snack.serving}
              placeholder="0g"
              onChange={handleTextChange}
            />
            <label htmlFor="protein">Protein(g):</label>
            <input
              id="protein"
              type="number"
              value={snack.protein}
              placeholder="0g"
              onChange={handleTextChange}
            />
            <label htmlFor="sugar">Sugar(g):</label>
            <input
              id="sugar"
              type="number"
              value={snack.sugar}
              placeholder="0g"
              onChange={handleTextChange}
            />
            <label htmlFor="sodium">Sodium(mg):</label>
            <input
              id="sodium"
              type="text"
              value={snack.sodium}
              placeholder="0g"
              onChange={handleTextChange}
            />
            <label htmlFor="fat">Fat(g):</label>
            <input
              id="fat"
              type="text"
              value={snack.fat}
              placeholder="0g"
              onChange={handleTextChange}
            />
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              type="text"
              name="type"
              value={snack.type}
              placeholder="healthy, tasty, ..."
              onChange={handleTextChange}
            >
              <option value=""></option>
              <option value="Savory">Savory</option>
              <option value="Sweet">Sweet</option>
            </select>
            <label htmlFor="is_favorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={snack.is_favorite}
            />

            <br />
            <input type="submit" />
          </form>
          <Link to={`/snacks/${id}`}>
            <button className="nvmButton">Nevermind!</button>
          </Link>
        </div>
    </div>
  );
}

export default SnackEditForm;