window.onload = starterWindow;

// variáveis //

const btnClear = document.querySelector('#clear-board');
const btnGenerate = document.querySelector('#generate-board');
const container = document.getElementById('pixel-board'); // para geração do pixel board
const container2 = document.getElementById('color-palette');
const limpaPixel = document.querySelector('#pixel-board');
const btnRandomicColor = document.querySelector('#randomizerColor');
const blackColor = document.querySelector('.black-palette');

let inputDigit = document.querySelector('#board-size');
let valueNumber = parseInt(inputDigit.value);
let pixels = [];
let palette = [];
let bgColorSelect = '';

let randomicColor = [];
let allColor = [];
let color1 = 'rgb(0, 0, 0)';
let color2 = 'rgb(255, 255, 255)';
let color3 = '';
let color4 = '';
let color5 = '';
let color6 = '';
let color7 = '';
let color8 = '';
let color9 = '';
let color10 = '';

cheet('↑ → ↓ ← ↑ → ↓ ←', function () {
  if (palette.length === 11) {
    alert('Você já usou o cheet');
  } else {
    alert('Cheet liberado! Nova cor adicionada!');
    container2.appendChild(createCheetColor());
    palette.push(document.querySelectorAll('.color')[10]);
    palette[10].id = 'color' + 10;
    palette[10].addEventListener('click', selectColorCheet);
  }
});

// função para salvar as cores numa array //

function saveColors() {
  for (let i = 0; i <= 23; i += 1) {
    randomicColor[i] = Math.floor(Math.random() * 255 + 1);
  }
  color3 = 'rgb(' + randomicColor[0] + ', ' + randomicColor[1] + ', ' + randomicColor[2] + ')';
  color4 = 'rgb(' + randomicColor[3] + ', ' + randomicColor[4] + ', ' + randomicColor[5] + ')';
  color5 = 'rgb(' + randomicColor[6] + ', ' + randomicColor[7] + ', ' + randomicColor[8] + ')';
  color6 = 'rgb(' + randomicColor[9] + ', ' + randomicColor[10] + ', ' + randomicColor[11] + ')';
  color7 = 'rgb(' + randomicColor[12] + ', ' + randomicColor[13] + ', ' + randomicColor[14] + ')';
  color8 = 'rgb(' + randomicColor[15] + ', ' + randomicColor[16] + ', ' + randomicColor[17] + ')';
  color9 = 'rgb(' + randomicColor[18] + ', ' + randomicColor[19] + ', ' + randomicColor[20] + ')';
  color10 = 'rgb(' + randomicColor[21] + ', ' + randomicColor[22] + ', ' + randomicColor[23] + ')';
}

// função para randomizar as cores //

function randomizeFirstColors() {
  allColor = [];
  saveColors();
  allColor.push(color1);
  allColor.push(color2);
  allColor.push(color3);
  allColor.push(color4);
  allColor.push(color5);
  allColor.push(color6);
  allColor.push(color7);
  allColor.push(color8);
  allColor.push(color9);
  allColor.push(color10);
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1){
    document.querySelectorAll('.color')[i].style.backgroundColor = allColor[i];
  }
}

// função para o botão randomizar as cores //

function btnRandomicColors() {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }
  starterBlack();
  allColor = [];
  saveColors();
  allColor.push(color1);
  allColor.push(color2);
  allColor.push(color3);
  allColor.push(color4);
  allColor.push(color5);
  allColor.push(color6);
  allColor.push(color7);
  allColor.push(color8);
  allColor.push(color9);
  allColor.push(color10);
  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1){
    document.querySelectorAll('.color')[i].style.backgroundColor = allColor[i];
  }
}

// função para o preto começar selecionado //

function starterBlack() {
  let element = document.querySelector('.black-palette');
  element.className += ' selected';
  let cssObj = window.getComputedStyle(blackColor, null);
  let bgColor = cssObj.getPropertyValue('background-color');

  bgColorSelect = bgColor;
}

// função para dar classe ao pixels //

function namePixelClass() {
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    pixels.push(document.querySelectorAll('.pixel')[i]);
    pixels[i].id = 'px' + i;
  }
  for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
    pixels[i].addEventListener('click', clickPixel);
  }
}

// função de selecionar a cor na paleta //

function selectColor(paletaClicada) {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }

  paletaClicada.target.className += ' selected';
  console.log(paletaClicada.target);

  let cssObj = window.getComputedStyle(paletaClicada.target, null);
  let bgColor = cssObj.getPropertyValue('background-color');

  bgColorSelect = bgColor;
  console.log(bgColorSelect);
}

function selectColorCheet(paletaClicada) {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }

  paletaClicada.target.className += ' selected';
  console.log(paletaClicada.target);

  let bgColor = palette[10].value;

  bgColorSelect = bgColor;
  console.log(bgColorSelect);
}

// criação da paleta de cores dinâmico //

function createPalette() {
  let newDiv = document.createElement('p');
  newDiv.className = 'color';
  return newDiv;
}

function createCheetColor() {
  let newBtn = document.createElement('input');
  newBtn.className = 'color';
  newBtn.type = 'color';
  return newBtn;
}

// colocando a paleta na tela //

function applyPalette() {
  for (let i = 0; i <= 7; i += 1) {
    container2.appendChild(createPalette());
  }
}

// gerar a paleta na tela //

function generatePalette() {
  palette = [];

  applyPalette();

  for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
    palette.push(document.querySelectorAll('.color')[i]);
    palette[i].id = 'color' + i;
  }

    for (let i = 0; i < document.querySelectorAll('.color').length; i += 1) {
      palette[i].addEventListener('click', selectColor);
    }
}

