"use strict";

var soundLoadingMap = new Map();

var habitablePlanet = new Map();

var soundsLibrary = {
	fluteGiant0: "sounds/G2-flute-0.mp3",
	fluteGiant1: "sounds/G2-flute-1.mp3",

	metalGiant0: "sounds/MetalBarG2-2.mp3",
	metalGiant1: "sounds/MetalBarG2-3.mp3",
	metalGiant2: "sounds/MetalBarG2-4.mp3",

	stringGiant0: "sounds/StringG2-0.mp3",
	stringGiant1: "sounds/StringG2-1.mp3",
	stringGiant2: "sounds/StringG2-2.mp3",

	fluteHuge0: "sounds/D3-flute-0.mp3",
	fluteHuge1: "sounds/D3-flute-1.mp3",

	metalHuge0: "sounds/MetalBarD3-0.mp3",
	metalHuge1: "sounds/MetalBarD3-1.mp3",
	metalHuge2: "sounds/MetalBarD3-2.mp3",
	metalHuge3: "sounds/MetalBarD3-3.mp3",
	metalHuge4: "sounds/MetalBarD3-4.mp3",
	metalHuge5: "sounds/MetalBarD3-5.mp3",

	stringHuge0: "sounds/StringD3-0.mp3",
	stringHuge1: "sounds/StringD3-1.mp3",
	stringHuge2: "sounds/StringD3-2.mp3",
	stringHuge3: "sounds/StringD3-3.mp3",
	stringHuge4: "sounds/StringD3-4.mp3",

	fluteBigPlus0: "sounds/G3-flute-0.mp3",
	fluteBigPlus1: "sounds/G3-flute-1.mp3",
	fluteBigPlus2: "sounds/G3-flute-2.mp3",

	metalBigPlus0: "sounds/MetalBarG3-0.mp3",
	metalBigPlus1: "sounds/MetalBarG3-1.mp3",
	metalBigPlus2: "sounds/MetalBarG3-2.mp3",
	metalBigPlus3: "sounds/MetalBarG3-3.mp3",
	metalBigPlus4: "sounds/MetalBarG3-4.mp3",

	stringBigPlus0: "sounds/StringG3-0.mp3",
	stringBigPlus1: "sounds/StringG3-1.mp3",
	stringBigPlus2: "sounds/StringG3-2.mp3",
	stringBigPlus3: "sounds/StringG3-3.mp3",
	stringBigPlus4: "sounds/StringG3-4.mp3",

	fluteBig0: "sounds/A3-flute-0.mp3",
	fluteBig1: "sounds/A3-flute-1.mp3",

	metalBig0: "sounds/MetalBarA3-0.mp3",
	metalBig1: "sounds/MetalBarA3-1.mp3",
	metalBig2: "sounds/MetalBarA3-2.mp3",
	metalBig3: "sounds/MetalBarA3-3.mp3",
	metalBig4: "sounds/MetalBarA3-4.mp3",

	stringBig0: "sounds/StringA3-0.mp3",
	stringBig1: "sounds/StringA3-1.mp3",
	stringBig2: "sounds/StringA3-2.mp3",
	stringBig3: "sounds/StringA3-3.mp3",
	stringBig4: "sounds/StringA3-4.mp3",

	fluteBigMinus0: "sounds/A3-flute-0.mp3",
	fluteBigMinus1: "sounds/A3-flute-1.mp3",
	fluteBigMinus2: "sounds/A3-flute-2.mp3",

	metalBigMinus0: "sounds/MetalBarD4-0.mp3",
	metalBigMinus1: "sounds/MetalBarD4-1.mp3",
	metalBigMinus2: "sounds/MetalBarD4-2.mp3",
	metalBigMinus3: "sounds/MetalBarD4-3.mp3",
	metalBigMinus4: "sounds/MetalBarD4-4.mp3",

	stringBigMinus0: "sounds/StringD4-0.mp3",
	stringBigMinus1: "sounds/StringD4-1.mp3",
	stringBigMinus2: "sounds/StringD4-2.mp3",
	stringBigMinus3: "sounds/StringD4-3.mp3",
	stringBigMinus4: "sounds/StringD4-4.mp3",

	fluteMediumPlus0: "sounds/G4-flute-0.mp3",
	fluteMediumPlus1: "sounds/G4-flute-1.mp3",
	fluteMediumPlus2: "sounds/G4-flute-2.mp3",

	metalMediumPlus0: "sounds/MetalBarG4-0.mp3",
	metalMediumPlus1: "sounds/MetalBarG4-1.mp3",
	metalMediumPlus2: "sounds/MetalBarG4-2.mp3",
	metalMediumPlus3: "sounds/MetalBarG4-3.mp3",
	metalMediumPlus4: "sounds/MetalBarG4-4.mp3",
	metalMediumPlus5: "sounds/MetalBarG4-5.mp3",

	stringMediumPlus0: "sounds/StringG4-0.mp3",
	stringMediumPlus1: "sounds/StringG4-1.mp3",
	stringMediumPlus2: "sounds/StringG4-2.mp3",
	stringMediumPlus3: "sounds/StringG4-3.mp3",

	fluteMedium0: "sounds/A4-flute-0.mp3",
	fluteMedium1: "sounds/A4-flute-1.mp3",
	fluteMedium2: "sounds/A4-flute-2.mp3",

	metalMedium0: "sounds/MetalBarA4-0.mp3",
	metalMedium1: "sounds/MetalBarA4-1.mp3",
	metalMedium2: "sounds/MetalBarA4-2.mp3",
	metalMedium3: "sounds/MetalBarA4-4.mp3",
	metalMedium4: "sounds/MetalBarA4-4.mp3",
	metalMedium5: "sounds/MetalBarA4-5.mp3",

	stringMedium0: "sounds/StringA4-0.mp3",
	stringMedium1: "sounds/StringA4-1.mp3",
	stringMedium2: "sounds/StringA4-2.mp3",
	stringMedium3: "sounds/StringA4-3.mp3",

	fluteMediumMinus0: "sounds/C5-flute-0.mp3",
	fluteMediumMinus1: "sounds/C5-flute-1.mp3",
	fluteMediumMinus2: "sounds/C5-flute-2.mp3",
	fluteMediumMinus3: "sounds/C5-flute-3.mp3",

	metalMediumMinus0: "sounds/MetalBarC5-0.mp3",
	metalMediumMinus1: "sounds/MetalBarC5-1.mp3",
	metalMediumMinus2: "sounds/MetalBarC5-2.mp3",
	metalMediumMinus3: "sounds/MetalBarC5-4.mp3",
	metalMediumMinus4: "sounds/MetalBarC5-4.mp3",
	metalMediumMinus5: "sounds/MetalBarC5-5.mp3",

	stringMediumMinus0: "sounds/StringC5-0.mp3",
	stringMediumMinus1: "sounds/StringC5-1.mp3",
	stringMediumMinus2: "sounds/StringC5-2.mp3",
	stringMediumMinus3: "sounds/StringC5-3.mp3",

	fluteSmallPlus0: "sounds/G5-flute-0.mp3",
	fluteSmallPlus1: "sounds/G5-flute-1.mp3",
	fluteSmallPlus2: "sounds/G5-flute-2.mp3",
	fluteSmallPlus3: "sounds/G5-flute-3.mp3",

	metalSmallPlus0: "sounds/MetalBarG5-0.mp3",
	metalSmallPlus1: "sounds/MetalBarG5-1.mp3",
	metalSmallPlus2: "sounds/MetalBarG5-2.mp3",
	metalSmallPlus3: "sounds/MetalBarG5-3.mp3",

	stringSmallPlus0: "sounds/StringG5-0.mp3",
	stringSmallPlus1: "sounds/StringG5-1.mp3",
	stringSmallPlus2: "sounds/StringG5-2.mp3",

	fluteSmall0: "sounds/A5-flute-0.mp3",
	fluteSmall1: "sounds/A5-flute-1.mp3",
	fluteSmall2: "sounds/A5-flute-2.mp3",
	fluteSmall3: "sounds/A5-flute-3.mp3",

	metalSmall0: "sounds/MetalBarA5-0.mp3",
	metalSmall1: "sounds/MetalBarA5-1.mp3",
	metalSmall2: "sounds/MetalBarA5-2.mp3",

	stringSmall0: "sounds/StringA5-0.mp3",
	stringSmall1: "sounds/StringA5-1.mp3",
	stringSmall2: "sounds/StringA5-2.mp3",

	fluteSmallMinus0: "sounds/C6-flute-0.mp3",
	fluteSmallMinus1: "sounds/C6-flute-1.mp3",
	fluteSmallMinus2: "sounds/C6-flute-2.mp3",
	fluteSmallMinus3: "sounds/C6-flute-3.mp3",

	metalSmallMinus0: "sounds/MetalBarC6-0.mp3",
	metalSmallMinus1: "sounds/MetalBarC6-1.mp3",
	metalSmallMinus2: "sounds/MetalBarC6-2.mp3",

	stringSmallMinus0: "sounds/StringC6-0.mp3",
	stringSmallMinus1: "sounds/StringC6-1.mp3",

	fluteTiny0: "sounds/D6-flute-0.mp3",
	fluteTiny1: "sounds/D6-flute-1.mp3",
	fluteTiny2: "sounds/D6-flute-2.mp3",
	fluteTiny3: "sounds/D6-flute-3.mp3",

	metalTiny0: "sounds/MetalBarD6-0.mp3",
	metalTiny1: "sounds/MetalBarD6-1.mp3",
	metalTiny2: "sounds/MetalBarD6-2.mp3",

	stringTiny0: "sounds/StringD6-0.mp3",
	stringTiny1: "sounds/StringD6-1.mp3",

	habitable: "sounds/G5-habitable.mp3"
};

