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
    helmH2.textContent = "Star Wars: Episode II: Attack of the Clones"; 
    helmP.textContent = "De Phase 1-helm heeft een gestroomlijnd ontwerp en biedt de Clone Troopers een hoge mate van bescherming tijdens gevechten. Het gezichtsveld van de helm is groot, wat de troopers een breed zicht op het slagveld geeft. Bovendien is de helm voorzien van filters die schadelijke stoffen uit de lucht filteren en zo de ademhaling van de troopers beschermen. Een ander kenmerk van de Phase 1-helm is de T vizier die over de ogen van de Clone Troopers loopt. Deze vizier is geïnspireerd op de helm van de Mandalorianen en biedt de troopers een beter zicht tijdens gevechten. De helm heeft een ingebouwd communicatiesysteem waarmee troopers kunnen communiceren met hun commandanten en andere troopers op het slagveld. Daarnaast zijn er bevestigingspunten op de helm waar verschillende uitrustingsstukken aan kunnen worden bevestigd, zoals verlichting, wapens en sensoren. Een film later werd hij vervangen door de Phase 2 helmet."
    slider2.classList.toggle("slideSlider2");
}

function goHelm2() {
    deHelm.src = "images/phase2.png";
    helmH2.textContent = "Star Wars: Episode III: Revenge of the Sith";
    helmP.textContent = "De Phase 2-helm lijkt qua ontwerp sterk op de Phase 1-helm, maar heeft enkele belangrijke verbeteringen. De helm een ingebouwde microfoon, zodat troopers gemakkelijker met elkaar en hun commandanten kunnen communiceren. Phase 2-helm is de nieuwe vorm van de Tvizier. In tegenstelling tot de rechte vorm van de vizier in de Phase 1-helm, heeft de Tvizier in de Phase 2-helm een licht gebogen vorm die beter aansluit op de contouren van het gezicht. Dit geeft de troopers meer flexibiliteit in het veld en maakt het mogelijk om snel te schakelen tussen verschillende soorten uitrusting, afhankelijk van de situatie. Aan het einde van de film wordt order 66 gegeven aan de clone troopers, dit zorgt voor een verandering in het balans in the galaxy.";
    slider5.classList.toggle("slideSlider5");
}

function goHelm3() {
    deHelm.src = "images/stormtrooper.png";
    helmH2.textContent = "Episode IV, V, VI";
    helmP.textContent = "Na de val van de Galactic Republic werd de Galactic Empire opgericht. Het keizerlijke leger verving geleidelijk de Clone Troopers door Stormtroopers. Een van de belangrijkste veranderingen in de uitrusting van de Stormtroopers was de introductie van de Stormtrooper-helm. De helm heeft een meer gestroomlijnd uiterlijk met een witte kleur en zwart vizier. Het gezichtsveld van de Stormtrooper-helm is kleiner dan dat van de Phase 2-helm, waardoor de troopers een beperkter zicht hebben op het slagveld. de Stormtrooper-helm is het vocoder-spraakfilter, dat de stem van de drager verandert in een kenmerkend, mechanisch klinkend stemgeluid. Dit zorgde voor eenheid binnen het leger. De helm en het uniform hadden minder flexibiliteit waardoor de stormtroopers in alle opzichte minder voordeel hadden dan de Phase 2 clone troopers. Dit weerspiegelt de verandering in the galaxy. ";
    slider6.classList.toggle("slideSlider6");
}

function goHelm4() {
    deHelm.src = "images/first-order.png";
    helmH2.textContent = "Episode VII, VIII, IX";
    helmP.textContent = "Na de val van het Galactische Keizerrijk in Return of the Jedi, was er een machtsvacuüm in het universum dat de weg vrijmaakte voor verschillende groepen om de controle te proberen over te nemen. In deze tijd ontstond er de First Order, een militante groepering die naar voren kwam uit de overblijfselen van het Keizerrijk. De First Order helm heeft een zwart kleurenschema met een ander ontwerp, met scherpere hoeken en een meer agressieve uitstraling dan de vorige helm. De oogstukken van de helm hebben ook een meer angstaanjagend ontwerp, wat een beangstigend effect heeft op de vijand. De vocoder van de helm is nog angstaanjagender dan die van de storm troopers. De First Order geeft de indruk dat het sterrenstelsel nog meer onderdrukt is en hierdoor nog minder politieke vrijheid is. ";
    slider4.classList.toggle("slideSlider4");
}


// RED BUTTEN// // VIDEO CODE VAN LEONIE WAGNER
var RedButton = document.querySelector(".Red-button");
var video1 = document.querySelector("#video");
var showVid = document.querySelector(".showVideo");

RedButton.addEventListener("click", playVideo);


function playVideo () {
if (video1.paused) {
    video1.play();
    video1.classList.add("playing");
    }
else {
    video1.pause();
    video1.classList.remove("playing");
    }
}



// AUDIO 2
RedButton.addEventListener('mouseover', () => {
    // console.log("over");
    MoveAlong.play();
});

// Pauzeer het MP3-bestand 
RedButton.addEventListener('mouseout', () => {
    // console.log("out");
    MoveAlong.pause();
});

