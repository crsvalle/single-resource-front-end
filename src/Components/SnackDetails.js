import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SnackDetails.css"; 

function SnackDetails() {
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    });
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.error("Error deleting snack:", error));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  const isHighIn = (value, threshold) => {
    return value > threshold;
  };

  return (
    <>
      <article
        className={`${
          isHighIn(snack.sugar, 15) ? "high-sugar" : ""
        } ${isHighIn(snack.protein, 5) ? "high-protein" : ""}`}
      >
        <h3>
          {snack.is_favorite ? <span>⭐️</span> : null} {snack.name}
        </h3>
        <div className="image-container">
          <img src={snack.image} alt={snack.name} className="snack-image" />
        </div>
        <h5>
          <span>Serving: {snack.serving}g</span>
        </h5>
        <p>
          <strong>Protein:</strong> {snack.protein}g | <strong>Sugar:</strong>{" "}
          {snack.sugar}g | <strong>Sodium:</strong> {snack.sodium}mg |{" "}
          <strong>Fat:</strong> {snack.fat}g
        </p>
        <h6>{snack.type}</h6>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SnackDetails;



