import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>
        {snack.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={snack.url} target="_blank" rel="noreferrer">
          {snack.name}
        </a>
      </td>
      <td>
        {snack.protein < 5 ? 
            <p className="fontNum"> <span style={{color:"red"}}>{snack.protein}g</span></p>
            :
            snack.protein <= 10 ?
            <p className="fontNum"> <span style={{color:"yellow"}}>{snack.protein}g</span></p>:
            <p className="fontNum"> <span style={{color:"green"}}>{snack.protein}g</span></p>
            
        }
        </td>

      <td>
      {snack.sugar < 5 ? 
            <p className="fontNum"> <span style={{color:"green"}}>{snack.sugar}g</span></p>
            :
            snack.sugar <= 20 ?
            <p className="fontNum"> <span style={{color:"yellow"}}>{snack.sugar}g</span></p>:
            <p className="fontNum"> <span style={{color:"red"}}>{snack.sugar}g</span></p>
            
      }
      </td>

      <td>
      {snack.fat < 5 ? 
            <p className="fontNum"> <span style={{color:"green"}}>{snack.fat}g</span></p>
            :
            snack.fat <= 20 ?
            <p className="fontNum"> <span style={{color:"yellow"}}>{snack.fat}g</span></p>:
            <p className="fontNum"> <span style={{color:"red"}}>{snack.fat}g</span></p>
            
      }
      </td>

      <td>
      {snack.sodium < 140 ? 
            <p className="fontNum"> <span style={{color:"green"}}>{snack.sodium}mg</span></p>
            :
            snack.sodium < 500 ?
            <p className="fontNum"> <span style={{color:"yellow"}}>{snack.sodium}mg</span></p>:
            <p className="fontNum"> <span style={{color:"red"}}>{snack.sodium}mg</span></p>
            
      }
      </td>
      <td>{snack.type}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;