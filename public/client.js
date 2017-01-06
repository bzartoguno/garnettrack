// https://cdn.gomix.com/ebe1c119-9c54-49eb-a75e-d64d15f8170a%2FLab01.docx
// https://cdn.gomix.com/ebe1c119-9c54-49eb-a75e-d64d15f8170a%2FLab01.docx

// client-side js
// run by the browser each time your view template is loaded

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
  });

});

function doOnLoad(reader) {
  var success = reader.result.indexOf('TestOut') >= 0;
  if (success) {
    $('.pass').show();
    $('.fail').hide();
  } else {
    $('.pass').hide();
    $('.fail').show();
  }
  showScore();
}

function handleFileSelect() {
  var fi = document.getElementById('fileinput');
  var file = fi.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    doOnLoad(reader, e);
  }
  reader.readAsText(file);
}

function hideScore() {
  $('.scoredlg').hide();
  $('.darkClass').hide();
}

function showScore() {
  $('.scoredlg').show();
  $('.darkClass').show();
}