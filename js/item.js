let begItem;

onLoad();
function onLoad(){
  let begItemStr = localStorage.getItem('begItem');
  begItem=begItemStr?JSON.parse(begItemStr):[];

  countBegItem();
  displayBagItem(".womans_item",items);
  displayBagItem(".man_item",itemsMan);
}

function addBegItem(itemId) {
  begItem.push(itemId);
  countBegItem();
  localStorage.setItem("begItem",JSON.stringify(begItem));
}
function countBegItem() {
  let countbegElement = document.querySelector(".count");
  if (begItem.length > 0) {
    countbegElement.style.visibility = "visible";
    countbegElement.innerText = begItem.length;
  } else {
    countbegElement.style.visibility = "hidden";
  }
}

function displayBagItem(seltor,arry) {
  let cartItem = document.querySelector(`${seltor}`);
  let innerHTML = "";
  arry.map((item) => {
    innerHTML += `
  <div class="woman_card space-y-4 p-4 shadow-2xl rounded-2xl">
  <div class="image bg-[#F1F1F1] rounded-3xl p-4">
    <img src="${item.itemImage}" alt="" class="max-w-xs" />
  </div>
  <h3 class="roboto text-2xl text-[#363958;] font-bold">
    ${item.itemName}
  </h3>
  <p class="roboto text-base">
    ${item.sortDiscription}
  </p>
  <div>${item.rating.rewiew}
  <i class="fa-solid fa-star"></i>|
  ${item.rating.noOfreview}k
  </div>
  <div class="flex justify-between items-center">
    <h1 class="text-4xl text-[#FABE4C]">$${item.price}</h1>
    <button
      class="py-5 px-8 bg-gradient-to-r from-[#A4BC46] to-[#85A019] rounded-xl roboto text-[#fff] cursor-pointer" onclick="addBegItem(${item.id})";
    >
    <i class="fa-solid fa-cart-shopping"></i>
      ADD TO BEG
    </button>
  </div>
  </div>
  `;
  });
  cartItem.innerHTML = innerHTML;
}
