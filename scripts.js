function showLoveMessage() {
    let messages = [
        "তুমি আমার জীবনের সবচেয়ে মূল্যবান মানুষ!❤️‍🩹",
        "আমি তোমাকে সারাজীবন ভালোবাসবো!❤️‍🩹",
        "তোমার হাসি আমার পৃথিবী আলোকিত করে! 😊",
        "তুমি ছাড়া জীবন কল্পনা করাও অসম্ভব! ❤️"
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("loveMessage").innerText = randomMessage;
}

// Romantic Background Music
let music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Floating Hearts Animation
let canvas = document.getElementById("heartCanvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    let size = Math.random() * 20 + 10;
    let x = Math.random() * canvas.width;
    let y = canvas.height + size;
    let speed = Math.random() * 2 + 1;
    hearts.push({ x, y, size, speed });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
        heart.y -= heart.speed;
        if (heart.y < -heart.size) {
            hearts.splice(index, 1);
        }
    });
}

function animate() {
    createHeart();
    drawHearts();
    requestAnimationFrame(animate);
}

animate();
