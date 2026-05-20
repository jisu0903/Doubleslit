const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const wavelengthSlider = document.getElementById("wavelength");
const slitSlider = document.getElementById("slitDistance");

function drawPattern() {

  const wavelength = Number(wavelengthSlider.value);
  const slitDistance = Number(slitSlider.value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < canvas.width; x++) {

    // 중심 기준 위치
    const dx = x - canvas.width / 2;

    // 간섭 밝기 계산
    const intensity =
      Math.cos(dx * slitDistance * 0.01 / wavelength) ** 2;

    // 밝기 변환
    const brightness = Math.floor(intensity * 255);

    ctx.fillStyle =
      `rgb(${brightness},${brightness},${brightness})`;

    ctx.fillRect(x, 0, 1, canvas.height);
  }
}

wavelengthSlider.addEventListener("input", drawPattern);
slitSlider.addEventListener("input", drawPattern);

drawPattern();
