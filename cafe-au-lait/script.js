(function mouseover() {
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const invlerp = (a, b, v) => clamp((v - a) / (b - a));
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

  window.addEventListener('mousemove', move);
  const width = window.innerWidth;
  const height = window.innerHeight;

  function move({ clientX, clientY }) {
    const x = invlerp(0, width, clientX);
    const y = invlerp(0, height, clientY);

    const xAngle = lerp(-15, 15, x);
    const yAngle = lerp(15, -15, y);
    document.documentElement.style.setProperty('--yAngle', `${xAngle}deg`);
    document.documentElement.style.setProperty('--xAngle', `${yAngle}deg`);
  }
})();
