let outputTable = {};

// get front and rear tooth and calculate gear ratio.

function calculateGearRatio(frontGear, rearGear, wheelSize) {
  // Gear ration = Front tooth / Rear tooth.
  gearRatio = Math.round((frontGear / rearGear) * 100) / 100;

  // convert gear ratio to old school gear ratio. Old school gear ratio = gear ratio * 27.
  gearRatioOldSchool = Math.round(gearRatio * 27 * 100) / 100;

  // convert gear ratio no one one turn of crank length in mm.
  gearRatioToOneTurnLength = Math.round(gearRatio * wheelSize);

  outputTable = {
    frontGear: frontGear,
    rearGear: rearGear,
    gearRatio: gearRatio,
    gearRatioToOneTurnLength: gearRatioOldSchool,
    gearRatioOldSchool: gearRatioToOneTurnLength,
  };

  return gearRatio, gearRatioToOneTurnLength, gearRatioOldSchool, outputTable;
}
for (i = 0; i < 100; i++) {
  calculateGearRatio(i, i, 2096);
  output.push(outputTable);
}

console.log(output);
