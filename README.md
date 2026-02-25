# 🐾 PetHealth Lite

Sistema simplificado de gestão de clínica veterinária desenvolvido como avaliação prática da disciplina de Metodologias Ágeis — Técnico em Desenvolvimento de Sistemas (RPV 2026).

---

## 📋 Sobre o Projeto

O **PetHealth Lite** é um MVP (Produto Mínimo Viável) para organizar o fluxo básico de atendimento de uma clínica veterinária, permitindo o registro de animais, agendamento de consultas com um veterinário fixo e visualização dos pacientes cadastrados.

---

## 🚀 Tecnologias Utilizadas

- **React** + **TypeScript** (Vite)
- **TailwindCSS** — Estilização
- **React Router Dom** — Roteamento
- **React Hook Form** — Gerenciamento de formulários
- **Zod** + **@hookform/resolvers** — Validação de schemas
- **LocalStorage API** — Persistência de dados

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── menu.tsx          # Navbar global com links ativos
├── pages/
│   ├── home/
│   │   └── index.tsx     # Página inicial com cards de navegação
│   ├── pacientes/
│   │   └── index.tsx     # Cadastro de pets e tutores
│   ├── consultas/
│   │   └── index.tsx     # Agendamento de consultas
│   └── listagem/
│       └── index.tsx     # Tabela de pacientes cadastrados
├── schema/
│   └── schema.ts         # Schemas Zod centralizados
└── App.tsx               # Configuração de rotas
```

---

## 🖥️ Telas do Sistema

| Tela | Rota | Descrição |
|---|---|---|
| Home | `/` | Cards de navegação para as demais seções |
| Pacientes | `/pacientes` | Formulário de cadastro de pet e tutor |
| Consultas | `/consultas` | Agendamento de consulta com médico fixo |
| Listagem | `/listagem` | Tabela com todos os pets cadastrados |

---

## ⚙️ Como Executar

```bash
# Clone o repositório
git clone https://github.com/nicoly-rsousa/PetHealthLite.git

# Acesse a pasta do projeto
cd PetHealthLite

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🗂️ Gestão Ágil

O projeto foi desenvolvido seguindo práticas de metodologias ágeis com o uso do **GitHub Projects (Kanban)** e **Milestones** representando os Sprints.

### Sprints

| Sprint | Tema | Issues |
|---|---|---|
| Sprint 1 | Cadastro de Pacientes | #1 ao #5 |
| Sprint 2 | Fluxo de Consultas | #6 ao #10 |
| Sprint 3 | Navegação e Dashboard | #11 ao #15 |

### Fluxo Kanban
```
Todo → In Progress → Done
```

---

## 💾 Persistência de Dados

Os dados são salvos no **LocalStorage** do navegador nas seguintes chaves:

- `pethealth_pets` — Lista de pets cadastrados
- `pethealth_consultas` — Lista de consultas agendadas

---

## 👩‍⚕️ Médico Fixo

Todas as consultas são automaticamente associadas ao veterinário:

```ts
const MEDICO_FIXO = {
  id: 1,
  nome: "Dr. Silva",
  crmv: "CRMV 12345",
  especialidade: "Clínica Geral Veterinária",
};
```

---

## 👩‍💻 Autoras

Desenvolvido por **Nicoly Rsousa e Mhell Barroca**  
Curso Técnico em Desenvolvimento de Sistemas — RPV 2026

Deploy:https://nicoly-rsousa.github.io/-PetHealthLite-/