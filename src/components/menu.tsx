import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "px-4 py-1.5 rounded-full bg-green-50 text-green-600 font-semibold text-sm transition-all"
      : "px-4 py-1.5 text-gray-600 hover:text-green-600 font-medium text-sm transition-all";

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between">
      <NavLink to="/" className="flex items-center gap-2 text-green-600 font-bold text-lg">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="2.5" stroke="#16a34a" strokeWidth="1.8" />
          <circle cx="15" cy="5" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
          <circle cx="17" cy="11" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
          <path d="M4 18c0-3 2.5-5 5-5h4c2.5 0 5 2 5 5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        PetHealth Lite
      </NavLink>

      <div className="flex items-center gap-1">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/pacientes" className={linkClass}>Pacientes</NavLink>
        <NavLink to="/consultas" className={linkClass}>Consultas</NavLink>
        <NavLink to="/listagem" className={linkClass}>Listagem</NavLink>
      </div>
    </nav>
  );
}