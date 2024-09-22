var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  // Het weghalen van de content op een klik
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }

  // Het laten zien van de content op een klik
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzNmr1dXWOdkDfzBuWfHns1gCuz_ez60TRqW00OINC_KEWjoiScWBfQjEOujb_LQpF2/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    msg.innerHTML = "Bericht succesvol verzonden!";
    msg.style.color = "green"; // Succesmelding in groene tekst
    setTimeout(() => {
      msg.innerHTML = ""; // Wis bericht na een paar seconden
    }, 5000);
    form.reset(); // Reset het formulier na succes
  })
  .catch(error => {
    msg.innerHTML = "Er is iets misgegaan, probeer het later opnieuw!";
    msg.style.color = "red"; // Foutmelding in rode tekst
    console.error('Error!', error.message);
  });
});
