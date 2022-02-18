import { useNavigate, useParams } from "react-router";
import { deleteUser, getUser } from "../users";

export function User() {
  const { userId } = useParams();
  const user = getUser(+userId);

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(+userId);
    navigate("/users");
  };

  if (!user) {
    return <div>No se encuentra el usuario</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <div>
        <strong>Phone: </strong> {user.phone}
      </div>
      <div>
        <strong>Website: </strong> {user.website}
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
