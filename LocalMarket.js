var totalNumberOfQuantity = 0;

var totalPriceElement = 0;

function vegetableSectionAddButton(event) {
	console.log(event);
	var targetElement = event.target;
	targetElement.style = "display: none;";
	var sibling = targetElement.nextElementSibling;
	sibling.style = "display: block;";

	var targetElement = event.target;
	var nextSibling = targetElement.nextElementSibling;
	var childCollection = nextSibling.children;
	var plusMinusDiv = childCollection[0];
	var spanCountEle = plusMinusDiv.children[1];
	spanCountEle.innerHTML = 1;
	totalNumberOfQuantity += 1;
	document.getElementById("cart").innerHTML = totalNumberOfQuantity;

	var element = event.target;
	var parent = element.parentElement;
	var child = parent.children;
	totalPriceElement += Number(child[0].innerHTML);
	console.log(totalPriceElement);
	document.getElementById("price").innerHTML  = totalPriceElement ;
	document.getElementById("pri").innerHTML  = totalPriceElement ;
}

function add(event) {
	console.log(event)
	var targetElement = event.target;
	var prevSib = targetElement.previousElementSibling;
	prevSib.innerHTML = Number(prevSib.innerHTML) + 1;
	totalNumberOfQuantity = totalNumberOfQuantity + 1;
	document.getElementById("cart").innerHTML = totalNumberOfQuantity;

  function addd(event) {
  	console.log(event);
  	var targetElement = event.target;
  	var parent = targetElement.parentElement;
  	var grandParent = parent.parentElement;
  	var grandGrandParent = grandParent.parentElement;
  	var child = grandGrandParent.children;
  	var quantity = Number(child[0].innerHTML);
  	totalPriceElement = quantity + totalPriceElement;
  	console.log(totalPriceElement);
  	document.getElementById("price").innerHTML = totalPriceElement;
  	document.getElementById("pri").innerHTML = totalPriceElement;
  }
  addd(event);
}  

function sub(event) {
	console.log(event)
	targetElement = event.target; 
	nextSib = targetElement.nextElementSibling;
	if (Number(nextSib.innerHTML) <= 0) {
		return;
	}
	nextSib.innerHTML = Number(nextSib.innerHTML) - 1;
	totalNumberOfQuantity = totalNumberOfQuantity - 1;
	document.getElementById("cart").innerHTML = totalNumberOfQuantity;

	function subtraction(event) {
		console.log(event);
		var targetElement = event.target;
  	var parent = targetElement.parentElement;
  	var grandParent = parent.parentElement;
  	var grandGrandParent = grandParent.parentElement;
  	var child = grandGrandParent.children;
  	var itemPrice = Number(child[0].innerHTML);
  	totalPriceElement = totalPriceElement - itemPrice;
  	console.log(totalPriceElement);
  	document.getElementById("price").innerHTML = totalPriceElement;
  	document.getElementById("pri").innerHTML = totalPriceElement;
	}
	subtraction(event);
}


function cartItems(event) {
	var targetElement = event.target;
  var parent = targetElement.parentElement;
  var sibling = parent.nextElementSibling;
  sibling.style = "transition-property: all; transition-duration: 1s; transition-timing-function: ease-in-out; right: 0px;";
}
 
function removeItems() {
	document.getElementById("demo").style = "transition-property: all; transition-duration: 1s; transition-timing-function: ease-in-out; right: -600px;" ;
}

var phoneNumberValid = false;
function validationForMobileNumber(number) {
	console.log(number)
	var phoneNumberInput = /^[6-9][0-9]{9}$/;
	var input = document.getElementById("phoneNumber").value;
		if (!phoneNumberInput.test(input)) {
			 phoneNumberValid = false;
       document.getElementById("demo").innerHTML = "The mobile number is invalid";
  }else {
  	   phoneNumberValid = true;
       document.getElementById("demo").innerHTML = "The mobile number is valid";
       document.getElementById("next").style = "opacity: 1;";
   }
}


function viewTheAddress() {
	if (phoneNumberValid) {
	  document.getElementById("addressBlock").style = "display: block;";
	}
}

var validateAddress = false;
function adressVerification() {
	var address = /^[a-z0-9\s,'-]*$/i;
	var addressInput = document.getElementById("addresss").value;
	  if (!address.test(addressInput)) {
	  	validateAddress = false;
	  	document.getElementById("addressText").innerHTML = "Invalid address";
	  }else {
	  	validateAddress = true;
	  	document.getElementById("addressText").innerHTML = "Valid address";
	  	document.getElementById("opacity").style = "opacity: 1;";
	  }
}

function viewThePaymentMode() {
	if(validateAddress) {
		document.getElementById("paymentMode").style = "display: block;";
	}
}

