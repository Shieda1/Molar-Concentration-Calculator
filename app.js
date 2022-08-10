// https://calculator.swiftutors.com/molar-concentration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const molarConcentrationRadio = document.getElementById('molarConcentrationRadio');
const molesSoluteRadio = document.getElementById('molesSoluteRadio');
const literSolutionRadio = document.getElementById('literSolutionRadio');

let molarConcentration;
let molesSolute = v1;
let literSolution = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

molarConcentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Moles Solute (mol)';
  variable2.textContent = 'Liter Solution (L)';
  molesSolute = v1;
  literSolution = v2;
  result.textContent = '';
});

molesSoluteRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Molar Concentration';
  variable2.textContent = 'Liter Solution (L)';
  molarConcentration = v1;
  literSolution = v2;
  result.textContent = '';
});

literSolutionRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Molar Concentration';
  variable2.textContent = 'Moles Solute (mol)';
  molarConcentration = v1;
  molesSolute = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(molarConcentrationRadio.checked)
    result.textContent = `Molar Concentration = ${computeMolarConcentration().toFixed(2)}`;

  else if(molesSoluteRadio.checked)
    result.textContent = `Moles Solute = ${computeMolesSolute().toFixed(2)} mol`;

  else if(literSolutionRadio.checked)
    result.textContent = `Liter Solution = ${computeLiterSolution().toFixed(2)} L`;
})

// calculation

function computeMolarConcentration() {
  return Number(molesSolute.value) / Number(literSolution.value);
}

function computeMolesSolute() {
  return Number(molarConcentration.value) * Number(literSolution.value);
}

function computeLiterSolution() {
  return Number(molesSolute.value) / Number(molarConcentration.value);
}