var soundLoadingPromise = Promise.resolve();

var visualisationPromise = d3.csv("./src/data.csv").catch((error) => { console.error(error); });

soundLoadingPromise.then(() => {
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	const objKeys = Object.keys(soundsLibrary);
	objKeys.forEach((key) => {
		fetch(soundsLibrary[key])
			.then(response => response.arrayBuffer())
			.then(function(buffer) {
				audioCtx.decodeAudioData(buffer, function (buffer) {
					soundsLibrary[key] = buffer;
				})
			})
			.catch((error) => {
				console.error(error);
				window.alert(`Cannot get the sound ${key} from library.\nScript aborted!`);
			});
	});
}).catch((error) => {
	console.error(error);
});

visualisationPromise.then((data) => {
	const size = 900;  // size of d3 display

	data.forEach((elem) => {
		elem["radius"] = parseFloat(elem["radius"]);
		elem["distance"] = parseFloat(elem["distance"]);
	});

	let colourScale = d3.scaleQuantize()
		.range(["#156b87", "#876315", "#543510", "#872815"]);
	colourScale.domain(d3.extent(data, d => d.radius)); // domain of the scale function is set by each planet's radius
	let radiusRange = d3.scaleQuantize() // try this instead of mouseColor, tied to radius below - doesn't work
		.range(["Tiny", "SmallMinus", "Small", "SmallPlus", "MediumMinus", "Medium", "MediumPlus", "BigMinus", "Big", "BigPlus", "Huge", "Giant"]);
	radiusRange.domain(d3.extent(data, d => d.radius));
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

	let planets = data.filter(d => d.distance === 0);		// if distance is zero parsecs, solar system
	let exoplanets = data.filter(d => d.distance !== 0);   // farther away is exoplanets
	
  	let root = d3.hierarchy({children: [{children: planets}].concat(exoplanets)})
		.sum(function(d) { return d.radius * d.radius; })
		.sort(function(a, b) {
			return !a.children - !b.children
				|| isNaN(a.data.distance) - isNaN(b.data.distance)
				|| a.data.distance - b.data.distance;
		});
	let pack = d3.pack()	// algorithm to make the circle distribution onscreen(?)
		.size([size, size])
		.padding(5);
	pack(root);
	
	let svg = d3.select("#chartContainer")
		.append("svg")
		.attr("width", size)
		.attr("height", size)
		.attr("id", "exoplanets_visualisation");

	svg.node().style.visibility = "hidden";

	svg.selectAll("circle")
		.data(root.descendants().slice(1))
		.enter()
		.append("circle")
			.attr("r", d => d.r)
			.attr("cx", d => d.x)
			.attr("cy", d => d.y)
			.classed("group", d => d.children)
			.filter(d => d.data)
			.style("fill", d => colourScale(d.data.radius))	// use for mouseover
			.on("mouseover" || "touchstart", function(d) { // We have to use traditional function here since we are using "this" keyword
				if (!soundLoadingMap.has(this)) {
					let soundKey = "";
					if (d.data.zone === "Cold") {
						soundKey += "metal";
					} else if (d.data.zone === "Warm") {
						soundKey += "flute";
					} else {
						soundKey += "string"
					}
					soundKey += `${radiusRange(d.data.radius)}`;
					let numberOfSounds = 0;
					for (const prop in soundsLibrary) {
						if (prop.includes(soundKey) && prop.length === soundKey.length + 1) {
							++numberOfSounds;
						}
					}
					soundKey += `${Math.floor(Math.random() * numberOfSounds).toFixed()}`;
					soundLoadingMap.set(this, soundsLibrary[soundKey]);
				}

				let soundSource = audioCtx.createBufferSource();
				soundSource.buffer = soundLoadingMap.get(this);
				soundSource.connect(audioCtx.destination);
				console.log(audioCtx.destination);
				soundSource.start(0);


				if (d.data.habitable !== "non-habitable" && d.data.habitable !== "") {
					let soundSource = audioCtx.createBufferSource();
					soundSource.buffer = soundsLibrary["habitable"];
					soundSource.connect(audioCtx.destination);
					soundSource.start(0);
					if (!habitablePlanet.has(this)) {
						console.log(`You have found a habitable planet!\nThe planet's data is here: `)
						console.log(d.data);
						habitablePlanet.set(this, 1);
					}
				}

				let lightYearDistance = (d.data.distance * 3.26156).toFixed(2);  // convert parsecs to lightyears
				if (d.data.distance !== 0.) {	// keep the Solar System circle from changing color
					d3.select(this).style("fill", d3.hsl(colourScale(d.data.radius)).brighter());
				}

				document.getElementById("displayString").innerHTML = 
					`<p><span id = 'planetName'><strong>${d.data.name}</strong></span><br>
					planet radius: ${d.data.radius} Earth radii <br>
					distance: ${lightYearDistance} light years <br>
					temperature: ${d.data.zone}<br>
					atmosphere: ${d.data["atmosphere"]}<br>
					habitability: ${d.data["habitable"]}</p>`;
			})
			.on("mouseout" || "touchend", function(d) {	// We have to use traditional function here since we are using "this" keyword
				if (d.data.distance !== 0.) { // keep the Solar System circle from changing color
					d3.select(this).style("fill", d => colourScale(d.data.radius))
				}
			})
		
		svg.append("circle")
			.attr("r", `${size / 2}`)
			.attr("cx", `${size / 2}`)
			.attr("cy", `${size / 2}`)
			.attr("stroke", "grey")
			.attr("stroke-width", "2")
			.attr("fill", "none");

}).catch((error) => {
	console.error(error);
});

soundLoadingPromise.then(() => {
	const soundTriggerButton = document.querySelector("button#soundTrigger");
	soundTriggerButton.onclick = function() {
		const audioElement = document.querySelector("audio#soundTrigger");
		audioElement.play();
		let svg = document.querySelector("svg#exoplanets_visualisation");
		svg.style.visibility = "visible";
		soundTriggerButton.style.visibility = "hidden";
	}
}).catch((error) => {
	console.error(error)
});