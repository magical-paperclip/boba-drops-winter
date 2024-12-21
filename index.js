const canvas = document.getElementById('snowflakes');
const ctx = canvas.getContext('2d');
const snowflakes = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createSnowflake() {
    const size = Math.random() * 5 + 2;
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: -size,
        size: size,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 1 - 0.5
    });
}

function updateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];
        flake.y += flake.speed;
        flake.x += flake.drift;
        if (flake.y > canvas.height || flake.x > canvas.width || flake.x < 0) {
            snowflakes.splice(i, 1);
            i--;
        } else {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }
    }
}

function animate() {
    createSnowflake();
    updateSnowflakes();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();













// Me when