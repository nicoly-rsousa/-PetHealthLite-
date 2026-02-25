import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="2.5" stroke="#16a34a" strokeWidth="1.8" />
        <circle cx="15" cy="5" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
        <circle cx="17" cy="11" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
        <path d="M4 18c0-3 2.5-5 5-5h4c2.5 0 5 2 5 5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Cadastrar Pet",
    description: "Registre novos pets e seus tutores no sistema.",
    route: "/pacientes",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="#16a34a" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 9h18" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14h2m2 0h2M8 17h2" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Agendar Consulta",
    description: "Marque consultas veterinárias para seus pacientes.",
    route: "/consultas",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="#16a34a" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Ver Pacientes",
    description: "Visualize todos os pacientes cadastrados.",
    route: "/listagem",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Bem-vindo ao{" "}
          <span className="text-green-600">PetHealth Lite</span>
        </h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Gerencie seus pacientes e consultas veterinárias de forma simples,
          <br />
          rápida e organizada.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.route)}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-green-500 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}