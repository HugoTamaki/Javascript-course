var on = false;

function changeLamp() {
  var lamp = document.getElementById('lamp');
  if (!on) {
    lamp.src = '../images/lamp-on.png';
  } else {
    lamp.src = '../images/lamp-off.png';
  }
  on = !on;
}

// parte 2 - fazer um equivalente, mas fazendo a lâmpada acender quando passa o mouse em cima, 
// e apagar quando o mouse não está em cima