// Classe voltado pra função dos funcionários
// OBS: coloquei o nome de Cadastro poruqe usei o nome funcionario para uma variável, então não queria calsar confusão no código.
var Cadastro = /** @class */ (function () {
    function Cadastro() {
        this.cidadoes = [];
        this.funcionario = { nome: "Matheus", matricula: 24, cnpj: 999 };
    }
    // Introdução caso escolha o funcionário
    Cadastro.prototype.bemvindoFuncionario = function () {
        var funcionarioWindow = prompt("\n      Ol\u00E1, ".concat(this.funcionario.nome, ", seja bem-vindo de volta!\n      O que voc\u00EA deseja fazer?\n\n      1 - Adicionar um novo cadastro de cidad\u00E3o\n      2 - Remover um cadastro de cidad\u00E3o\n      3 - Ver a lista de cidad\u00F5es cadastrados\n      4 - Ver seus dados pessoais\n      0 - Sair\n    "));
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
    };
    // Escolha 01
    Cadastro.prototype.cadastro = function () {
        var novoCidadao = {
            nome: "",
            idade: 0,
            cpf: 0,
            vacinado: false,
        };
        (novoCidadao.nome = prompt("Nome do cidadão:")),
            (novoCidadao.idade = parseInt(prompt("Idade do cidad\u00E3o ".concat(novoCidadao.nome)))),
            (novoCidadao.cpf = parseInt(prompt("CPF do cidad\u00E3o ".concat(novoCidadao.nome, " (sem caracteres especiais, use apenas n\u00FAmeros sem espa\u00E7o)")))),
            (novoCidadao.vacinado = this.ehVacinado()),
            this.cidadoes.push(novoCidadao);
        this.bemvindoFuncionario();
    };
    // Verifica se ta vacinado
    Cadastro.prototype.ehVacinado = function () {
        var resp = prompt("O cidad\u00E3o est\u00E1 vacinado? (Digite sim ou n\u00E3o)").toLowerCase();
        return resp === "sim"; // Retorna true se a resposta for "sim", caso contrário, retorna false
    };
    // Escolha 02
    Cadastro.prototype.remove = function () {
        var _this = this;
        var list = "Cidad\u00E3os cadastrados:\n";
        var i = 0;
        this.cidadoes.forEach(function () {
            list += "\n      (".concat(i + 1, ")\n      Nome: ").concat(_this.cidadoes[i].nome, "\n      Idade: ").concat(_this.cidadoes[i].idade, "\n      CPF: ").concat(_this.cidadoes[i].cpf, "\n      Vacinado: ").concat(_this.cidadoes[i].vacinado, "\n      --------------------------------------\n    ");
            i += 1;
        });
        var res = parseInt(prompt("\n    Qual cadastro voc\u00EA deseja remover?\n    ".concat(list, "\n  ")));
        if (res >= 1 && res <= this.cidadoes.length) {
            this.cidadoes = this.cidadoes.filter(function (_, index) { return index !== res - 1; });
            alert("Cadastro removido com sucesso!");
        }
        else {
            alert("Índice inválido. Nenhum cadastro removido.");
        }
        this.bemvindoFuncionario();
    };
    // Escolha 03
    Cadastro.prototype.listar = function () {
        var _this = this;
        var list = "Cidad\u00E3os cadastrados:\n";
        var i = 0;
        this.cidadoes.forEach(function () {
            list += "\n      (".concat(i + 1, ")\n      Nome: ").concat(_this.cidadoes[i].nome, "\n      Idade: ").concat(_this.cidadoes[i].idade, "\n      CPF: ").concat(_this.cidadoes[i].cpf, "\n      Vacinado: ").concat(_this.cidadoes[i].vacinado, "\n      --------------------------------------\n    ");
            i += 1;
        });
        alert(list);
        this.bemvindoFuncionario();
    };
    // Escolha 04
    Cadastro.prototype.verMeusDados = function () {
        alert("\n      Dados do Funcion\u00E1rio:\n      Nome: ".concat(this.funcionario.nome, "\n      CNPJ: ").concat(this.funcionario.cnpj, "\n      Matricula: ").concat(this.funcionario.matricula, "\n    "));
        this.bemvindoFuncionario();
    };
    return Cadastro;
}());
// Classe voltada para as funções dos cidadões
// Obs: Eu chamei de pessoa porque no código tinha muitos nomes cidadão e etc.
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.isCadastrado = function () {
        var res = parseInt(prompt("Sej\u00E1 bem vindo caro cidad\u00E3o!\nVoc\u00EA est\u00E1 cadastrado?\n(1) Sim, estou cadastrado.\n(2) N\u00E3o estou cadastrado."));
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
    };
    Pessoa.prototype.telaDoCadastrado = function () {
        var res = parseInt(prompt("Qual o seu CPF?"));
        var verificar = 0;
        _cadastro.cidadoes.forEach(function (cid) {
            if (cid.cpf == res) {
                alert("Seu cadastro:\nNome: ".concat(cid.nome, "\nIdade: ").concat(cid.idade, "\nCPF: ").concat(cid.cpf, "\nVacinado: ").concat(cid.vacinado));
                verificar += 1;
                return;
            }
        });
        if (verificar == 0)
            alert("CPF não encontrado.");
        verificar = 0;
    };
    Pessoa.prototype.telaDeCadastro = function () {
        var novoCidadao = {
            nome: "",
            idade: 0,
            cpf: 0,
            vacinado: false,
        };
        (novoCidadao.nome = prompt("Nome do cidadão:")),
            (novoCidadao.idade = parseInt(prompt("Idade do cidad\u00E3o ".concat(novoCidadao.nome)))),
            (novoCidadao.cpf = parseInt(prompt("CPF do cidad\u00E3o ".concat(novoCidadao.nome, " (sem caracteres especiais, use apenas n\u00FAmeros sem espa\u00E7o)")))),
            (novoCidadao.vacinado = _cadastro.ehVacinado()),
            _cadastro.cidadoes.push(novoCidadao);
        console.log(_cadastro.cidadoes);
        alert("Parabéns, você foi cadastrado com sucesso!");
        _cadastro.cidadoes.forEach(function (cid) {
            console.log(cid);
            if (cid.cpf === novoCidadao.cpf) {
                alert("Seu cadastro:\nNome: ".concat(cid.nome, "\nIdade: ").concat(cid.idade, "\nCPF: ").concat(cid.cpf, "\nVacinado: ").concat(cid.vacinado));
                return;
            }
        });
    };
    return Pessoa;
}());
var btnStart = document.querySelector(".start");
var _cadastro = new Cadastro();
var _pessoa = new Pessoa();
btnStart.addEventListener("click", function () {
    start();
});
function start() {
    var start = prompt("\n    Sej\u00E1 bem-vindo!\n    Para come\u00E7armos, voc\u00EA \u00E9 um funcion\u00E1rio ou um cidad\u00E3o?\n    - Digite 1 caso voc\u00EA seja um funcion\u00E1rio\n    - Digite 2 caso voc\u00EA seja um cidad\u00E3o\n    - Digite 0 caso voc\u00EA deseja sair.\n  ");
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
