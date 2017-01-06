// https://cdn.gomix.com/ebe1c119-9c54-49eb-a75e-d64d15f8170a%2FLab01.docx
// https://cdn.gomix.com/ebe1c119-9c54-49eb-a75e-d64d15f8170a%2FLab01.docx

// client-side js
// run by the browser each time your view template is loaded

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
  });

});

function doDownload() {
  window.URL = window.URL || window.webkitURL;
  
  var xhr = new XMLHttpRequest(),
        a = document.createElement('a'), file;
  
  xhr.open('GET', 'https://cdn.gomix.com/ebe1c119-9c54-49eb-a75e-d64d15f8170a%2FLab01.docx', true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
      file = new Blob([xhr.response], { type : 'application/octet-stream' });
      a.href = window.URL.createObjectURL(file);
      a.download = 'Lab01.docx';  // Set to whatever file name you want
      // Now just click the link you created
      // Note that you may have to append the a element to the body somewhere
      // for this to work in Firefox
      a.click();
  };
  xhr.send();  
}

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
