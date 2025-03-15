// script.js
function convertTemperature() {
    // Get the input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    // Validate that the input is a number
    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemp;
    let resultUnit;

    // Perform conversion based on the input unit
    switch (unit) {
        case "Celsius":
            // Convert to Fahrenheit and Kelvin
            convertedTemp = (temperature * 9 / 5) + 32;
            resultUnit = "Fahrenheit";
            const kelvinFromCelsius = temperature + 273.15;
            resultElement.textContent = `${convertedTemp.toFixed(2)}°${resultUnit} or ${kelvinFromCelsius.toFixed(2)}K`;
            break;
        case "Fahrenheit":
            // Convert to Celsius and Kelvin
            convertedTemp = (temperature - 32) * 5 / 9;
            resultUnit = "Celsius";
            const kelvinFromFahrenheit = (temperature - 32) * 5 / 9 + 273.15;
            resultElement.textContent = `${convertedTemp.toFixed(2)}°${resultUnit} or ${kelvinFromFahrenheit.toFixed(2)}K`;
            break;
    }
}