// função que pinta os pixels //

function clickPixel(pixelClicado) {
  if (palette.length === 10) {
    for (let i = 0; i < allColor.length; i += 1) {
      if (bgColorSelect === allColor[i]) {
        pixelClicado.target.style.backgroundColor = allColor[i];
      }
    }
  } else if (palette[10].classList[1] === "selected") {
    pixelClicado.target.style.backgroundColor = palette[10].value;
  } else {
    for (let i = 0; i < allColor.length; i += 1) {
      if (bgColorSelect === allColor[i]) {
        pixelClicado.target.style.backgroundColor = allColor[i];
      }
    }
  }
}

// criação de pixels dinâmico //

function createDivPixels20() {
  let newDiv = document.createElement('div');
  newDiv.className = 'pixel20';
  return newDiv;
}

function createDivPixels30() {
  let newDiv = document.createElement('div');
  newDiv.className = 'pixel30';
  return newDiv;
}

function createDivPixels40() {
  let newDiv = document.createElement('div');
  newDiv.className = 'pixel40';
  return newDiv;
}

function appendPixel20() {
  pixels = [];
  for (let lin = 0; lin < valueNumber; lin += 1) {
    for (let col = 0; col < valueNumber; col += 1) {
      container.appendChild(createDivPixels20());
    }
    let brokeLine = document.createElement('br');
    container.appendChild(brokeLine);
  }
  for (let i = 0; i < document.querySelectorAll('.pixel20').length; i += 1) {
    pixels.push(document.querySelectorAll('.pixel20')[i]);
    pixels[i].id = 'px' + i;
  }
  for (let i = 0; i < document.querySelectorAll('.pixel20').length; i += 1) {
    pixels[i].addEventListener('click', clickPixel);
  }
}

function appendPixel30() {
  pixels = [];
  for (let lin = 0; lin < valueNumber; lin += 1) {
    for (let col = 0; col < valueNumber; col += 1) {
      container.appendChild(createDivPixels30());
    }
    let brokeLine = document.createElement('br');
    container.appendChild(brokeLine);
  }
  for (let i = 0; i < document.querySelectorAll('.pixel30').length; i += 1) {
    pixels.push(document.querySelectorAll('.pixel30')[i]);
    pixels[i].id = 'px' + i;
  }
  for (let i = 0; i < document.querySelectorAll('.pixel30').length; i += 1) {
    pixels[i].addEventListener('click', clickPixel);
  }
}

function appendPixel40() {
  pixels = [];
  for (let lin = 0; lin < valueNumber; lin += 1) {
    for (let col = 0; col < valueNumber; col += 1) {
      container.appendChild(createDivPixels40());
    }
    let brokeLine = document.createElement('br');
    container.appendChild(brokeLine);
  }
  for (let i = 0; i < document.querySelectorAll('.pixel40').length; i += 1) {
    pixels.push(document.querySelectorAll('.pixel40')[i]);
    pixels[i].id = 'px' + i;
  }
  for (let i = 0; i < document.querySelectorAll('.pixel40').length; i += 1) {
    pixels[i].addEventListener('click', clickPixel);
  }
}

// colocando os pixels na tela //

function applyPixels() {
  if (document.querySelector('#board-size').value < 5) {
    document.querySelector('#board-size').value = 5;
    valueNumber = 5;
    alert('Tamanho informado inválido! Mínimo é 5.');
  }
  if (document.querySelector('#board-size').value > 40) {
    valueNumber = 40;
    document.querySelector('#board-size').value = 40;
    alert('Tamanho informado inválido! Máximo é 40.');
  }
  if (valueNumber <= 20) {
    appendPixel40();
  } else if (valueNumber <= 30) {
    appendPixel30();
    } else {
      appendPixel20();
      }
}

// função do botão de gerar os pixels //

function generatePixels() {
  limpaPixel.innerHTML = '';
  pixels = [];
  inputDigit = document.querySelector('#board-size');
  valueNumber = inputDigit.value;
  if (document.querySelector('#board-size').value === '') {
    alert('Tamanho informado inválido!');
    document.querySelector('#board-size').value = 5;
    valueNumber = 5;
  }
  applyPixels();
}

// função para startar o site com as configs //

function starterWindow() {
  generatePalette();
  randomizeFirstColors();
  starterBlack();
  applyPixels();
  namePixelClass();

  document.querySelector('#board-size').value = '';
}

// função para o botão que limpa os pixels //

function clearPixels() {
  for (let i = 0; i < document.querySelectorAll('.pixel20').length; i += 1) {
    document.querySelectorAll('.pixel20')[i].classList.remove('black');
    document.querySelectorAll('.pixel20')[i].style.backgroundColor = '';
  }
  for (let i = 0; i < document.querySelectorAll('.pixel30').length; i += 1) {
    document.querySelectorAll('.pixel30')[i].classList.remove('black');
    document.querySelectorAll('.pixel30')[i].style.backgroundColor = '';
  }
  for (let i = 0; i < document.querySelectorAll('.pixel40').length; i += 1) {
    document.querySelectorAll('.pixel40')[i].classList.remove('black');
    document.querySelectorAll('.pixel40')[i].style.backgroundColor = '';
  }
}

// botão para gerar os pixels com quantidade escolhida pelo usuário //

btnGenerate.addEventListener('click', generatePixels);

// botão para randomizar as cores //

btnRandomicColor.addEventListener('click', btnRandomicColors);

// botão para limpar os pixels //

btnClear.addEventListener('click', clearPixels);