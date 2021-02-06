// funkcija za pokretanje

function movingObject() {
  animateDiv(".a");
  animateDiv(".b");
  animateDiv(".c");
  animateDiv(".d");
  animateDiv(".e");
  $(".start-game").remove();
  $(".element-holder").show();
  setTimeout(() => {stop();}, 5000);
  setTimeout(() => {timer();}, 5000);
}

function stop() {
  $(".a").stop();
  $(".b").stop();
  $(".c").stop();
  $(".d").stop();
  $(".e").stop();
}

// Funkcija za definisanje pozicije
function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

//funkcija za animaciju
function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000, function () {
    animateDiv(myclass);
  });
}

// funkcija za promenu tajmera i proveru ispravnosti
function timer() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        time=7
      }else{
        time=6
      }    
    var counter = time;
    var interval = setInterval(function () {
      counter--;
      $(".timer-span").text('Timer '+counter +' sekundi');
      if (counter == 0) {
        clearInterval(interval);
        if($('.ap').text() == "POSAO"){
            $('#myModal').modal('show');
        }else{
            location.reload();
        }
      }
    }, 1000);
  }
  

$(document).on("click", ".element-holder div", function () {
    var title = $(this).text();
    $('.ap').append(title);
});