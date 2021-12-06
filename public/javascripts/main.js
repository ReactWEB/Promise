const choiceElement = document.getElementById('choice_elem');
const url = 'http://127.0.0.1:5000/cabinet';

choiceElement.addEventListener('change', (event) => {
  window.location.replace(`${url}/?q1=${event.target.value}`);
});
const saveChoiceValue = (elem) => {
  return localStorage.setItem(elem.name, elem.value);
};
const loadChoiceValue = (elem) => {
  return localStorage.getItem(elem.name);
};

choiceElement.value = loadChoiceValue(choiceElement);