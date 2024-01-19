let cardItem=[];
let cardItemData ={
  cartImage:"../images/jacket-1.png",
  name:"Best Jacket For woman",
  contry:"bangladesh",
  price:2334,
};
onLoad();
function onLoad(){
  loadBegItem();
  dispalyCardItem();
}
function loadBegItem(){
  
}

function dispalyCardItem(){
  let cartSelect = document.querySelector(".cart_items");
  cartSelect.innerHTML =`
  <div class="cart flex justify-between p-2 md:p-5 lg:p-5 shadow-lg m-0 md:m-5 lg:m-5">
         <div class="left flex">
          <img src="${cardItemData.cartImage}" alt="" class="max-w-20 md:max-w-56 lg:max-w-56">
          <div class="details flex flex-col md:flex-col justify-between">
            <div class="top">
              <h1 class=" text-xl md:text-3xl capitalize font-medium">${cardItemData.name}</h1>
            <p class="text-2xl font-normal text-[#010101]">
            ${cardItemData.contry} | large</p>
            <h2 class="text-2xl font-medium">price:${cardItemData.price}tk</h2>
            </div>
            <p class="text-2xl lg:text-3xl">✅in stock</p>
          </div>
         </div>
         <div class="right">
          <select name="quantity" id="quantity" class="no_of_product border-2 py-4 px-5 ">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>
         </div>
         <div class="cross">
          <span><i class="fa-solid fa-xmark text-3xl"></i></span>
         </div>
        </div>
  `;
}