module.exports = function solveEquation(equation) {
  // your implementation
  let d,a,b,c,x1,x2,arr=[];
  regA=/-?\d+(?=\s\*\sx\^2)/;
  regB=/-?\s\d+(?=\s\*\sx)/;
  regC=/-?\s\d+(?=$)/;
  
  a=parseInt(equation.match(regA).toString().replace(/\s/g,""));
  b=parseInt(equation.match(regB).toString().replace(/\s/g,""));
  c=parseInt(equation.match(regC).toString().replace(/\s/g,""));
  d=b*b-4*a*c;
  x1=Math.round((Math.pow(d,0.5)-b)/(2*a));
  x2=-Math.round((Math.pow(d,0.5)+b)/(2*a));
  arr.push(x1,x2);
  arr.sort((a,b)=>a-b)
  return arr;
}
//console.log(solveEquation('-20 * x^2 - 108797540 * x - 130011773690520'));