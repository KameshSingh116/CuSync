function DashboardCard({
  title,
  value,
  color,
}) {

  return (
    <div
      className={`p-6 rounded-2xl ${color} shadow-lg`}
    >

      <h2 className="text-xl font-semibold mb-2">
        {title}
      </h2>

      <p className="text-4xl font-bold">
        {value}
      </p>

    </div>
  );
}

export default DashboardCard;