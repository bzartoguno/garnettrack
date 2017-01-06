function invalidZipFile(zip) {
   alert("The file you uploaded doesn't appear to be a valid document.\nDon't worry, it's tricky!\nCheck your downloads folder or reopen the document and look at where you saved it at.")
}

function testDocumentXml(data) {
  var success = data.indexOf('TestOut') >= 0;
  if (success) {
    $('.pass').show();
    $('.fail').hide();
  } else {
    $('.pass').hide();
    $('.fail').show();
  }
  showScore();
}

function testWordDocument() {
  var fi = document.getElementById('fileinput');
  var zip = new JSZip();
  zip.loadAsync(fi.files[0])
    .then(testZipFile,invalidZipFile);
}

function testZipFile(zip) {
  zip
  .folder("word")
  .file("document.xml")
  .async("string")
  .then(testDocumentXml)
}

