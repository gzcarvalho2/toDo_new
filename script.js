const novaTarefa = document.querySelector("[data-form-button]");


novaTarefa.addEventListener('click', () => {
    const tarefa = document.querySelector("[data-form-input]")
    const valor = tarefa.value;
    console.log(valor);

});

//=====================================================================================
// EVENTO
// Onde vai acontecer
// Qual evento vai acontecer - click
// O que vai acontecer - fui clicado - Ação => função  

// function somar(num1, num2){
//     console.log(num1+num2)
// }

// // somar(10,10);

// const multiplicar = (num1 , num2) => {
//     console.log(num1*num2);
// }
// multiplicar(10,10);