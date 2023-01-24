const gear = [2,4,6];
const cog = [1,2];
let gearDivide = [];
tableOutput = [];

const multArr = gear / cog;

for (let i = 0; i < gear.length; i++) {
    for (let j = 0; j < cog.length; j++) {
        obj = {
            gear: gear[i],
            cog: cog[j],
            gearDivide: gear[i] / cog[j],
        }
        gearDivide.push(obj);
    }
}
    

gearDivide.JSON = JSON.stringify(gearDivide);
console.log(gearDivide);