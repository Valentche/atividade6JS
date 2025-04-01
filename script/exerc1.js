//innerHTML: Interpreta tags HTML (se você colocar <b>texto</b>, ele vai aparecer em negrito)

//textContent: Mostra o texto puro (se você colocar <b>texto</b>, vai aparecer exatamente assim, com as tags)

// Exercício 1: Saudação personalizada
function exercicio1() {
  const nome = prompt("Digite seu nome:");
  const resultado = document.getElementById("resultado1");

  if (nome) {
    resultado.innerHTML = `<p>Olá, ${nome}! Seja muito bem-vindo(a)!</p>`;
  } else {
    resultado.innerHTML = "<p>Nenhum nome foi digitado.</p>";
  }
}

//a partir deste ponto esta sendo utilizado direto o !isNaN, onde o isNaN quer dizer "nao é um numero",
//mas com o ! na frente se torna o contrario, perguntando se for um numero faça tal coisa.
//entendi da seguinte forma pelo menos

// Exercício 2: Conversão de temperatura
function exercicio2() {
  const celsius = parseFloat(prompt("Digite um valor em graus Celsius:"));
  const resultado = document.getElementById("resultado2");

  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    resultado.innerHTML = `<p>${celsius}°C = ${fahrenheit.toFixed(2)}°F</p>`;
  } else {
    resultado.innerHTML = "<p>Valor inválido. Digite um número.</p>";
  }
}

//o getElementById esta sendo utilizado para selecionar um elemento especifico no html
//para manipular as respostas na div de resultado feita no arquivo index.html

// Exercício 3: Calculadora simples
function exercicio3() {
  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));
  const resultado = document.getElementById("resultado3");

  if (!isNaN(valor1) && !isNaN(valor2)) {
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao =
      valor2 !== 0 ? valor1 / valor2 : "indefinida (divisão por zero)";

    resultado.innerHTML = `
            <p>Soma: ${valor1} + ${valor2} = ${soma}</p>
            <p>Subtração: ${valor1} - ${valor2} = ${subtracao}</p>
            <p>Multiplicação: ${valor1} × ${valor2} = ${multiplicacao}</p>
            <p>Divisão: ${valor1} ÷ ${valor2} = ${divisao}</p>
        `;
  } else {
    resultado.innerHTML = "<p>Valores inválidos. Digite números.</p>";
  }
}

// Exercício 4: Verificação de maioridade
function exercicio4() {
  const idade = parseInt(prompt("Digite sua idade:"));
  const resultado = document.getElementById("resultado4");

  if (!isNaN(idade)) {
    if (idade >= 18) {
      resultado.innerHTML = `<p>Você tem ${idade} anos e é maior de idade.</p>`;
    } else {
      resultado.innerHTML = `<p>Você tem ${idade} anos e é menor de idade.</p>`;
    }
  } else {
    resultado.innerHTML = "<p>Idade inválida. Digite um número.</p>";
  }
}

// Exercício 5: Cálculo de desconto
function exercicio5() {
  const preco = parseFloat(prompt("Digite o valor do produto:"));
  const desconto = parseFloat(prompt("Digite o percentual de desconto (%):"));
  const resultado = document.getElementById("resultado5");

  if (!isNaN(preco) && !isNaN(desconto)) {
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;

    resultado.innerHTML = `
            <p>Preço original: R$ ${preco.toFixed(2)}</p>
            <p>Desconto: ${desconto}% (R$ ${valorDesconto.toFixed(2)})</p>
            <p>Preço final: R$ ${precoFinal.toFixed(2)}</p>
        `;
  } else {
    resultado.innerHTML = "<p>Valores inválidos. Digite números.</p>";
  }
}

// Exercício 6: Conversão de moedas
function exercicio6() {
  const reais = parseFloat(prompt("Digite o valor em reais (BRL):"));
  const resultado = document.getElementById("resultado6");
  const cotacaoDolar = 5.0; // Cotação fixa: 1 USD = 5.00 BRL

  if (!isNaN(reais)) {
    const dolares = reais / cotacaoDolar;
    resultado.innerHTML = `
            <p>R$ ${reais.toFixed(2)} = US$ ${dolares.toFixed(2)}</p>
            <p>(Cotação: 1 USD = ${cotacaoDolar.toFixed(2)} BRL)</p>
        `;
  } else {
    resultado.innerHTML = "<p>Valor inválido. Digite um número.</p>";
  }
}
