import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../../components/card/card";

import imagemTeste from "../../images/imageTeste.png";

import ambientes from "../../services/ambientes.json";
import turmas from "../../services/turmas.json";
import professores from "../../services/professores.json";
import componentes from "../../services/componentes.json";
import labs from "../../services/horarios.json";
// Definição da interface para os dados dos laboratórios

imagemTeste;

interface Lab {
  lab_name: string;
  imageSala: string;
  aulaHorario: string;
  responsavel: string;
  turma: string;
  componente: string;
}
console.log(imagemTeste, labs, ambientes, professores, componentes);

// Constantes para dados fixos

const diaSemanaTexto = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

// Dados dos laboratórios
//const labs: Lab[] = dataLab;

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const isWithinTimeRange = (
  labTime: string,
  startTime: string,
  endTime: string
): boolean => {
  const [labStartTime, labEndTime] = labTime.split(",")[1].split(" - ");
  const labStart = timeToMinutes(labStartTime);
  const labEnd = timeToMinutes(labEndTime);
  const filterStart = timeToMinutes(startTime);
  const filterEnd = timeToMinutes(endTime);
  return labStart >= filterStart && labEnd <= filterEnd;
};

const filterLabs = (
  labs: Lab[],
  {
    selectedTurma,
    selectedDia,
    startTime,
    endTime,
  }: {
    selectedTurma: string;
    selectedDia: string;
    startTime: string;
    endTime: string;
  }
): Lab[] => {
  const uniqueLabs: { [key: string]: Lab } = {};

  labs.forEach((lab) => {
    const isInTimeRange = isWithinTimeRange(
      lab.aulaHorario,
      startTime,
      endTime
    );
    const diaLab = lab.aulaHorario.split(",")[0].trim();
    const isDiaSelected = !selectedDia || diaLab === selectedDia;

    if (isInTimeRange && isDiaSelected) {
      const key = `${lab.lab_name}-${lab.aulaHorario}`;
      if (!uniqueLabs[key]) {
        uniqueLabs[key] = lab;
      }
    }
  });

  return Object.values(uniqueLabs).filter(
    (lab) => !selectedTurma || lab.turma === selectedTurma
  );
};

const Reserva: React.FC = () => {
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("10:00");
  const [selectedTurma, setSelectedTurma] = useState("");
  const [selectedDia, setSelectedDia] = useState(
    diaSemanaTexto[retornaDataAtual()[1]]
  );

  function retornaDataAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    const diaDaSemana = agora.getDay();

    return [hora, diaDaSemana];
  }
  useEffect(() => {
    const horario = retornaDataAtual()[0];

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

  const filteredLabs = filterLabs(labs, {
    selectedTurma,
    selectedDia,
    startTime,
    endTime,
  });

  const hasFilteredLabs = filteredLabs.length > 0;

  try {
    const cards = document.querySelectorAll(".card");
    let maxHeight = 0;
    cards.forEach((card) => {
      // @ts-ignore
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach((card) => {
      // @ts-ignore
      card.style.height = `${maxHeight}px`;
    });
  } catch (error) {
    console.error("Erro ao definir alturas dos cards:", error);
  }

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
          <div>Turma:</div>
          <select
            value={selectedTurma}
            onChange={(e) => setSelectedTurma(e.target.value)}
          >
            <option value="">Todas</option>
            {turmas.map((turma) => (
              <option key={turma} value={turma}>
                {turma}
              </option>
            ))}
          </select>
        </label>
        <label>
          <div>Dia da Semana:</div>
          <select
            defaultValue={selectedDia}
            onChange={(e) => setSelectedDia(e.target.value)}
          >
            <option value="">Todos</option>
            {diaSemanaTexto.map((dia, index) =>
              dia == diaSemanaTexto[retornaDataAtual()[1]] ? (
                <option key={index} value={dia}>
                  {dia}
                </option>
              ) : (
                <option key={index} value={dia}>
                  {dia}
                </option>
              )
            )}
          </select>
        </label>
      </div>

      <div className="content">
        <h2>Laboratórios e Salas:</h2>
        <div className="turmas-container">
          {selectedTurma && selectedDia ? (
            <div className="turma-column">
              <h3>{selectedTurma}</h3>
              <div className="cards">
                {filteredLabs
                  .filter((lab) => lab.turma === selectedTurma)
                  .map((lab, index) => (
                    <Card
                      key={index}
                      turma={lab.turma}
                      lab_name={lab.lab_name}
                      imageSala={lab.imageSala}
                      aulaHorario={lab.aulaHorario}
                      responsavel={lab.responsavel}
                      componente={lab.componente}
                    />
                  ))}
                {/* Mensagem caso não haja aulas para a turma selecionada */}
                {filteredLabs.filter((lab) => lab.turma === selectedTurma)
                  .length === 0 && (
                  <div className="avisoSala">
                    <p>
                      Não há aulas disponíveis para a turma{" "}
                      <b>{selectedTurma}</b> neste dia e horário.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            turmas.map(
              (turma) =>
                filteredLabs.filter((lab) => lab.turma === turma).length > 0 &&
                hasFilteredLabs && (
                  <div className="turma-column" key={turma}>
                    <h3>{turma}</h3>
                    <div className="cards">
                      {filteredLabs
                        .filter((lab) => lab.turma === turma)
                        .map((lab, index) => (
                          <Card
                            key={index}
                            turma={lab.turma}
                            lab_name={lab.lab_name}
                            imageSala={lab.imageSala}
                            aulaHorario={lab.aulaHorario}
                            responsavel={lab.responsavel}
                            componente={lab.componente}
                          />
                        ))}
                    </div>
                  </div>
                )
            )
          )}

          {/* Mensagem única quando não há laboratórios filtrados */}
          {!hasFilteredLabs && selectedTurma === "" && (
            <div className="avisoSala">
              <p>
                Não há aulas disponíveis para as turmas neste dia e horário.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reserva;
