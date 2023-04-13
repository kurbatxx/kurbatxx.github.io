const transactionEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

const submitHandler = (event) => {
	event.preventDefault();

	const description = inputDescriptionEl.value;
	const amount = +inputAmountEl.value;

	//create transzction HTML
	const transactionItemHTML = `
		<li class="transaction transaction--${amount > 0 ? "income" : "expense"}">
			<span class="transaction__text">${description}</span>
			<span class="transaction__amount">${amount > 0 ? "+" : ""}${amount}</span>
			<button class="transaction__btn">X</button>
        </li>
	`;

	// insert HTML
	transactionEl.insertAdjacentHTML("beforeend", transactionItemHTML);

	// clear forms
	inputDescriptionEl.value = "";
	inputAmountEl.value = "";

	// unfocus
	inputDescriptionEl.blur();
	inputAmountEl.blur();

	if (amount > 0) {
		const currentIncome = +numberIncomeEl.textContent; // +str to num
		const updatedIncome = currentIncome + amount;
		numberIncomeEl.textContent = updatedIncome;
	} else {
		const currentExpenses = +numberExpensesEl.textContent;
		const updatedExpenses = currentExpenses + amount * -1;
		numberExpensesEl.textContent = updatedExpenses;
	}

	updateBalance();
};

formEl.addEventListener("submit", submitHandler);

const clickHandler = (event) => {
	// remove
	const clickedEl = event.target.parentNode;
	clickedEl.remove();

	// update income
	const amountEl = clickedEl.querySelector(".transaction__amount");
	const amount = +amountEl.textContent;

	if (amount > 0) {
		//to number

		const currentIncome = +numberIncomeEl.textContent;
		const updatedIncome = currentIncome - amount;

		numberIncomeEl.textContent = updatedIncome;
	} else {
		const currentExpenses = +numberExpensesEl.textContent;
		const updatedExpenses = currentExpenses - amount * -1;

		numberExpensesEl.textContent = updatedExpenses;
	}

	updateBalance();
};

transactionEl.addEventListener("click", clickHandler);

function updateBalance() {
	// update balance
	const income = +numberIncomeEl.textContent;
	const expenses = +numberExpensesEl.textContent;

	balanceNumberEl.textContent = income - expenses;

	if (income - expenses < 0) {
		//make red if negative
		balanceNumberEl.style.color = "red";
	} else {
		balanceNumberEl.style.color = "black";
	}
}
