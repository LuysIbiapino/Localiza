class Carro{
    constructor(modelo, placa, ano, cor, quilometragem, valorDiario, observacoes){
        this.modelo = modelo;
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.quilometragem = quilometragem;
        this.valorDiario = valorDiario;
        this.observacoes = observacoes;
    }
}

class Esportivos extends Carro{
    constructor(melhorias, tempo, modelo, placa, ano, cor, quilometragem, valorDiario, observacoes){
        super(modelo, placa, ano, cor, quilometragem, valorDiario, observacoes);
        this.melhorias = melhorias;
        this.tempo = tempo;
    }
}
class Utilitario extends Carro{
    constructor (modelo, placa, ano, cor, quilometragem, valorDiario, observacoes, quantidadePassageiros, tamanhoBagageiros, kmLitros){
        super(modelo, placa, ano, cor, quilometragem, valorDiario, observacoes);
        this.QuantidadePassageiros = quantidadePassageiros;
        this.TamanhoBagageiros =tamanhoBagageiros;
        this.KmLitros = kmLitros;
    }
}
class Reserva{
    constructor(cpfCliente, status, codigo, dataInicio, dataFim){
        this.CpfCliente =cpfCliente;
        this.status = status;
        this.codigo = codigo;
        this.dataInicio =dataInicio;
        this.dataFim =dataFim;
    }
}
class Pessoa{
    constructor(nome, cpf,email, endereco, telefone, idade){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco =endereco;
        this.email = email;
        this.telefone =telefone;
    }    
}
class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, endereco, dataContratacao, salario, quantidadeAlugueisMes= 0, email, telefone, status= false,  ){
        super(nome, cpf,email, endereco, telefone, idade)
        this.dataContratacao =dataContratacao;
        this.salario = salario;
        this.status= status;
        this.quantidadeAlugueis =quantidadeAlugueisMes;
    }
}
class Cliente extends Pessoa{
    constructor(nome, cpf,email, endereco, telefone,idade,dataNascimento,nuCateriraMotorista, fotoCarteira, anoVencimento){
        super(nome, cpf,email, endereco, telefone,idade)
        this.dataNascimento = dataNascimento;
        this.nuCateriraMotorista = nuCateriraMotorista;
        this.FotoCarteira =fotoCarteira;
        this.anoVencimento = anoVencimento;
    }
}
class Promocoes extends Pessoa{
    constructor(dataValidade, descricao, titulo, email){
        super(email);
        this.dataValidade =dataValidade;
        this.descricao = descricao;
        this.titulo = titulo;
    }
}