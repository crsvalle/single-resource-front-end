import React from 'react'
import "./ModalWin.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;


export default function ModalWin({id, setModal}) {
    let navigate = useNavigate();
    const handleDelete = () => {
        axios
          .delete(`${API}/snacks/${id}`)
          .then(() => {
            navigate(`/snacks`);
          })
          .catch((e) => console.error(e));
      };

      function handleCancel(){
        setModal(false)
      }
  return (
    <div>
        <section className="modal hidden">
            <div className="flex">
                <div></div>
                <button className="btn-close" onClick={handleCancel}>⨉</button>
            </div>
            <div className='text'>
                <h3>Confirmation</h3>
                <p>
                Are you sure you want to delete this?
                </p>
            </div>
            <button className="btn" onClick={handleDelete}>Delete</button>
            <button className='' onClick={handleCancel}>Cancel</button>
        </section>

        <div className="overlay hidden"></div>
</div>
  )
}
