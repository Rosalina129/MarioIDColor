var c = document.getElementById('marioIdPreview');
var ctx = c.getContext("2d")
ctx.fillStyle = "#00ff00"
ctx.fillRect(0, 0, 999, 999)
var start_x = 32;
var start_y = 32;
var bcce = document.querySelector('#backcolorCustom');
var querys = [
    document.querySelector('#hatColor'),
    document.querySelector('#hatColorShadow'),
    document.querySelector('#pantsColor'),
    document.querySelector('#pantsColorShadow'),
    document.querySelector('#hairColor'),
    document.querySelector('#hairColorShadow'),
    document.querySelector('#skinColor'),
    document.querySelector('#skinColorShadow'),
    document.querySelector('#glovesColor'),
    document.querySelector('#glovesColorShadow'),
    document.querySelector('#shoesColor'),
    document.querySelector('#shoesColorShadow'),
]
var canvasPreviewQuerys = [
    document.querySelector('#preview-color-hat'),
    document.querySelector('#preview-color-pants'),
    document.querySelector('#preview-color-hair'),
    document.querySelector('#preview-color-skin'),
    document.querySelector('#preview-color-gloves'),
    document.querySelector('#preview-color-shoes'),
]
colorPreviewExecute()
/*
for (var i = 0; i < cheatColorTemp.length; i++) {
    for (var j = 0; j < cheatColorTemp[i].length; j++){
        console.log(cheatColorTemp[i][j]);
    }
}
*/
function drawPixel(w, h) {
  ctx.fillRect(start_x + w * 20, start_y + h * 20, 20, 20)
}
function copyContent() {
  document.getElementById("GeneratedCode").focus()
  document.getElementById("GeneratedCode").select()
  if (document.execCommand("copy")) {
    bool=true;
    sound[1].play();
    //alert("Successfully copied the code to clipboard.")
  }
  else {
    bool=false;
    sound[4].play();
    //alert("Failed to copy the code to clipboard. Have you got the clipboard premission?")
  }
}
function initColor() {
  run("#ff0000", hatMain.id);
  run("#0000ff", pantsMain.id);
  run("#730600", hairMain.id);
  run("#FEC179", skinMain.id);
  run("#ffffff", glovesMain.id);
  run("#730600", shoesMain.id);
  run("#000000", "face");
  run("#e39d25", "blocks");
}
function changeBackground(a) {
  sound[2].play();
  if (a < 5) {
    ctx.fillStyle = backColor[a];
    ctx.fillRect(0, 0, 999, 999)
  }
  else if (a == 5) {
    console.log(bcce.value);
    ctx.fillStyle = bcce.value;
    ctx.fillRect(0, 0, 999, 999)
  }
  else {
    ctx.clearRect(0, 0, 999, 999)
  }
  run(hatMain.value, hatMain.id);
  run(pantsMain.value, pantsMain.id);
  run(hairMain.value, hairMain.id);
  run(skinMain.value, skinMain.id);
  run(glovesMain.value, glovesMain.id);
  run(shoesMain.value, shoesMain.id);
  run("#000000", "face");
  run("#e39d25", "blocks");
}
function setCheatCode(index) {
  var cheatColorTemp = [
    [hatShadow.value, hairShadow.value, skinShadow.value, glovesShadow.value, pantsShadow.value, shoesShadow.value],
    [hatMain.value, hairMain.value, skinMain.value, glovesMain.value, pantsMain.value, shoesMain.value]]
  var temp_a = ""
  var temp_b = ""
  var temp_c = ""
  var temp_d = ""
  var temp_e = 0
  var temp_f = ""
  var final = ""
  for (var a = 0; a < 6; a++) {
    for (var b = 0; b < 2; b++) {
      temp_a = cheatColorTemp[b][a].slice(1, 7)
      temp_b = temp_a.slice(0, 4)
      temp_c = temp_a.slice(4, 6) + "00"
      temp_d = (memoryAddress[index][temp_e] + 0).toString('16')
      temp_f = (memoryAddress[index][temp_e] + 2).toString('16')
      temp_e++
      final = final + temp_d + " " + temp_b + "\r\n" + temp_f + " " + temp_c + "\r\n";
    }
  }
  return final.toUpperCase();
}
function cheatCodeGenerate(index) {
  sound[0].play();
  document.getElementById("GeneratedCode").value = setCheatCode(index);
}
function run(color, queryID) {
  ctx.fillStyle = color
  for (var h = 0; h < 16; h++) {
    for (var w = 0; w < 12; w++) {
      if (queryID == "hatColor") {
        if (masks.hat[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "pantsColor") {
        if (masks.pants[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "hairColor") {
        if (masks.hair[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "skinColor") {
        if (masks.skin[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "glovesColor") {
        if (masks.gloves[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "shoesColor") {
        if (masks.shoes[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "face") {
        if (masks.face[h][w] == 1) {
          drawPixel(w, h);
        }
      }
      if (queryID == "blocks") {
        if (masks.blocks[h][w] == 1) {
          drawPixel(w, h);
        }
      }
    }
  }
}
initColor()
function colorExecute(queryID) {
  sound[3].play();
  colorPreviewExecute()
  if ((queryID == hatMain) || (queryID == pantsMain) || (queryID == hairMain) || (queryID == skinMain) || (queryID == glovesMain) || (queryID == shoesMain)) {
    run(queryID.value, queryID.id);
  }
}
function colorPreviewExecute() {
    var context = new Array(6);
    var linearGradient = new Array(6);
    for (var i = 0;i < canvasPreviewQuerys.length;i++) {
       context[i] = canvasPreviewQuerys[i].getContext('2d')
       linearGradient[i] = context[i].createLinearGradient(225,0,0,0)
    }
    for (var i = 0;i < canvasPreviewQuerys.length;i++) {
        for (var j = 0;j < 2; j++) {
            linearGradient[i].addColorStop(j,querys[j+i*2].value)
        }
    }
    for (var i = 0;i < canvasPreviewQuerys.length;i++) {
       context[i].fillStyle = linearGradient[i];
       context[i].fillRect(-1,-1,301,301)
    }
    //for (var i = 0; i < querys.length; i++) console.log(querys[i].value);
}