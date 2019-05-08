//w3-school html include script.  https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
//↑↑↑w3-schools HTML include↑↑↑

function pushBtn(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);

    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.innerHTML = '0';

    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;

        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}

//⬇︎⬇︎⬇︎CALCULATOR POPUP START⬇︎⬇︎⬇︎


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var popupOpen=false;
function popupBtnPressed(){
 if (popupOpen) {
   closeForm();
   document.getElementById("calcOpen").innerHTML ="Open Calculator";
 } else {
 openForm();
 document.getElementById("calcOpen").innerHTML ="Close Calculator";
  }
popupOpen=!popupOpen;
}




//⬆︎⬆︎⬆︎CALCULATOR POPUP END⬆︎⬆︎⬆︎
