import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { petSchema, type PetFormData } from "../../schema/schema";

export default function Pacientes() {
  const [sucesso, setSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PetFormData>({ resolver: zodResolver(petSchema) });

  const onSubmit = (data: PetFormData) => {
    const pets: PetFormData[] = (() => {
      try {
        return JSON.parse(localStorage.getItem("pethealth_pets") || "[]");
      } catch {
        return [];
      }
    })();

    pets.push({ ...data, id: Date.now() } as PetFormData & { id: number });
    localStorage.setItem("pethealth_pets", JSON.stringify(pets));
    setSucesso(true);
    reset();
    setTimeout(() => setSucesso(false), 3500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="7" r="2.5" stroke="#16a34a" strokeWidth="1.8" />
              <circle cx="15" cy="5" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
              <circle cx="17" cy="11" r="1.8" stroke="#16a34a" strokeWidth="1.8" />
              <path d="M4 18c0-3 2.5-5 5-5h4c2.5 0 5 2 5 5" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Cadastrar Pet</h2>
          <p className="text-sm text-gray-500 mt-1">Preencha os dados do pet e seu tutor.</p>
        </div>

        {sucesso && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm text-center">
            ✅ Pet cadastrado com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Pet</label>
            <input
              {...register("nomePet")}
              placeholder="Ex: Rex"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {errors.nomePet && <p className="text-red-500 text-xs mt-1">{errors.nomePet.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Espécie</label>
            <select
              {...register("especie")}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
            >
              <option value="">Selecione</option>
              <option value="Cão">Cão</option>
              <option value="Gato">Gato</option>
              <option value="Ave">Ave</option>
              <option value="Roedor">Roedor</option>
              <option value="Réptil">Réptil</option>
              <option value="Outro">Outro</option>
            </select>
            {errors.especie && <p className="text-red-500 text-xs mt-1">{errors.especie.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Raça</label>
            <input
              {...register("raca")}
              placeholder="Ex: Labrador"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {errors.raca && <p className="text-red-500 text-xs mt-1">{errors.raca.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Tutor</label>
            <input
              {...register("nomeTutor")}
              placeholder="Ex: João Silva"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {errors.nomeTutor && <p className="text-red-500 text-xs mt-1">{errors.nomeTutor.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input
              {...register("telefone")}
              placeholder="Ex: (11) 99999-9999"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors mt-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}