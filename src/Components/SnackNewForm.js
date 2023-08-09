import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    image: "",
    serving: 0,
    protein: 0,
    sugar: 0,
    sodium: 0,
    fat: 0  ,
    type: "",
    is_favorite: false,
  });

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
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
          required
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
        <label htmlFor="protein"> Protein(g):</label>
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
    </div>
  );
}

export default SnackNewForm;