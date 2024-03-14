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

// Classe voltado pra função dos funcionários
// OBS: coloquei o nome de Cadastro poruqe usei o nome funcionario para uma variável, então não queria calsar confusão no código.
class Cadastro {
  funcionario: FuncionarioCadastrador;
  cidadoes: Cidadao[] = [];

  constructor() {
    this.funcionario = { nome: "Matheus", matricula: 24, cnpj: 999 };
  }

  // Introdução caso escolha o funcionário
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
      case "0":
        start();
        break;
      case "1":
        this.cadastro();
        break;
      case "2":
        this.remove();
        break;
      case "3":
        this.listar();
        break;
      case "4":
        this.verMeusDados();
        break;
      default:
        alert("Valor inválido");
        this.bemvindoFuncionario();
    }
  }

  // Escolha 01
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
      this.cidadoes.push(novoCidadao);
    this.bemvindoFuncionario();
  }
  // Verifica se ta vacinado
  ehVacinado(): boolean {
    const resp = prompt(
      `O cidadão está vacinado? (Digite sim ou não)`
    ).toLowerCase();
    return resp === "sim"; // Retorna true se a resposta for "sim", caso contrário, retorna false
  }
  // Escolha 02
  remove() {
    let list = `Cidadãos cadastrados:\n`;
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
      i += 1;
    });
    let res = parseInt(
      prompt(`
    Qual cadastro você deseja remover?
    ${list}
  `)
    );

    if (res >= 1 && res <= this.cidadoes.length) {
      this.cidadoes = this.cidadoes.filter((_, index) => index !== res - 1);
      alert("Cadastro removido com sucesso!");
    } else {
      alert("Índice inválido. Nenhum cadastro removido.");
    }

    this.bemvindoFuncionario();
  }
  // Escolha 03
  listar() {
    let list = `Cidadãos cadastrados:\n`;
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
      i += 1;
    });
    alert(list);
    this.bemvindoFuncionario();
  }
  // Escolha 04
  verMeusDados() {
    alert(`
      Dados do Funcionário:
      Nome: ${this.funcionario.nome}
      CNPJ: ${this.funcionario.cnpj}
      Matricula: ${this.funcionario.matricula}
    `);
    this.bemvindoFuncionario();
  }
}
// Classe voltada para as funções dos cidadões
// Obs: Eu chamei de pessoa porque no código tinha muitos nomes cidadão e etc.
class Pessoa {
  isCadastrado() {
    let res: any = parseInt(
      prompt(
        `Sejá bem vindo caro cidadão!\nVocê está cadastrado?\n(1) Sim, estou cadastrado.\n(2) Não estou cadastrado.`
      )
    );

    switch (res) {
      case 1:
        this.telaDoCadastrado();
        break;
      case 2:
        this.telaDeCadastro();
        break;
      default:
        alert("Valor inválido");
        this.isCadastrado();
    }
  }

  telaDoCadastrado() {
    let res = parseInt(prompt("Qual o seu CPF?"));
    let verificar: number = 0;
    _cadastro.cidadoes.forEach((cid: Cidadao) => {
      if (cid.cpf == res) {
        alert(
          `Seu cadastro:\nNome: ${cid.nome}\nIdade: ${cid.idade}\nCPF: ${cid.cpf}\nVacinado: ${cid.vacinado}`
        );
        verificar += 1;
        return;
      }
    });
    if (verificar == 0) alert("CPF não encontrado.");
    verificar = 0;
  }

  telaDeCadastro() {
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
      (novoCidadao.vacinado = _cadastro.ehVacinado()),
      _cadastro.cidadoes.push(novoCidadao);
    console.log(_cadastro.cidadoes);
    alert("Parabéns, você foi cadastrado com sucesso!");
    _cadastro.cidadoes.forEach((cid: Cidadao) => {
      console.log(cid);
      if (cid.cpf === novoCidadao.cpf) {
        alert(
          `Seu cadastro:\nNome: ${cid.nome}\nIdade: ${cid.idade}\nCPF: ${cid.cpf}\nVacinado: ${cid.vacinado}`
        );
        return;
      }
    });
  }
}

const btnStart = document.querySelector(".start");
let _cadastro = new Cadastro();
let _pessoa = new Pessoa();

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
    case "2":
      _pessoa.isCadastrado();
      break;
    default:
      alert("O valor digitado foi inválido!");
      start();
  }
}
