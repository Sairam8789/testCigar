let content = {
 "cut": {"name" : "Use a straight, two-finger guillotine cutter with curved blades"},
 "smoke":{"name":"Smoke it by drawing air in gently but don't inhale (ever) Cigar smoke is about flavour"},
 "roast":{"name" : "Position them so that they are just on the brink of touching each other"},
 "light":{"name" : "Cigar needs to be rotated under the Lighter’s Flame for all its parts to get heated evenly"},
 "alcohol":{"name" : "A single Malt Especially a Highland single malt is the best partner for this cigar"},
 "beverage" : {"name" : "If coffee is your beverage of choice, espresso would be the ideal pairing"}
}
let forAudioID;

  let audioTwo = document.getElementById("audio-2");
  let cutAudio = document.getElementById("cut-audio");
  let smokeAudio = document.getElementById("smoke-audio");
  let roastAudio= document.getElementById("roast-audio");
  let lightAudio =  document.getElementById("light-audio");
  let alcoholAudio = document.getElementById("alcohol-audio");
  let beverageAudio =  document.getElementById("beverage-audio");
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

document.getElementById("page-1").style.display = "none";
document.getElementById("page-2").style.display = "none";
document.getElementById("page-3").style.display = "none";
document.getElementById("page-4").style.display = "none";
document.getElementById("page-5").style.display = "none";


const timeout = setTimeout(function () {
  window.location.href = "index.html#page-1";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("page-1").style.display = "flex";
  // document.getElementById("audio-1").play();
  window.clearTimeout(timeout);
}, 2000);

function secondId() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-1").style.display = "none";
  document.getElementById("audio-2").play();
}
function thirdId() {
  window.location.href = "index.html#page-3";
  document.getElementById("page-3").style.display = "flex";
  document.getElementById("page-2").style.display = "none";
}
function fourthId() {
  window.location.href = "index.html#page-4";
  document.getElementById("page-4").style.display = "flex";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-5").style.display = "none";
}
function fifthId(id) {
  forAudioID = id;
  window.location.href = "index.html#page-5";
  document.getElementById("page-5").style.display = "flex";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-3").style.display = "none";
  document.getElementById('popUpContainer').style.display = 'block';
  let _C = document.getElementById("contentDisplay");
  _C.innerText = content[id].name; 
  changeModel(id);
  
}
function backToPage2() {
  window.location.href = "index.html#page-1";
  document.getElementById("page-1").style.display = "flex";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("audio-1").pause();
  audioPause();
}
// function backToPage4() {
//   window.location.href = "index.html#page-2";
//   document.getElementById("page-2").classList.remove("hidden");
//   document.getElementById("page-3").classList.add("hidden");

// }
function backToPage3() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";

  document.getElementById("audio-1").pause();
  audioPause();
  logEvent(analytics,'BackTo Main Page Button');
}
function backToPage5() {
  window.location.href = "index.html#page-2";
  document.getElementById("page-2").style.display = "flex";
  document.getElementById("page-5").style.display = "none";
  audioPause();
  logEvent(analytics,'Open Main Page Button');
}
function cigarAudio(){
  document.getElementById("audio-2").play();
}
function playAudio(){
  logEvent(analytics,'AR-Button Clicked');
  if (forAudioID == "cut") document.getElementById("cut-audio").play();
  if (forAudioID == "smoke") document.getElementById("smoke-audio").play();
  if (forAudioID == "roast") document.getElementById("roast-audio").play();
  if (forAudioID == "light") document.getElementById("light-audio").play();
  if (forAudioID == "alcohol") document.getElementById("alcohol-audio").play();
  if (forAudioID == "beverage") document.getElementById("beverage-audio").play();
}
function changeModel(name) {
  const modelViewer = document.getElementById("Cigar");
  const base = "./models/" + name;
  modelViewer.iosSrc === base + ".usdz";
  modelViewer.src = base + ".gltf";
}
function exit() {
  audioPause();
  const _exit = document.querySelector("model-viewer");
  _exit.shadowRoot
    .querySelector(".exit-webxr-ar-button")
    .addEventListener("click", function () {
      backToPage5();
    });
}
function rockyPopWindow(){
  document.getElementById('rockyPopContainer').style.display = 'block';
}
function closePopUp(id){
  audioPause();
  document.getElementById('popUpContainer').style.display = 'none';
  document.getElementById('rockyPopContainer').style.display = 'none';
  if(id == "rockyPopBtn"){
    secondId();
  }else {   
    if (forAudioID == "cut") document.getElementById("cut-audio").play();
    if (forAudioID == "smoke") document.getElementById("smoke-audio").play();
    if (forAudioID == "roast") document.getElementById("roast-audio").play();
    if (forAudioID == "light") document.getElementById("light-audio").play();
    if (forAudioID == "alcohol") document.getElementById("alcohol-audio").play();
    if (forAudioID == "beverage") document.getElementById("beverage-audio").play();
  }
  
}
function audioPause(){
  audioTwo.pause();
  cutAudio.pause();
  smokeAudio.pause();
  roastAudio.pause();
  lightAudio.pause();
  alcoholAudio.pause();
  beverageAudio.pause();
}

