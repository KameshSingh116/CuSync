function Sidebar({ role }) {

  return (
    <div className="w-64 min-h-screen bg-slate-800 p-5">

      <h1 className="text-3xl font-bold mb-10">
        CuSync
      </h1>

      <div className="space-y-4">

        <button className="block">
          Dashboard
        </button>

        {role === "student" && (
          <>
            <button className="block">
              Attendance
            </button>

            <button className="block">
              Assignments
            </button>
          </>
        )}

        {role === "faculty" && (
          <>
            <button className="block">
              Manage Students
            </button>

            <button className="block">
              Upload Assignments
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default Sidebar;