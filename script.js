window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    
       listedPlanetsResponse.then(function (result) {
           listedPlanets = result;
           console.log(listedPlanets);
       }).then(function () {
           console.log(listedPlanets);
           let secPlanet = pickPlanet(listedPlanets);
           console.log(secPlanet.name);
           let addDestination = addDestinationInfo(document, secPlanet.name, secPlanet.diameter, secPlanet.star, secPlanet.distance, secPlanet.moons, secPlanet.image);
           console.log(addDestination);
       })
    
       let form = document.querySelector("form");

    
       form.addEventListener("submit", function(event){
        event.preventDefault();
       let pilot = document.querySelector("input[name=pilotName]").value;
       let copilot = document.querySelector("input[name=copilotName]").value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
       let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel,);
       })

       let list = document.getElementById("faultyItems");
       list.style.visibility = "hidden"; 
    });

    //why is this sooooo hard :( DOM test not passing