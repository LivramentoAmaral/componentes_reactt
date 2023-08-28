import React from 'react';
import "./style.css"

const estudantes = [
  { nome: 'João', turma: 'A' },
  { nome: 'Maria', turma: 'B' },
  { nome: 'Pedro', turma: 'A' },
  { nome: 'Ana', turma: 'B' },
  { nome: 'Lucas', turma: 'C' },
];
function ClassList({students = estudantes}) {
  const groupByClass = students.reduce((groups, student) => {
    if (!groups[student.turma]) {
      groups[student.turma] = [];
    }
    groups[student.turma].push(student.nome);
    return groups;
  }, {});

  return (
    <div className="class-list">
      {Object.entries(groupByClass).map(([turma, nomes], index) => (
        <div className="class-group" key={index}>
          <h2>Turma {turma}</h2>
          <ul>
            {nomes.map((nome, index) => (
              <li key={index}>{nome}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ClassList;


