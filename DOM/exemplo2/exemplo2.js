// criar um formulario de IMC

function imc() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  var imc = peso / (altura*altura);
  document.getElementById('result').innerHTML = imc.toFixed(2);
}