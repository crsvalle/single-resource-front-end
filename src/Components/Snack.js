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
      <td>{snack.protein}g</td>
      <td>{snack.sugar}g</td>
      <td>{snack.sodium}mg</td>
      <td>{snack.type}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;