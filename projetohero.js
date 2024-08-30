class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let tipo_de_ataque ={
            guerreiro: "usando espada",
            mago: "usando magia",
            monge: "usando artes marciais",
            ninja: "usando shuriken"
        }

        let ataque = tipo_de_ataque[this.tipo];
        console.log(`O ${this.tipo} ${this.nome} atacou ${ataque}`)
    }

        
}

let batalha = new hero("jj",19,"monge");

batalha.atacar();