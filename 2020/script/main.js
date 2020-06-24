var fields = [
  ['d2Voornaam', 'd2Naam', 'd2Geboortedatum'],
  ['d3Voornaam', 'd3Naam', 'd3Geboortedatum'],
  ['d4Voornaam', 'd4Naam', 'd4Geboortedatum']
];
var labels = ['Voornaam', 'Naam', 'Geboortedatum'];
const setDatePicker = id => {
  new Pikaday({
    field: document.getElementById(id),
    format: 'dd-mm-YYYY',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    maxDate: new Date(),
    yearRange: 100,
    firstDay: 1
  });
};
const showField = () => {
  let extra = document.querySelector('#extra');
  let childrenLenght = extra.children.length;
  if (childrenLenght === 3) {
    return;
  }
  let node = document.createElement('fieldset');
  let legend = document.createElement('legend');
  legend.textContent = `Deelnemer ${childrenLenght === 0 ? '2' : childrenLenght + 2}`;
  node.appendChild(legend);
  for (let i in fields) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'textbox-300');
    input.setAttribute('name', fields[childrenLenght][i]);
    input.setAttribute('placeholder', labels[i]);
    input.setAttribute('required', true);
    input.setAttribute('id', fields[childrenLenght][i]);
    div.appendChild(input);
    node.appendChild(div);
  }
  extra.appendChild(node);
  setDatePicker(fields[childrenLenght][2]);
};
const removeField = () => {
  let extra = document.querySelector('#extra');
  if (extra.children.length > 0) {
    extra.removeChild(extra.lastChild);
  }
};
const init = () => {
  setDatePicker('datepicker');
  document.getElementById('btnAdd').addEventListener('click', showField);
  document.getElementById('btnRemove').addEventListener('click', removeField);
};
document.addEventListener('DOMContentLoaded', init);
