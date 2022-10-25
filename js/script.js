
function getPrice() {
  const card1 = {
    id: 1,
    name: 'Коптильня 10л',
    price: 1200,
  };
  const card2 = {
    id: 2,
    name: 'Коптильня 20л',
    price: 1400,
  };
  const card3 = {
    id: 3,
    name: 'Коптильня 30л',
    price: 1600,
  };
  const cardArray = [card1, card2, card3];
  const priceSum = document.querySelector('.footer__price-sum');
  const cardBtn = document.querySelectorAll('.cards__button');

  for (let i = 0; i < cardArray.length; i++) {
    cardBtn[i].addEventListener("click", function (e) {
      if (e.target.checked) {
        priceSum.textContent =
          Number(priceSum.textContent) - Number(cardArray[i].price);

      } else {
        priceSum.textContent =
          Number(priceSum.textContent) + Number(cardArray[i].price);

      }

    });

  }
}
getPrice();


const btn = document.querySelector(".cards__button");
const content = document.querySelector(".cards__button-add");

btn.addEventListener("click", btnClick);

function btnClick() {
  if (content.classList.contains("hidden")) {
    btn.textContent = "ДОБАВИТЬ В КОРЗИНУ";
  } else {
    btn.textContent = "ДОБАВЛЕНО";
    btn.disabled = true;
    btn.style.backgroundColor = "#22943C";
  }

}



