const numero = Number(prompt('Digite um número:'));
const numTitulo = document.getElementById('numTitulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML =+ `<p> A raiz quadrada de seu número é: ${numero ** 0.5}.</p>`;
texto.innerHTML =+ `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
texto.innerHTML =+ `<p> É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML =+ `<p> Arrendondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML =+ `<p> Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML =+ `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;
