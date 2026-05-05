// Update date stamp like a camcorder
function updateDateStamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const display = document.getElementById('date-display');
    if (display) {
        display.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(updateDateStamp, 1000);
updateDateStamp();

// Random tracking noise bursts
function triggerTrackingNoise() {
    const noise = document.querySelector('.tracking-noise');
    if (noise) {
        noise.style.opacity = '0.5';
        setTimeout(() => {
            noise.style.opacity = '0';
        }, 200);
    }
    
    // Random next trigger
    setTimeout(triggerTrackingNoise, Math.random() * 10000 + 5000);
}

setTimeout(triggerTrackingNoise, 5000);
