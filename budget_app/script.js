const transactionEl = document.querySelector(".transactions");
transactionEl.addEventListener("click", function (event) {
	// remove
	const clickedEl = event.target.parentNode;
	clickedEl.remove();

	// update income
	const amountEl = clickedEl.querySelector(".transaction__amount");
	const amount = +amountEl.textContent; //to number
});
