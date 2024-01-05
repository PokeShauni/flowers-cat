// onload = () => {
//   document.body.webkitRequestFullScreen(); 
//   const c = setTimeout(() => {
//     document.body.classList.remove("not-loaded");
//     clearTimeout(c);
//   }, 1000);
// };




function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  var element = document.getElementById("btn-div");
  element.classList.remove("show");

  setTimeout(() => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    setTimeout(() => {
      showText("#msg", "Quizá la luz se apagó, quizá perdí el rumbo a lo que es tu corazón pero... Se el camino y no me alejare de el Espero nos veamos muy pronto y ser quien anheles con todo tu amor hasta entonces estaré esperándote hasta entonces... Con todo su amor. Poke", 0, 100);   
      setTimeout(() => {
        var elementMain = document.getElementById("main");
        elementMain.classList.add("opacity-div");
        var elementVideo = document.getElementById("myVideo");
        elementVideo.classList.add("show-video");
        var elementText = document.getElementById("msg");
        elementText.classList.add("hidden");

        
        
        document.getElementById('myVideo').play();
      }, 80000);
    }, 3000);
  }, 1000);
  }, 1000);
}

function initAnimation() {
  console.log("aqui");
  openFullscreen();
}


var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


