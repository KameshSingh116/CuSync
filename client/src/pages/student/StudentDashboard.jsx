import {
  useEffect,
  useState,
} from "react";

import DashboardCard
from "../../components/dashboard/DashboardCard";

import NoticeBoard
from "../../components/dashboard/NoticeBoard";

import { supabase }
from "../../services/supabase";

function StudentDashboard() {

  const [notices, setNotices] =
    useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {

    const { data, error } =
      await supabase
        .from("notices")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.log(error);
      return;
    }

    setNotices(data);
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <DashboardCard
          title="Attendance"
          value="85%"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Assignments"
          value="4"
          color="bg-green-600"
        />

        <DashboardCard
          title="Notices"
          value={notices.length}
          color="bg-purple-600"
        />

        <DashboardCard
          title="CGPA"
          value="8.5"
          color="bg-orange-600"
        />

      </div>

      <NoticeBoard notices={notices} />

    </div>
  );
}

export default StudentDashboard;