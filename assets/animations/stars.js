const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function estrela(x, y, r, alpha) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
  ctx.fill();
}

let estrelas = [];
for (let i = 0; i < 2000; i++) {
  estrelas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    alpha: Math.random(),
  });
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  estrelas.forEach((e) => {
    e.alpha += (Math.random() - 0.5) * 0.05;
    e.alpha = Math.max(0.1, Math.min(1, e.alpha));
    estrela(e.x, e.y, e.r, e.alpha);
  });
  requestAnimationFrame(animar);
}

animar();
