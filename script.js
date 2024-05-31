function mymessage() {
  var monTexte = "";
  if (document.getElementById("A318").checked){
    monTexte = "VRAI";
  }
  if (document.getElementById("A220").checked){
    monTexte = "FAUX !";
  }
  if (document.getElementById("A380").checked){
    monTexte = "FAUX !";
  }
  if (document.getElementById("A340").checked){
    monTexte = "FAUX !";
  }
  document.getElementById("messageBienvenue").textContent = monTexte;
}

function mymessage2() {
  var monTexte = "";
  if (document.getElementById("A320").checked){
    monTexte2 = "VRAI";
  }
  if (document.getElementById("A400M").checked){
    monTexte2 = "FAUX !";
  }
  if (document.getElementById("A350").checked){
    monTexte2 = "FAUX !";
  }
  if (document.getElementById("A300").checked){
    monTexte2 = "FAUX !";
  }
  document.getElementById("messageBienvenue2").textContent = monTexte2;
}