

let select = document.querySelector("#select");

for (let i = 1; i <= 10; i++) {
  let option = document.createElement("option");
  option.textContent = i;
  option.value = i;
  select.appendChild(option);
}

let calcular = document.querySelector("#calcular");

calcular.addEventListener("click", (e) => {
  e.preventDefault();
  let resultado = document.querySelector("#resultado");

  let start = 0
  let end = 10

  while (start < end) {
    start ++
    let p = document.createElement("p");
    p.textContent = `${select.value} x ${start} = ${start * select.value}`;
    resultado.appendChild(p);
  }
});