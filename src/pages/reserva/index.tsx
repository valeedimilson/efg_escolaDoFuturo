import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../../components/card/card";

import imagemTeste from "../../images/imageTeste.png";

// Definição da interface para os dados dos laboratórios
interface Lab {
  lab_name: string;
  imageSala: string;
  aulaHorario: string;
  responsavel: string;
  turma: string;
  componente: string;
}

// Constantes para dados fixos
const ambientes = [
  "Sala 01", "Sala 02", "Sala 03", "Sala 04", "Sala 05",
  "Sala 06", "Sala 07", "Sala 08", "Sala 09", "Sala 10",
  "Sala 11", "Sala 12", "Laboratório de Informática",
  "Laboratório E-Sports", "Laboratório de Robótica",
  "Laboratório de Eletrônica", "Laboratório de Tec. de Automação",
  "Laboratório de Economia Criativa", "Inove Lab.", "Coworking",
  "Auditório", "Quadra Poliesportiva"
];
// 0 - "Sala 01", 1 - "Sala 02", 2 - "Sala 03", 3 - "Sala 04", 4 - "Sala 05",
// 5 - "Sala 06", 6 - "Sala 07", 7 - "Sala 08", 8 - "Sala 09", 9 - "Sala 10",
// 10 - "Sala 11", 11 - "Sala 12", 12 - "Laboratório de Informática",
// 13 - "Laboratório E-Sports", 14 - "Laboratório de Robótica",
// 15 - "Laboratório de Eletrônica", 16 - "Laboratório de Tec. de Automação",
// 17 - "Laboratório de Economia Criativa", 18 - "Inove Lab.", 19 - "Coworking",
// 20 - "Auditório", 21 - "Quadra Poliesportiva"
const turmas = [
  "1° ano A", "1° ano B", "1° ano C", "1° ano D",
  "2° ano A", "2° ano B", "2° ano C",
  "3° ano A", "3° ano B"
];
// 0 - "1° ano A", 1 - "1° ano B", 2 - "1° ano C", 3 - "1° ano D",
// 4 - "2° ano A", 5 - "2° ano B", 6 - "2° ano C",
// 7 - "3° ano A", 8 - "3° ano B"
const professores = [
  "Dev Johnattan", "Maurizio", "Edgar", "Juliana", 
  "Emily", "Karla", "Dionísio"
];
  // 0 - "Dev Johnattan", 1 - "Maurizio", 2 - "Edgar", 3 - "Juliana", 
  // 4 - "Emily", 5 - "Karla", 6 - "Dionísio"
const componentes = [
  "FRONT-END", "UI E UX", "PROJ. INTEG.", 
  "TEC. LOG. SOC.", "PRAT. PROFISSIONAL"
];
// 0 - "FRONT-END", 1 - "UI E UX", 2 - "PROJ. INTEG.", 
//  3- "TEC. LOG. SOC.", 4 - "PRAT. PROFISSIONAL"
const diaSemanaTexto = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

