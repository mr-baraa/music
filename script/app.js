function profile() {
  var primg = document.getElementById("profile");
  primg.style.display = "block";
}

function arrowBack() {
  var primg = document.getElementById("profile");
  let back = document.getElementById("arrowBack");
  primg.style.display = "none";
}

function cross() {
  var cr = document.getElementById("cross-n");
  var cont = document.getElementById("cont");
  cont.style.display = "none";
  var val = document.getElementById("val");
  val.style.display = "flex";
}

function nof() {
  var primg = document.getElementById("profile");
  var val = document.getElementById("val");

  var nof = document.getElementById("nof");
  var cont = document.getElementById("cont");
  cont.style.display = "block";
  primg.style.display = "none";
  val.style.display = "none";
}

function like() {
  var like = document.querySelectorAll("like-m");
  like.style.display = "none";
}
