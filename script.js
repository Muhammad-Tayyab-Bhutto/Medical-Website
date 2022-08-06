
// function([string1, string2],target id,[color1,color2])    
consoleText(['ApnaMD'], 'text',['Clinically Tested AI Diagnostic']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

var c = $("canvas")[0];
var w = c.width;
var h = c.height;
var img = $("img")[0];
setTimeout(function () {
    c.getContext('2d').drawImage(img, 0, 0, w, h);
    $(img).hide();
    $(c).show();
},10000);


let sidemenu = document.getElementById("sidemenu");
function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px";
}
 