// Dados dos laboratórios
const labs: Lab[] = [
  {
    lab_name: ambientes[12],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 13:25 - 15:05",
    responsavel: professores[0],
    turma: turmas[0],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[11],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 15:20 - 16:10",
    responsavel: professores[3],
    turma: turmas[0],
    componente: componentes[4],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 16:10 - 17:00",
    responsavel: professores[4],
    turma: turmas[0],
    componente: componentes[1],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 13:25 - 14:15",
    responsavel: professores[4],
    turma: turmas[0],
    componente: componentes[3],
  },
  {
    lab_name: ambientes[12],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 14:15 - 16:10",
    responsavel: professores[0],
    turma: turmas[0],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[11],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 14:15 - 16:10",
    responsavel: professores[3],
    turma: turmas[0],
    componente: componentes[4],
  },
  {
    lab_name: ambientes[12],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 13:25 - 16:10",
    responsavel: professores[0],
    turma: turmas[0],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[12],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 16:10 - 17:00",
    responsavel: professores[6],
    turma: turmas[0],
    componente: componentes[2],
  },
  {
    lab_name: ambientes[11],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 13:25 - 14:15",
    responsavel: professores[3],
    turma: turmas[1],
    componente: componentes[4],
  },
  {
    lab_name: ambientes[13],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 14:15 - 17:00",
    responsavel: professores[1],
    turma: turmas[1],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[11],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 08:25 - 14:15",
    responsavel: professores[3],
    turma: turmas[1],
    componente: componentes[4],
  },
  {
    lab_name: ambientes[0],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 14:15 - 15:05",
    responsavel: professores[6],
    turma: turmas[1],
    componente: componentes[2],
  },
  {
    lab_name: ambientes[13],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 15:20 - 17:00",
    responsavel: professores[1],
    turma: turmas[1],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[13],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 13:25 - 15:05",
    responsavel: professores[1],
    turma: turmas[1],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 15:20 - 16:10",
    responsavel: professores[4],
    turma: turmas[1],
    componente: componentes[3],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 15:20 - 16:10",
    responsavel: professores[4],
    turma: turmas[1],
    componente: componentes[1],
  },
  {
    lab_name: ambientes[9],
    imageSala: imagemTeste,
    aulaHorario: "SEG, 13:25 - 17:00",
    responsavel: professores[2],
    turma: turmas[2],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[9],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 13:25 - 15:05",
    responsavel: professores[2],
    turma: turmas[2],
    componente: componentes[0],
  },
  {
    lab_name: ambientes[5],
    imageSala: imagemTeste,
    aulaHorario: "QUA, 15:20 - 17:00",
    responsavel: professores[5],
    turma: turmas[2],
    componente: componentes[4],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 13:25 - 14:15",
    responsavel: professores[4],
    turma: turmas[2],
    componente: componentes[1],
  },
  {
    lab_name: ambientes[15],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 14:15 - 15:05",
    responsavel: professores[4],
    turma: turmas[2],
    componente: componentes[1],
  },
  {
    lab_name: ambientes[0],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 15:20 - 16:10",
    responsavel: professores[6],
    turma: turmas[2],
    componente: componentes[2],
  },
  {
    lab_name: ambientes[12],
    imageSala: imagemTeste,
    aulaHorario: "QUI, 16:10 - 17:00",
    responsavel: professores[0],
    turma: turmas[2],
    componente: componentes[0],
  }
];

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const isWithinTimeRange = (labTime: string, startTime: string, endTime: string): boolean => {
  const [labStartTime, labEndTime] = labTime.split(",")[1].split(" - ");
  const labStart = timeToMinutes(labStartTime);
  const labEnd = timeToMinutes(labEndTime);
  const filterStart = timeToMinutes(startTime);
  const filterEnd = timeToMinutes(endTime);
  return labStart >= filterStart && labEnd <= filterEnd;
};

const filterLabs = (
  labs: Lab[],
  { selectedTurma, selectedDia, startTime, endTime }: { selectedTurma: string; selectedDia: string; startTime: string; endTime: string }
): Lab[] => {
  const uniqueLabs: { [key: string]: Lab } = {};

  labs.forEach((lab) => {
    const isInTimeRange = isWithinTimeRange(lab.aulaHorario, startTime, endTime);
    const diaLab = lab.aulaHorario.split(",")[0].trim(); // Remove espaços em branco
    const isDiaSelected = !selectedDia || diaLab === selectedDia;

    if (isInTimeRange && isDiaSelected) {
      const key = `${lab.lab_name}-${lab.aulaHorario}`; // Chave única para lab e horário
      if (!uniqueLabs[key]) {
        uniqueLabs[key] = lab; // Adiciona ao uniqueLabs se ainda não estiver presente
      }
    }
  });

  return Object.values(uniqueLabs).filter((lab) => !selectedTurma || lab.turma === selectedTurma);
};

const Reserva: React.FC = () => {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("10:00");
  const [selectedTurma, setSelectedTurma] = useState("");
  const [selectedDia, setSelectedDia] = useState("");

  useEffect(() => {
    const agora = new Date();
    const horario = agora.getHours();
    // const minutos = agora.getMinutes();

    if (horario < 12) {
      setStartTime("07:00");
      setEndTime("12:59");
    } else if (horario < 18) {
      setStartTime("12:00");
      setEndTime("17:59");
    } else {
      setStartTime("18:00");
      setEndTime("23:59");
    }
  }, []);

  const filteredLabs = filterLabs(labs, { selectedTurma, selectedDia, startTime, endTime });

  return (
    <div className="container">
      <div className="filter">
        <label>
          Início:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <label>
          Fim:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <label>
          Turma:
          <select value={selectedTurma} onChange={(e) => setSelectedTurma(e.target.value)}>
            <option value="">Todas</option>
            {turmas.map((turma) => (
              <option key={turma} value={turma}>{turma}</option>
            ))}
          </select>
        </label>
        <label>
          Dia da Semana:
          <select value={selectedDia} onChange={(e) => setSelectedDia(e.target.value)}>
            <option value="">Todos</option>
            {diaSemanaTexto.map((dia, index) => (
              <option key={index} value={dia}>{dia}</option>
            ))}
          </select>
        </label>
      </div>
 
      <div className="content">
        <h2>Laboratórios e Salas:</h2>
        <div className="cards">
          {filteredLabs.map((lab, index) => (
            <Card
              key={index}
              lab_name={lab.lab_name}
              imageSala={lab.imageSala}
              aulaHorario={lab.aulaHorario}
              responsavel={lab.responsavel}
              turma={lab.turma}
              componente={lab.componente}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Reserva;