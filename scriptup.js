document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const unit = document.getElementById('unit').value;
    const value = document.getElementById('value').value;
    const highAlarm = document.getElementById('highAlarm').value;
    const lowAlarm = document.getElementById('lowAlarm').value;

    // Display updated values
    document.getElementById('displayArea').innerHTML = `
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>Unit: ${unit}</p>
        <p>Value: ${value}</p>
        <p>High Alarm: ${highAlarm}</p>
        <p>Low Alarm: ${lowAlarm}</p>
    `;
});
