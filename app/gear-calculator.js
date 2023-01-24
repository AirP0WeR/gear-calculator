const wheeliSizeEl = document.getElementById("wheel-size-input-el");
const frontGearInputEl = document.getElementById("front-gear-input-el");
const rearGearInputEl = document.getElementById("rear-gear-input-el");
const gearRatioEl = document.getElementById("gear-ratio-el");
const gearRatioOldEl = document.getElementById("gear-ratio-old-el");
const gearRatioOneTurnEl = document.getElementById("gear-ratio-one-turn-el");

let gearRatio;
let gearRatioOldSchool;
let gearRatioToOneTurnLength;

frontGearInputEl.addEventListener("change", () => {
  renderGearRatio();
});

rearGearInputEl.addEventListener("change", () => {
  renderGearRatio();
});

wheeliSizeEl.addEventListener("change", () => {
  renderGearRatio();
});

function renderGearRatio() {
  calculateGearRatio(
    frontGearInputEl.value,
    rearGearInputEl.value,
    wheeliSizeEl.value
  );
  gearRatioEl.innerHTML = `Gear ratio: ${gearRatio}`;
  gearRatioOldEl.innerHTML = `Gear ratio in old school: ${gearRatioOldSchool}`;
  gearRatioOneTurnEl.innerHTML = `Gear ratio in one turn in mm.: ${gearRatioToOneTurnLength}`;
}

// get front and rear tooth and calculate gear ratio.
function calculateGearRatio(frontGear, rearGear, wheelSize) {
  // Gear ration = Front tooth / Rear tooth.
  gearRatio = Math.round((frontGear / rearGear) * 100) / 100;

  // convert gear ratio to old school gear ratio. Old school gear ratio = gear ratio * 27.
  gearRatioOldSchool = Math.round(gearRatio * 27 * 100) / 100;

  // convert gear ratio no one one turn of crank length in mm.
  gearRatioToOneTurnLength = Math.round(gearRatio * wheelSize);

  return gearRatio, gearRatioToOneTurnLength, gearRatioOldSchool;
}
