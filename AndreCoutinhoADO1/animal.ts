class Aranha {
    nome: string = "";
    raça: string = "Radioativa";
    fluido: number = 50;

    constructor(nomeDado) {
        this.nome = nomeDado;
    }

    carregarFluido(quantidade) {
        if (typeof quantidade == "number") {
            this.fluido += quantidade;
        } else if (quantidade == undefined) {
            this.fluido += 10;
        }
    }

    soltarTeia() {
        if (this.fluido > 50) {
            console.log("Compartimento já está cheio.");
        } else if (this.fluido == 0) {
            console.log("Precisa carregar o fluido.");
        } else {
            console.log("Vai teia!");
        }
        this.fluido -= 10;
    }

}

const miles = new Aranha("Miles Morales");
const gwen = new Aranha("Gwen Stacy");

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
