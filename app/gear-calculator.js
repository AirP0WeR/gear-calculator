let maxFrontGear = 60;
let minFrontGear = 30;
const defaultFronGear = 50;
let maxRearGear = 36;
const defaultRearGear = 15;
let minReartGear = 9;

let frontGear = [];
let rearGear = [];

let outputTable = {
  frontGear: "",
  rearGear: "",
  gearRatio: "",
  gearRatioToOneTurnLength: "",
  gearRatioOldSchool: "",
};

let gearRatio;
let gearRatioOldSchool;
let gearRatioToOneTurnLength;

let wheeliSizeEl = document.getElementById("wheel-size-input-el");

let frontGearInputListEl = document.getElementById("front-chain-ring-el");
let rearGearInputListEl = document.getElementById("rear-chain-ring-el");

// const rearGearInputEl = document.getElementById("rear-gear-input-el");
const gearRatioEl = document.getElementById("gear-ratio-el");
const gearRatioOldEl = document.getElementById("gear-ratio-old-el");
const gearRatioOneTurnEl = document.getElementById("gear-ratio-one-turn-el");

// render front gear input list
for (i = minFrontGear; i < maxFrontGear; i++) {
  let opt = document.createElement("option");

  if (i !== defaultFronGear) {
    opt.value = i;
    opt.innerHTML = i;
    frontGearInputListEl.appendChild(opt);
  } else {
    opt.selected = "selected";
    opt.value = i;
    opt.innerHTML = i;
    frontGearInputListEl.appendChild(opt);
  }
}
// render rear gear input list
for (i = minReartGear; i < maxRearGear; i++) {
  let opt = document.createElement("option");
  if (i !== defaultRearGear) {
    opt.value = i;
    opt.innerHTML = i;
    rearGearInputListEl.appendChild(opt);
  } else {
    opt.selected = "selected";
    opt.value = i;
    opt.innerHTML = i;
    rearGearInputListEl.appendChild(opt);
  }
}

// listen on changes
frontGearInputListEl.addEventListener("change", () => {
  renderGearRatio();
});

rearGearInputListEl.addEventListener("change", () => {
  renderGearRatio();
});

wheeliSizeEl.addEventListener("change", () => {
  renderGearRatio();
});

//render gear ratio
function renderGearRatio() {
  calculateGearRatio(
    frontGearInputListEl.value,
    rearGearInputListEl.value,
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

  // outputTable = {
  //   frontGear: frontGear,
  //   rearGear: rearGear,
  //   gearRatio: gearRatio,
  //   gearRatioToOneTurnLength: gearRatioOldSchool,
  //   gearRatioOldSchool: gearRatioToOneTurnLength,
  // };

  return gearRatio, gearRatioToOneTurnLength, gearRatioOldSchool;
}

// default render
renderGearRatio();
