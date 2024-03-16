document.addEventListener('DOMContentLoaded', function () {
    const conversionType = document.getElementById('conversionType');
    const temperatureInput = document.getElementById('temperature');
    const convertBtn = document.getElementById('convertBtn');
    const resultOutput = document.getElementById('result');
    convertBtn.addEventListener('click', function () {
        const num = parseInt(conversionType.value);
        const temp = parseFloat(temperatureInput.value);
        let temperature;
        if (num === 1) {
            temperature = (temp - 32) * 5/9;
            resultOutput.textContent = temperature.toFixed(2) + ' Celsius';
        } else if (num === 2) {
            temperature = (temp - 32) * 5/9 + 273.15;
            resultOutput.textContent = temperature.toFixed(2) + ' Kelvin';
        } else if (num === 3) {
            temperature = (temp * 9/5) + 32;
            resultOutput.textContent = temperature.toFixed(2) + ' Fahrenheit';
        } else if (num === 4) {
            temperature = temp + 273.15;
            resultOutput.textContent = temperature.toFixed(2) + ' Kelvin';
        } else if (num === 5) {
            temperature = (temp - 273.15) * 9/5 + 32;
            resultOutput.textContent = temperature.toFixed(2) + ' Fahrenheit';
        } else if (num === 6) {
            temperature = temp - 273.15;
            resultOutput.textContent = temperature.toFixed(2) + ' Celsius';
        } else {
            resultOutput.textContent = 'Not a valid input';
        }
    });
});
