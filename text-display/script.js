let port;

// Function to connect to the selected serial port
async function connectSerialPort() {
    try {
        const baudRate = 9600; // Set your desired baud rate here
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: parseInt(baudRate) });
        console.log("Connected to serial port with baud rate:", baudRate);
    } catch (error) {
        console.error("Error:", error);
    }
}


async function sendCommand(command) {
    try {
        if (!port) {
            console.error("Serial port not connected");
            return;
        }

        if (!port.writable) {
            console.error("Serial port is not in a valid state");
            return;
        }

        const encoder = new TextEncoder();
        const writer = port.writable.getWriter();
        await writer.write(encoder.encode(command));
        writer.releaseLock();
        console.log("Command sent:", command);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Event listener for the "Connect" button
document.getElementById("connect-button").addEventListener("click", connectSerialPort);

// Event listener for the "Send Command" button
document.getElementById("update-display-button").addEventListener("click", function () {

    const text = document.getElementById("display-text").value;
    command = `updateDisplay("${text}")\r`
    sendCommand(command);
});