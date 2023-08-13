import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ModalWin from "./ModalWin";
import "./SnackDetails.css"; 
const API = process.env.REACT_APP_API_URL;


function SnackDetails() {
  const [snack, setSnack] = useState({});
  const [modal, setModal] = useState(false)
  const [amount, setAmount] = useState(1);
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

  const isHighIn = (value, threshold) => {
    return value > threshold;
  };

  useEffect(() =>{
    for (let x = 1; x<1000; x++){
      if (x * snack.sugar >= 36){
        setAmount(x);
        break;
      }
      else if ( x * snack.sodium >= 450){
        setAmount(x);
        break;
      }
    }
  })
  

  return (
    <>
      <article
        className={`${
          isHighIn(snack.sugar, 10) ? "high-sugar" : ""
        } ${isHighIn(snack.protein, 5) ? "high-protein" : ""}`}
      >
      {modal ? <ModalWin id={id} setModal={setModal} /> :null}

        <h3>
          {snack.is_favorite ? <span>⭐️</span> : null} {snack.name}
        </h3>
        <div className="image-container">
          <img src={snack.image} alt={snack.name} className="snack-image" />
        </div>
        <h5>
          <span>Serving Size: {snack.serving}g</span>
        </h5>
        <p>
          <strong>Protein:</strong> {snack.protein}g | <strong>Sugar:</strong>{" "}
          {snack.sugar}g | <strong>Sodium:</strong> {snack.sodium}mg |{" "}
          <strong>Fat:</strong> {snack.fat}g
        </p>
        <h6>{snack.type}</h6>

        {amount == 1 ? 
        <p className="desc"> This snack becomes unhealthy after <strong>{amount}</strong> serving because it reaches an unhealthy amount of {snack.sugar * amount >= 36 && snack.sodium * amount >= 450 ?"sugar and sodium" : snack.sugar >= 36 ? "sugar": "sodium"}.</p>
        :
        <p className="desc">This snack becomes unhealthy after <strong>{amount}</strong> servings because it reaches an unhealthy amount of {snack.sugar * amount >= 36 && snack.sodium * amount >= 450 ?"sugar and sodium" :snack.sugar >= 36 ? "sugar": "sodium"}.</p>}

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="buttons">
            <div className="editButton">
              <Link to={`/snacks/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              <button onClick={handleModal}>Delete</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default SnackDetails;



