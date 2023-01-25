let maxFrontGear = 60;
let minFrontGear = 30;
const defaultFronGear = 50;
let maxRearGear = 36;
const defaultRearGear = 15;
let minReartGear = 9;

let gearRatio;
let gearRatioOldSchool;
let gearRatioToOneTurnLength;

let wheeliSizeEl = document.getElementById("wheel-size-input-el");

let frontGearInputListEl = document.getElementById("front-chain-ring-el");
let rearGearInputListEl = document.getElementById("rear-chain-ring-el");
const gearRatioEl = document.getElementById("gear-ratio-el");
const gearRatioOldEl = document.getElementById("gear-ratio-old-el");
const gearRatioOneTurnEl = document.getElementById("gear-ratio-one-turn-el");

const tableEl = document.getElementById("output-table-el");

const formEl = document.querySelectorAll('input[name="gear-choice"]');

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

for (const radioBtn of formEl) {
  radioBtn.addEventListener("change", () => {
    if (radioBtn.checked) {
      tableEl.innerHTML = "";
      renderTable(defaultFronGear, defaultRearGear, 10, 5, radioBtn.value);
    }
  });
}

// get front and rear tooth and calculate gear ratio.
function calculateGearRatio(frontGear, rearGear, wheelSize) {
  // Gear ration = Front tooth / Rear tooth.
  gearRatio = Math.round((frontGear / rearGear) * 100) / 100;

  // convert gear ratio to old school gear ratio. Old school gear ratio = gear ratio * 27.
  gearRatioOldSchool = Math.round(gearRatio * 27 * 100) / 100;

  // convert gear ratio no one one turn of crank length in mm.
  gearRatioToOneTurnLength = Math.round(gearRatio * wheelSize);

  return { gearRatio, gearRatioToOneTurnLength, gearRatioOldSchool };
}

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

function renderTable(
  defaultFronGear,
  defaultRearGear,
  frontGearDif,
  rearGearDif,
  dataChoise
) {
  // делаем итериции по задней передаче и создаём строки

  for (
    let i = defaultRearGear - rearGearDif;
    i < defaultRearGear + rearGearDif;
    i++
  ) {
    // creates a table row
    const row = document.createElement("tr");

    for (
      let j = defaultFronGear - frontGearDif;
      j < defaultFronGear + frontGearDif;
      j++
    ) {
      if (
        i == defaultRearGear - rearGearDif &&
        j == defaultFronGear - frontGearDif
      ) {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(`x`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (i == defaultRearGear - rearGearDif && j > 0) {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(`${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (j == defaultFronGear - frontGearDif && i > 0) {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(`${i}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (
        i > defaultRearGear - rearGearDif &&
        j > defaultFronGear - frontGearDif
      ) {
        const cell = document.createElement("td");
        let gearRatio = calculateGearRatio(j, i, wheeliSizeEl.value);
        const cellText = document.createTextNode(gearRatio[dataChoise]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    // add the row to the end of the table body
    tableEl.appendChild(row);
  }
}

// default render
renderTable(defaultFronGear, defaultRearGear, 10, 6, "gearRatioOldSchool");

renderGearRatio();
