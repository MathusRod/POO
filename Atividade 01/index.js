var Cadastro = /** @class */ (function () {
    function Cadastro() {
        this.cidadoes = [];
        this.funcionario = { nome: "Matheus", matricula: 24, cnpj: 999 };
    }
    Cadastro.prototype.bemvindoFuncionario = function () {
        var funcionarioWindow = prompt("\n      Ol\u00E1, ".concat(this.funcionario.nome, ", seja bem-vindo de volta!\n      O que voc\u00EA deseja fazer?\n\n      1 - Adicionar um novo cadastro de cidad\u00E3o\n      2 - Remover um cadastro de cidad\u00E3o\n      3 - Ver a lista de cidad\u00F5es cadastrados\n      4 - Ver seus dados pessoais\n      0 - Sair\n    "));
        switch (funcionarioWindow) {
            case "1":
                this.cadastro();
                break;
            case "2":
                this.remove();
                break;
        }
    };
    Cadastro.prototype.cadastro = function () {
        var novoCidadao = {
            nome: "",
            idade: 0,
            cpf: 0,
            vacinado: false
        };
        (novoCidadao.nome = prompt("Nome do cidadão:")),
            (novoCidadao.idade = parseInt(prompt("Idade do cidad\u00E3o ".concat(novoCidadao.nome)))),
            (novoCidadao.cpf = parseInt(prompt("CPF do cidad\u00E3o ".concat(novoCidadao.nome, " (sem caracteres especiais, use apenas n\u00FAmeros sem espa\u00E7o)")))),
            (novoCidadao.vacinado = this.ehVacinado()),
            this.cidadoes.push(novoCidadao); // Adiciona o novo cidadão ao array cidadoes
        console.log(novoCidadao);
        console.log(this.cidadoes);
        this.bemvindoFuncionario();
    };
    Cadastro.prototype.ehVacinado = function () {
        var resp = prompt("O cidad\u00E3o est\u00E1 vacinado? (Digite sim ou n\u00E3o)").toLowerCase();
        return resp === "sim"; // Retorna true se a resposta for "sim", caso contrário, retorna false
    };
    Cadastro.prototype.remove = function () {
        var _this = this;
        var list = "Planetas:\n";
        var i = 0;
        this.cidadoes.forEach(function () {
            list += "\n      (".concat(i + 1, ")\n      Nome: ").concat(_this.cidadoes[i].nome, "\n      Idade: ").concat(_this.cidadoes[i].idade, "\n      CPF: ").concat(_this.cidadoes[i].cpf, "\n      Vacinado: ").concat(_this.cidadoes[i].vacinado, "\n      --------------------------------------\n    ");
            i += 1;
        });
        var res = parseInt(prompt("\n    Qual cadastro voc\u00EA deseja remover?\n    ".concat(list, "\n  ")));
        this.cidadoes.slice[res];
        this.bemvindoFuncionario();
    };
    return Cadastro;
}());
var btnStart = document.querySelector(".start");
var _cadastro = new Cadastro();
btnStart.addEventListener("click", function () {
    start();
});
function start() {
    var start = prompt("\n    Sej\u00E1 bem-vindo!\n    Para come\u00E7armos, voc\u00EA \u00E9 um funcion\u00E1rio ou um cidad\u00E3o?\n    - Digite 1 caso voc\u00EA seja um funcion\u00E1rio\n    - Digite 2 caso voc\u00EA seja um cidad\u00E3o\n    - Digite 0 caso voc\u00EA deseja sair.\n  ");
    switch (start) {
        case "1":
            _cadastro.bemvindoFuncionario();
            break;
        default:
            alert("O valor digitado foi inválido!");
            start();
    }
}
