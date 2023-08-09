import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ModalWin from "./ModalWin";
const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snack, setSnack] = useState({});
  const [modal, setModal] = useState(false  )
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    });
  }, [id, navigate]);

  function handleModal(){
    setModal(true)
  }

  return (
    <>
      <article>
      {modal ? <ModalWin id={id} setModal={setModal} /> :null}
        <h3>
          {snack.is_favorite ? <span>⭐️</span> : null} {snack.name}
        </h3>
        <img src={snack.image} alt={snack.name} width="300" height="200" />
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
            <button onClick={handleModal}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SnackDetails;

