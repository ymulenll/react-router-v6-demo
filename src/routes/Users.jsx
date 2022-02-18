import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllUsers } from "../users";

export function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const users = getAllUsers();

  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  const filter = searchParams.get("filter") ?? "";

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        placeholder="filter user"
        value={filter}
        onChange={handleChange}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          {users
            .filter((user) => {
              if (!filter) return true;

              return user.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((user) => (
              <li key={user.id}>
                <Link to={user.id.toString() + location.search}>
                  {user.name}
                </Link>
              </li>
            ))}
        </ul>

        <article>
          <Outlet />
        </article>
      </div>
    </div>
  );
}
