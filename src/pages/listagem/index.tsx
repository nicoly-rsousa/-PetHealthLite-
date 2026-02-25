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
  const pets: Pet[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("pethealth_pets") || "[]");
    } catch {
      return [];
    }
  })();

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-3xl p-8">
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

        {/* Tabela */}
        {pets.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            Nenhum pet cadastrado ainda. <br />
            <span className="text-green-600 font-medium">Cadastre um pet na aba Pacientes.</span>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Nome</th>
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Espécie</th>
                <th className="text-left text-gray-500 font-medium pb-3 pr-4">Tutor</th>
                <th className="text-left text-gray-500 font-medium pb-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => (
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
                  <td className="py-3">
                    <button className="border border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-600 text-xs px-3 py-1.5 rounded-lg transition-colors">
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}