/*
  Crie uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
  * nome;
  * nota da primeira prova;
  * nota da segunda prova;
  
  Depois de criada a lista:
  * Crie uma função que irá calcular a média das notas de cada aluno;
  * Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar
  no concurso e mostre uma mensagem na tela.
*/

const alunos = [
  {
    name: "Júlio",
    notaP1: 6,
    notaP2: 7
  },
  {
    name: "Rafaela",
    notaP1: 9.5,
    notaP2: 8.3
  },
  {
    name: "Pedro",
    notaP1: 6,
    notaP2: 8
  },
  {
    name: "Larissa",
    notaP1: 5,
    notaP2: 7
  }
]

function average(notaP1, notaP2) {
  return ((notaP1 + notaP2) / 2).toFixed(2)
}

function printAverageAluno(aluno){
  if(average >= 7) {
    alert(`A média do(a) aluno(a) ${aluno.name} é: ${average(aluno.notaP1, aluno.notaP2)}
    Parabéns, ${aluno.name}! Você foi aprovado no concurso`)
  }
  else {
    alert(`A média do(a) aluno(a) ${aluno.name} é: ${average(aluno.notaP1, aluno.notaP2)}
    Não foi dessa vez, ${aluno.name}! Tente novamente`)
  } 
}

for(let aluno of alunos) {
  let AVGmessage = printAverageAluno(aluno)
  alert(AVGmessage)
}
