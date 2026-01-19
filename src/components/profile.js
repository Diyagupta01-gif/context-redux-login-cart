import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { userName, role } = useContext(AuthContext);

  return (
    <div>
      <h3>👤 Profile</h3>
      <p><b>Name:</b> {userName}</p>
      <p><b>Role:</b> {role}</p>
    </div>
  );
}

export default Profile;
