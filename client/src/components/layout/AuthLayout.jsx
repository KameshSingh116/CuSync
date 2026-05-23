function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-2xl">

        {children}

      </div>
    </div>
  );
}

export default AuthLayout;