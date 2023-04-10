let addToCart = (event)=>{

   let btn = event.target;
   let btnParent = btn.closest('.description-main');
   let btnGrandParent = btnParent.parentElement;
   let itemName = btnParent.querySelector('h4').innerHTML;
    let itemPrice = btnParent.querySelector('h6').innerHTML;
    let itemImage = btnGrandParent.querySelector('img').src;

    let itemContainer = document.createElement('tr');
    itemContainer.innerHTML = `<td><input type="checkbox"/></td>
    <td><img src="${itemImage}" alt=""  class="border-circle"/></td>
    <td class="item-name-main">
      <h3 class="item-name">${itemName}</h3>
    </td>
    <td class="item-price"><h3>${itemPrice}</h3></td>
    <td class="item-quantity"><input type="number" class="num" value="1" /></td>
    <td class="item-total"><h3>${itemPrice}</h3></td>
    <td><button class="btn-remove">Remove</button></td>
    `

    main_container.append(itemContainer);

    
    let quantityFields = document.querySelectorAll('.num');

    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].addEventListener('change', updateTotal);
    };

     let removeBtns = document.querySelectorAll('.btn-remove');

    for(let i = 0; i < removeBtns.length; i++){
        removeBtns[i].addEventListener('click', removeItem);
    };

    grandTotal();

};

let updateTotal = (event) => {
    let numberOfItems = event.target;
   let numberOfItems_parent = numberOfItems.closest('tr');
   let priceField = numberOfItems_parent.querySelector('.item-price');
   let totalPriceField = numberOfItems_parent.querySelector('.item-total');
   let priceFieldContent = priceField.querySelector('h3').innerHTML.replace('$', '');
    
    totalPriceField.querySelector('h3').innerHTML = '$' + numberOfItems.value * priceFieldContent;

    if(isNaN(numberOfItems.value) || numberOfItems.value <= 0){
        numberOfItems.value = 1;
        totalPriceField.querySelector('h3').innerHTML = '$' + numberOfItems.value * priceFieldContent;
    };

      

    grandTotal();
};


let grandTotal = () =>{
    let total = 0;
    let grandTotal = document.querySelector('.grand-total');
    let totalPrice = document.querySelectorAll('.item-total');
    for(let i = 0; i < totalPrice.length; i++){
        let totalPriceContent = totalPrice[i].textContent.replace('$', '');

        if(!isNaN(parseFloat(totalPriceContent))){
            total += parseFloat(totalPriceContent);
        }
    };
    console.log(total);
    grandTotal.querySelector('h3').innerHTML = '$' + total;
};

let removeItem = (event) =>{
    let removeBtn = event.target;
    let removeBtn_grandParent = removeBtn.parentElement.parentElement;
    removeBtn_grandParent.remove();
    grandTotal();

};




let addToCartBtns = document.querySelectorAll('.icon-btn');
let main_container = document.querySelector('tbody');




for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener('click', addToCart);
};







