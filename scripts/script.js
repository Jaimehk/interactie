// JavaScript Document
console.log("Howdy!");

var slider = document.querySelector(".box-slider-1");
var slideSlider = document.querySelector(".slide");
var slider2 = document.querySelector(".box-slider-2");
var slider3 = document.querySelector(".box-slider-3");
var slider4 = document.querySelector(".box-slider-4");
var slider5 = document.querySelector(".box-slider-5");
var slider6 = document.querySelector(".box-slider-6");

// SLIDERS//
slider.addEventListener("click", () => 
slider.classList.toggle("slideSlider"));

slider2.addEventListener("click", () => 
slider2.classList.toggle("slideSlider2"));

slider3.addEventListener("click", () => 
slider3.classList.toggle("slideSlider3"));

slider4.addEventListener("click", () => 
slider4.classList.toggle("slideSlider4"));

slider5.addEventListener("click", () => 
slider5.classList.toggle("slideSlider5"));

slider6.addEventListener("click", () => 
slider6.classList.toggle("slideSlider6"));


// Audio 
const RadarGeluid = document.getElementById('RadarGeluid');
const kaart = document.querySelector('.radar-kaart');

kaart.addEventListener('mouseover', () => {
    // console.log("over");
    RadarGeluid.play();
});

// Pauzeer het MP3-bestand 
kaart.addEventListener('mouseout', () => {
    // console.log("out");
    RadarGeluid.pause();
});





// RED BUTTEN//
var RedButton = document.querySelector(".Red-button");

RedButton.addEventListener("click", NextHelm1);
RedButton.addEventListener("click", NextHelm2);
RedButton.addEventListener("click", NextHelm3);
RedButton.addEventListener("click", NextHelm4);

function NextHelm1() {
    deHelm.src = "images/Phase1.png"; 
}

function NextHelm2() {
    deHelm.src = "images/phase2.png";
}

function NextHelm3() {
    deHelm.src = "images/stormtrooper.png";
}

function NextHelm4() {
    deHelm.src = "images/first-order.png";
}


// VIERKANTEN

var deHelm = document.querySelector(".deHelm");
var helmH2 = document.querySelector(".panel-right h2");
var helmP = document.querySelector(".panel-right p");

var vierkant1 = document.querySelector(".parent .attack .vierkant");
var vierkant2 = document.querySelector(".parent .attack .vierkant2");
var vierkant3 = document.querySelector(".parent .attack .vierkant3");
var vierkant4 = document.querySelector(".parent .attack .vierkant4");


vierkant1.addEventListener("click", goHelm1);
vierkant2.addEventListener("click", goHelm2);
vierkant3.addEventListener("click", goHelm3);
vierkant4.addEventListener("click", goHelm4);

function goHelm1() {
    deHelm.src = "images/Phase1.png";
    helmH2.textContent = "Helmet information Phase 1"; 
    helmP.textContent = "The Phase I clone trooper armor was crafted by Kaminoan armorsmiths specifically for the clone troopers of the Galactic Republic. It consisted of twenty lightweight plastoid-alloy composite plates that were form-fitting to the wearer. These plates were then sealed to a black temperature control bodysuit using magnatomic gription panels. The bodysuit itself was pressurized, which provided temporary protection against the vacuum of space. In addition, the body glove provided protection from extreme temperatures. To denote the military ranks of clone trooper officers, Phase I armor was adorned with splashes of color. This was particularly useful for non-clone officers or clone troopers with damaged or defective helmets. However, this practice eventually fell out of use as the clones began to exhibit more individuality under the influence of the Jedi."
}

function goHelm2() {
    deHelm.src = "images/phase2.png";
    helmH2.textContent = "kop 2";
    helmP.textContent = "fase 2 tekst";
}

function goHelm3() {
    deHelm.src = "images/stormtrooper.png";
    helmH2.textContent = "kop 3";
    helmP.textContent = "fase 3 tekst";
}

function goHelm4() {
    deHelm.src = "images/first-order.png";
    helmH2.textContent = "kop 4";
    helmP.textContent = "fase 4 tekst";
}
