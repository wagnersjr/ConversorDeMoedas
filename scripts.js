const cliqueiNoBotao = document.querySelector(".convert-button");
const SeletorDeMoeda = document.querySelector(".select-coin");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".valor-real"); // valor em real
  const currencyValueConverted = document.querySelector(".valor-convertido"); // outras moedas

  const dolarToday = 6.0;
  const euroToday = 7.0;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (SeletorDeMoeda.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (SeletorDeMoeda.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue/euroToday);
  }
}

cliqueiNoBotao.addEventListener("click", convertValues);
