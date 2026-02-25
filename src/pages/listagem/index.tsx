import { useState } from "react";

interface Pet {
  id: number;
  nomePet: string;
  especie: string;
  raca: string;
  nomeTutor: string;
  telefone: string;
}

const especieBadge: Record<string, string> = {
  Cão: "bg-yellow-100 text-yellow-700",
  Gato: "bg-purple-100 text-purple-700",
  Ave: "bg-blue-100 text-blue-700",
  Roedor: "bg-orange-100 text-orange-700",
  Réptil: "bg-green-100 text-green-700",
  Outro: "bg-gray-100 text-gray-600",
};

export default function Listagem() {
  const [busca, setBusca] = useState("");

  const pets: Pet[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("pethealth_pets") || "[]");
    } catch {
      return [];
    }
  })();

  const petsFiltrados = pets.filter((pet) => {
    const termo = busca.toLowerCase();
    return (
      pet.nomePet.toLowerCase().includes(termo) ||
      pet.nomeTutor.toLowerCase().includes(termo) ||
      pet.especie.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-4xl p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="#16a34a" strokeWidth="1.8" />
              <path d="M8 8h8M8 12h8M8 16h5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Pacientes Cadastrados</h2>
        </div>

        {/* Campo de busca */}
        {pets.length > 0 && (
          <div className="relative mb-5">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
            >
              <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="1.8" />
              <path d="M16.5 16.5L21 21" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por nome, tutor ou espécie..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {busca && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                {petsFiltrados.length} resultado{petsFiltrados.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        )}

        {/* Tabela */}
        {pets.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            Nenhum pet cadastrado ainda. <br />
            <span className="text-green-600 font-medium">Cadastre um pet na aba Pacientes.</span>
          </div>
        ) : petsFiltrados.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            Nenhum pet encontrado para <span className="font-medium text-gray-600">"{busca}"</span>.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Nome</th>
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Espécie</th>
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Tutor</th>
                <th className="text-left text-gray-500 font-medium pb-3">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {petsFiltrados.map((pet) => (
                <tr key={pet.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-gray-900">{pet.nomePet}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        especieBadge[pet.especie] ?? especieBadge["Outro"]
                      }`}
                    >
                      {pet.especie}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-gray-600">{pet.nomeTutor}</td>
                  <td className="py-3 text-gray-600">{pet.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}