// console.log("ai sim")

//FUNCTION, NOME, (PARAMETROS) { ESCOPO }
// function somar(){
//     let numa = 1
//     let numb = 20
//     const soma = numa + numb
//     console.log(soma)
// }
// const somar = () => {
//     let numa = 1
//         let numb = 20
//         const soma = numa + numb
//         console.log(soma)
// }
// somar()

// (()=>{
//     console.log("funcao anonima")
// })()
// function somar(numa = 0,numb = 0){
    // let numa = 1
    // let numb = 20
    // const soma = numa + numb
    // return soma
// }
// const numa = prompt("digite um numero")
// const numb = prompt("digite um numero")
// const resultado =  somar(numa,numb)
// console.log(resultado,"resultado")

// function multiplica(numa,numb){
//     return numa*numb
// }
// const resultadoMultiplicacao = multiplica(3,8)
// console.log(resultadoMultiplicacao)
// const listaNumeros =[1,2,4,5,8]
// const resultLista = multiplcaPorTres(listaNumeros,10)

// function multiplcaPorTres(lista=[],multiplcador){
    // console.log(lista,"lista parametro",multiplcador)
    // let aux = []
    // for(let i = 0;i < lista.length; i++){
        // aux.push(lista[i]/multiplcador)
    // }
    // return aux
// }

// console.log(resultLista,"lista")


//Exercício 1

// let valordosalariominimo = parseFloat(prompt("Digite o salário minimo:")).toFixed(2)
// let quantidadedewattsporresidencia = parseFloat(prompt("Digite a quantidade de watts por residencia:")).toFixed(2)
// if(isNaN (valordosalariominimo) || isNaN (quantidadedewattsporresidencia)){
//     alert("Digite um valor numérico!")
// }else{
// function calcularumsetimovalorporwattevalornovocomdesconto(){
// let valorporquilowatt = (valordosalariominimo / 7 ) / quantidadedewattsporresidencia
// let valornovoapagar = quantidadedewattsporresidencia * valorporquilowatt
// let valornovoparapagarcomdesconto = valornovoapagar * 0.9

    

    
// alert(`O valor em reais de cada quilowatt é: R$ ${valorporquilowatt.toFixed(2)}`)
// alert(`O valor novo a pagar sem desconto é de: R$ ${valorapagar.toFixed(2)}`)
// alert(`O valor novo a pagar com desconto é de: R$ ${valornovoparapagarcomdesconto.toFixed(2)}`)
// }
// calcularumsetimovalorporwattevalornovocomdesconto()
// }


//Exercício 2

// let valordoproduto = parseFloat(prompt("Digite o valor do produto")).toFixed(2)
// if(isNaN(valordoproduto)){
//     alert("Insira um valor válido")
// }else{
//     function calculardesconto(){
//         let produtocomdesconto = valordoproduto * 0.91
//         alert(`Seu produto com desconto fica: R$ ${produtocomdesconto}`)
//     }
//     calculardesconto()
// }


//Exercício 3


// function calcularValores() {


//     const qtdFitas = parseInt(prompt("Digite a quantidade de fitas que a locadora possui:"), 10);
//     const valorAluguel = parseFloat(prompt("Digite o valor que a locadora cobra por cada aluguel (R$):"));

//     if (isNaN(qtdFitas) || isNaN(valorAluguel) || qtdFitas <= 0 || valorAluguel <= 0) {
//         alert("Por favor, insira valores válidos!");
//         return;
//     }

//     const fitasAlugadasPorMes = qtdFitas / 3;
//     const faturamentoMensal = fitasAlugadasPorMes * valorAluguel;
//     const faturamentoAnual = faturamentoMensal * 12;

//     const fitasDevolvidasComAtraso = fitasAlugadasPorMes / 10;
//     const multaPorFita = valorAluguel * 0.10;
//     const ganhoComMultasMensal = fitasDevolvidasComAtraso * multaPorFita;

//     const fitasEstragadasAnualmente = qtdFitas * 0.02;
//     const fitasReposicao = qtdFitas / 10;
//     const fitasFinalAno = qtdFitas - fitasEstragadasAnualmente + fitasReposicao;

//     alert(`Faturamento anual da locadora: R$ ${faturamentoAnual.toFixed(2)}\n` +
//         `Valor ganho com multas por mês: R$ ${ganhoComMultasMensal.toFixed(2)}\n` +
//         `Quantidade de fitas no final do ano: ${Math.round(fitasFinalAno)}`);
// }

// calcularValores();


//Exercícios 4

// function inverterNumero() {

//     let numero = prompt("Digite um numero de 3 digitos: ");

//     if (numero.length === 3 &&!isNaN(numero)) {

//         let numeroInvertido = numero.split('').reverse().join('');

//         alert("Número invertido: " + numeroInvertido);

//         } else {

//             alert("Insira um numero valido de 3 digitos");
//         }
//     }

//     inverterNumero();

//Exercícios 5

function calcularDigitoVerificador() {

    let conta = prompt("Digite o número da conta corrente (3 dígitos):");

    if (conta.length === 3) {

        let contaInvertida = conta.split('').reverse().join('');

        let soma = parseInt(conta) + parseInt(contaInvertida);

        let somaPonderada = 0;
        for (let i = 0; i < soma.toString().length; i++) {
            somaPonderada += parseInt(soma.toString()[i]) * (i + 1);
        }

        let digitoVerificador = somaPonderada % 10;

        alert("Dígito verificador: " + digitoVerificador);
    } else {
        alert("Por favor, insira um número de 3 dígitos.");
    }
}

calcularDigitoVerificador();

// a