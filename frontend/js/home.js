/* js/home.js */
(function() {
  'use strict';

  /* ── Canvas Particles (lightweight) ── */
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Dot {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.15);
      this.a  = Math.random() * 0.5 + 0.15;
      this.da = 0.0015 + Math.random() * 0.001;
    }
    step() {
      this.x += this.vx;
      this.y += this.vy;
      this.a -= this.da;
      if (this.a <= 0 || this.y < -10) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(121,107,216,${this.a})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(55, Math.floor(W / 22));
    for (let i = 0; i < count; i++) particles.push(new Dot());
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.step(); p.draw(); });
    raf = requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => { resize(); }, { passive: true });
  init();
  tick();

  /* ── Typing effect ── */
  const phrases = [
    'with AI ✦',
    'in seconds.',
    'beautifully.',
    'for free.',
  ];
  const el = document.getElementById('typed');
  if (!el) return;
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1600); return; }
      setTimeout(type, 72);
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
      setTimeout(type, 36);
    }
  }
  setTimeout(type, 600);

  /* ── Scroll-triggered fade-up ── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
})();