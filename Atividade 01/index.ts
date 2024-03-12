interface FuncionarioCadastrador {
  nome: string;
  matricula: number;
  cnpj: number;
}
interface Cidadao {
  nome: string;
  idade: number;
  cpf: number;
  vacinado: boolean;
}
class Cadastro {
  funcionario: FuncionarioCadastrador;
  cidadoes: Cidadao[] = [];

  constructor() {
    this.funcionario = { nome: "Matheus", matricula: 24, cnpj: 999 };
  }

  bemvindoFuncionario() {
    const funcionarioWindow = prompt(`
      Olá, ${this.funcionario.nome}, seja bem-vindo de volta!
      O que você deseja fazer?

      1 - Adicionar um novo cadastro de cidadão
      2 - Remover um cadastro de cidadão
      3 - Ver a lista de cidadões cadastrados
      4 - Ver seus dados pessoais
      0 - Sair
    `);
    switch (funcionarioWindow) {
      case "1":
        this.cadastro();
        break;
      case "2":
        this.remove();
        break;
    }
  }

  cadastro() {
    const novoCidadao: Cidadao = {
      nome: "",
      idade: 0,
      cpf: 0,
      vacinado: false,
    };

    (novoCidadao.nome = prompt("Nome do cidadão:")),
      (novoCidadao.idade = parseInt(
        prompt(`Idade do cidadão ${novoCidadao.nome}`)
      )),
      (novoCidadao.cpf = parseInt(
        prompt(
          `CPF do cidadão ${novoCidadao.nome} (sem caracteres especiais, use apenas números sem espaço)`
        )
      )),
      (novoCidadao.vacinado = this.ehVacinado()),
      this.cidadoes.push(novoCidadao); // Adiciona o novo cidadão ao array cidadoes

    console.log(novoCidadao);
    console.log(this.cidadoes);
    this.bemvindoFuncionario();
  }

  ehVacinado(): boolean {
    const resp = prompt(
      `O cidadão está vacinado? (Digite sim ou não)`
    ).toLowerCase();
    return resp === "sim"; // Retorna true se a resposta for "sim", caso contrário, retorna false
  }
  remove() {
    let list = `Planetas:\n`;
    let i = 0;

    this.cidadoes.forEach(() => {
      list += `
      (${i + 1})
      Nome: ${this.cidadoes[i].nome}
      Idade: ${this.cidadoes[i].idade}
      CPF: ${this.cidadoes[i].cpf}
      Vacinado: ${this.cidadoes[i].vacinado}
      --------------------------------------
    `;
     i+=1
    });
    let res = parseInt(prompt(`
    Qual cadastro você deseja remover?
    ${list}
  `))

    this.cidadoes.slice[res]
    this.bemvindoFuncionario()
  }

}

const btnStart = document.querySelector(".start");
let _cadastro = new Cadastro();

btnStart.addEventListener("click", () => {
  start();
});

function start() {
  const start: any = prompt(`
    Sejá bem-vindo!
    Para começarmos, você é um funcionário ou um cidadão?
    - Digite 1 caso você seja um funcionário
    - Digite 2 caso você seja um cidadão
    - Digite 0 caso você deseja sair.
  `);
  switch (start) {
    case "1":
      _cadastro.bemvindoFuncionario();
      break;
    default:
      alert("O valor digitado foi inválido!");
      start();
  }
}
