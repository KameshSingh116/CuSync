function NoticeBoard({ notices }) {

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-5">
        Latest Notices
      </h2>

      <div className="space-y-4">

        {notices.map((notice) => (

          <div
            key={notice.id}
            className="bg-slate-700 p-4 rounded-lg"
          >

            <h3 className="font-bold">
              {notice.title}
            </h3>

            <p className="text-slate-300">
              {notice.content}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NoticeBoard;