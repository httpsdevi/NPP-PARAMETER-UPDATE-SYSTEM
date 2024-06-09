function updateParameters() {
    // Simulate data collection from sensors
    var reactorTemperature = (Math.random() * 150 + 250).toFixed(2); // Between 250 and 400
    var coolantFlowRate = (Math.random() * 50 + 50).toFixed(2); // Between 50 and 100
    var radiationLevel = (Math.random() * 5).toFixed(2); // Between 0 and 5

    // Display parameters
    document.getElementById('parameters').innerHTML = `
        <div class="parameter">
            <span class="label">Reactor Temperature:</span>
            <span class="value">${reactorTemperature} C</span>
        </div>
        <div class="parameter">
            <span class="label">Coolant Flow Rate:</span>
            <span class="value">${coolantFlowRate} L/s</span>
        </div>
        <div class="parameter">
            <span class="label">Radiation Level:</span>
            <span class="value">${radiationLevel} mSv/h</span>
        </div>
    `;

    // Check safety limits
    if (reactorTemperature > 350 || coolantFlowRate < 70 || radiationLevel > 3) {
        alert("ALERT: Safety limits exceeded! Taking corrective action...");
        // Add code for corrective actions here
    }
}

// Update parameters every 2 seconds
setInterval(updateParameters, 2000);
