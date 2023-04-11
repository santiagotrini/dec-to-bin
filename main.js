function convert(event) {
  event.preventDefault();
  console.log(event.target.number.value);
  let n = event.target.number.value;
  n = +n;
  let p = document.getElementById('result');
  console.log(p);
  p.innerHTML = n.toString(2);
  event.target.number.value = '';
  // console.log('HOLA estoy enviando el form');
  // let n = event.target
}
