// client-side js
// run by the browser each time your view template is loaded

// protip: you can rename this to use .coffee if you prefer

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function () {
    $('form').submit(function (event) {
        event.preventDefault();
    });
});

function clearInputFile(f) {
    if (f.value) {
        try {
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
        } catch (err) {
        }
        if (f.value) { //for IE5 ~ IE10
            var form = document.createElement('form'),
                parentNode = f.parentNode, ref = f.nextSibling;
            form.appendChild(f);
            form.reset();
            parentNode.insertBefore(f, ref);
        }
    }
}

function handleFileSelect() {
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        alert('The File APIs are not fully supported in this browser.');
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        //alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        //alert("Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
        //fr.readAsDataURL(file);
    }
}

function receivedText(e) {
    var txt = fr.result;
    var passed = fr.result.indexOf("TestOut") >= 0;

    if (passed) {
        $(".pass").show();
        $(".fail").hide();
    } else {
        $(".pass").hide();
        $(".fail").show();
    }

    showScore();
    clearInputFile(document.getElementById('fileinput'));
}

function showScore() {
    document.getElementById("darkLayer").style.display = "";
    $(".scoredlg").show();

}

function hideScore() {
    $(".scoredlg").hide();
    document.getElementById("darkLayer").style.display = "none";
}

hideScore();