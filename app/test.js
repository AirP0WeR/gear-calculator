// let table = [];

// // get front and rear tooth and calculate gear ratio.

// function calculateGearRatio(frontGear, rearGear, wheelSize) {
//   // Gear ration = Front tooth / Rear tooth.
//   gearRatio = Math.round((frontGear / rearGear) * 100) / 100;

//   // convert gear ratio to old school gear ratio. Old school gear ratio = gear ratio * 27.
//   gearRatioOldSchool = Math.round(gearRatio * 27 * 100) / 100;

//   // convert gear ratio no one one turn of crank length in mm.
//   gearRatioToOneTurnLength = Math.round(gearRatio * wheelSize);

//   outputObj = {
//     frontGear: frontGear,
//     rearGear: rearGear,
//     gearRatio: gearRatio,
//     gearRatioToOneTurnLength: gearRatioOldSchool,
//     gearRatioOldSchool: gearRatioToOneTurnLength,
//   };

//   return outputObj;
// }

// // console.log(calculateGearRatio(13, 2, 2096));

// const defaultFronGear = 50;
// const defaultRearGear = 15;

// let result = "x ";
// for (var i = defaultRearGear - 2; i < defaultRearGear + 2; i++) {
//   for (var j = defaultFronGear - 3; j < defaultFronGear + 3; j++) {
//     if (i == defaultRearGear - 2 && j > 0) {
//       result += "[" + j + "]";
//     } else if (j == defaultFronGear - 3 && i > 0) {
//       result += "[" + i + "] ";
//     } else if (i > defaultRearGear - 2 && j > defaultFronGear - 3) {
//       result += Math.round((j / i) * 100) / 100 + " ";
//     }
//   }
//   result += "\n";
// }

// console.log(result);
