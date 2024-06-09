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

    // For demonstration purposes, let's log the corrective actions
    console.log("Corrective actions initiated:");

    if (reactorTemperature > 350) {
        console.log("   - Lowering reactor temperature by adjusting control rods.");
        // Code to adjust control rods to lower temperature
    }

    if (coolantFlowRate < 70) {
        console.log("   - Increasing coolant flow rate to prevent overheating.");
        // Code to increase coolant flow rate
    }

    if (radiationLevel > 3) {
        console.log("   - Implementing additional shielding to reduce radiation exposure.");
        // Code to implement additional shielding
    }
}

}

// Update parameters every 2 seconds
setInterval(updateParameters, 2000);
