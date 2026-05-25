import Sidebar
from "../../components/layout/Sidebar";

import { useEffect, useState }
from "react";

import { useNavigate }
from "react-router-dom";

import { supabase }
from "../../services/supabase";

import StudentDashboard
from "../student/StudentDashboard";

import FacultyDashboard
from "../faculty/FacultyDashboard";

import AdminDashboard
from "../admin/AdminDashboard";

import { logoutUser }
from "../../services/authService";

function Dashboard() {

  const [profile, setProfile] =
    useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } =
      await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

    if (error) {
      console.log(error);
      return;
    }

    setProfile(data);
  };

  const handleLogout = async () => {

    await logoutUser();

    navigate("/login");
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">

        Loading Dashboard...

      </div>
    );
  }

return (
  <div className="flex min-h-screen bg-slate-900 text-white">

    <Sidebar role={profile.role} />

    <div className="flex-1">

      <div className="flex justify-between items-center p-5 border-b border-slate-700">

        <div>

          <h1 className="text-2xl font-bold">
            CuSync
          </h1>

          <p className="text-slate-400">
            {profile.full_name}
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      <div className="p-10">

        {profile.role === "student" &&
          <StudentDashboard />
        }

        {profile.role === "faculty" &&
          <FacultyDashboard />
        }

        {profile.role === "admin" &&
          <AdminDashboard />
        }

      </div>

    </div>

  </div>
);
}

export default Dashboard;