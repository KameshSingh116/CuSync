import { useNavigate }
from "react-router-dom";

import { logoutUser }
from "../../services/authService";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    await logoutUser();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Welcome to CuSync Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;