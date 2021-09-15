// Fetch destination information
fetch('data/data.json')
    .then(response => {
        if (!response.ok) {
            throw Error('ERROR');
        }
        return response.json();
    })
    .then(data => {
        let getUrl = window.location.href;
        let destinationIndex;

        if (getUrl.includes("barcelona")){
            destinationIndex = 0
        } else if (getUrl.includes("paris")){
            destinationIndex = 1
        } else if (getUrl.includes("rom")){
            destinationIndex = 2
        }

        let destinationInfo = data.destinations[destinationIndex];

        document.querySelector('#destinationInfoOutput').textContent = destinationInfo.destinationName + ' är en populär destination i ' + destinationInfo.destinationCountry + '. Det är just nu ' + destinationInfo.destinationTemperature + ' och ' + destinationInfo.destinationWeather + '.';

    })
    .catch(error => {
        console.log(error);
    });
