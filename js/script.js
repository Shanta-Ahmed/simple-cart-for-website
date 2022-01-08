function handleProductChange(product, isIncrease){
  const productInput  = document.getElementById(product); 
  const productCount = parseInt(productInput.value);
  let newProductCount = productCount;

    if(isIncrease == true){
      newProductCount = productCount + 1 ;
      } 
    if(isIncrease == false && productCount > 0){
        newProductCount = productCount - 1;
    }


    productInput.value = newProductCount;
    let productTotal;
    if(product == "laptop"){
        productTotal = newProductCount * 250000;
    }
    else{
        productTotal = newProductCount * 450000;
    }

    // else{
    //     productTotal = newProductCount * 150000;
    // }
    // else{
    //     productTotal = newProductCount * 25000;
    // }


    document.getElementById(product + '-total').innerText = productTotal;
    handleCheckout();
}


function handleCheckout() {
  // const laptopCount = document.getElementById('laptop').value;
  // const watchCount = document.getElementById('watch').value;
  
  const laptopCount = getItems('laptop');
  const watchCount = getItems('watch');

  const subTotal = parseInt(laptopCount) * 250000 + parseInt(watchCount) * 450000;

  document.getElementById('sub-total').innerText = subTotal;

  const tax = Math.round(subTotal  * .01);
  document.getElementById('tax-amount').innerText = tax;

  const grandTotal = subTotal + tax;
  document.getElementById('grand-total').innerText = grandTotal;

}

function getItems(product){
  const productInput = document.getElementById(product);
  const productCount = parseInt(productInput.value);
  return productCount;
}

function checkOut(){
  alert("thank you for buy");
  location.reload();
}