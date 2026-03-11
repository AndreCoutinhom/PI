var Aranha = /** @class */ (function () {
    function Aranha(nomeDado) {
        this.nome = "";
        this.raça = "Radioativa";
        this.fluido = 50;
        this.nome = nomeDado;
    }
    Aranha.prototype.carregarFluido = function (quantidade) {
        if (typeof quantidade == "number") {
            this.fluido += quantidade;
        }
        else if (quantidade == undefined) {
            this.fluido += 10;
        }
    };
    Aranha.prototype.soltarTeia = function () {
        if (this.fluido > 50) {
            console.log("Compartimento já está cheio.");
        }
        else if (this.fluido == 0) {
            console.log("Precisa carregar o fluido.");
        }
        else {
            console.log("Vai teia!");
        }
        this.fluido -= 10;
    };
    return Aranha;
}());
var miles = new Aranha("Miles Morales");
var gwen = new Aranha("Gwen Stacy");
console.log(miles.nome);
console.log(gwen.nome);
miles.soltarTeia();
miles.soltarTeia();
miles.soltarTeia();
miles.soltarTeia();
miles.soltarTeia();
miles.soltarTeia();
miles.carregarFluido(50);
miles.soltarTeia();
