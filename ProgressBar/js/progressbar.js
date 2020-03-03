let progBarFull = $('#progBarWrap').width();
var progBarVal = 0;

let onePerc = ($('#progBarWrap').width()) / 100;
let threePerc = onePerc * 3;
let sevenPerc = onePerc * 7;
let butCounter = 0;
let onePercValue
let xyz



$('#button1').click(function() {
  if (progBarVal < progBarFull) {
    ;
    progBarVal = onePerc + progBarVal;
    $('#my-progress-bar').width(progBarVal + 'px');
  } else {
    window.alert("Progress Bar is Finally Full!");
    $('#my-progress-bar').width(0 + 'px')
    progBarVal = 0
  }

})

$('#button2').click(function() {
  if (progBarVal < progBarFull) {
    ;
    progBarVal = threePerc + progBarVal;
    $('#my-progress-bar').width(progBarVal + 'px');
  } else {
    window.alert("Progress Bar is Finally Full!");
    $('#my-progress-bar').width(0 + 'px')
    progBarVal = 0
  }

})

$('#button3').click(function() {
  if (progBarVal < progBarFull) {
    ;
    progBarVal = sevenPerc + progBarVal;
    $('#my-progress-bar').width(progBarVal + 'px');
  } else {
    progBarVal = 0
    window.alert("Progress Bar is Finally Full!");
    $('#my-progress-bar').width(0 + 'px')

  }
})
//});
