import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { consultaSchema, type ConsultaFormData } from "../../schema/schema";


const MEDICO_FIXO = {
  id: 1,
  nome: "Dr. Silva",
  crmv: "CRMV 12345",
  especialidade: "Clínica Geral Veterinária",
};

interface Pet {
  id: number;
  nomePet: string;
  especie: string;
  nomeTutor: string;
}

export default function Consultas() {
  const [sucesso, setSucesso] = useState(false);

  const pets: Pet[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("pethealth_pets") || "[]");
    } catch {
      return [];
    }
  })();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultaFormData>({ resolver: zodResolver(consultaSchema) });

  const onSubmit = (data: ConsultaFormData) => {
    const consultas = (() => {
      try {
        return JSON.parse(localStorage.getItem("pethealth_consultas") || "[]");
      } catch {
        return [];
      }
    })();

    consultas.push({
      ...data,
      id: Date.now(),
      medicoId: MEDICO_FIXO.id,
      medicoNome: MEDICO_FIXO.nome,
    });

    localStorage.setItem("pethealth_consultas", JSON.stringify(consultas));
    setSucesso(true);
    reset();
    setTimeout(() => setSucesso(false), 3500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* Card médico fixo */}
      <div className="w-full max-w-2xl bg-green-50 border border-green-100 rounded-2xl px-6 py-4 flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="3.5" stroke="white" strokeWidth="1.8" />
            <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M17 11v4M15 13h4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">{MEDICO_FIXO.nome}</p>
          <p className="text-sm text-gray-500">{MEDICO_FIXO.crmv} · {MEDICO_FIXO.especialidade}</p>
        </div>
      </div>

      {/* Formulário */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="#16a34a" strokeWidth="1.8" />
              <path d="M16 2v4M8 2v4M3 9h18" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M8 14h2m2 0h2M8 17h2" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Agendar Consulta</h2>
          <p className="text-sm text-green-600 mt-1">Selecione o pet e preencha os detalhes da consulta.</p>
        </div>

        {sucesso && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm text-center">
            ✅ Consulta agendada com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pet</label>
            <select
              {...register("petId")}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            >
              <option value="">Selecione o pet</option>
              {pets.length === 0 && <option disabled>Nenhum pet cadastrado</option>}
              {pets.map((pet) => (
                <option key={pet.id} value={String(pet.id)}>
                  {pet.nomePet} — {pet.especie} ({pet.nomeTutor})
                </option>
              ))}
            </select>
            {errors.petId && <p className="text-red-500 text-xs mt-1">{errors.petId.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
              <input
                type="date"
                {...register("data")}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.data && <p className="text-red-500 text-xs mt-1">{errors.data.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
              <input
                type="time"
                {...register("hora")}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.hora && <p className="text-red-500 text-xs mt-1">{errors.hora.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Motivo</label>
            <textarea
              {...register("motivo")}
              rows={4}
              placeholder="Descreva o motivo da consulta..."
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
            {errors.motivo && <p className="text-red-500 text-xs mt-1">{errors.motivo.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors mt-2"
          >
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}