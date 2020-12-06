let myAccount = {
	name: 'Stamatis Manoliadis',
	expenses: 0,
	income: 0
}


let otherAccount = myAccount

otherAccount.name = 'George Manoliadis'
otherAccount.income = 1000000

let addExpense = (account, amount) => {
	account.expenses = account.expenses + amount
	// console.log(account)
}


addExpense(myAccount, 2.50)
console.log(myAccount)


//Challenge Area

//AddIncome 
// ResetAccount (expences & income = 0)
// GetAccount Summary: Account for Andrew has $900. $1000 in income. $100 in expenses

let addIncome = function(account, income) {
	account.income = account.income + income
}

let resetAccount = function(account) {
	account.income = 0
	account.expenses = 0
}

let getAccountSummary = function(account) {
	let balance = account.income - account.expenses
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

resetAccount(myAccount)
addIncome(myAccount, 21000)
addExpense(myAccount, 10000)
addExpense(myAccount, 5000)
console.log(getAccountSummary(myAccount))
addIncome(myAccount, 100)

resetAccount(myAccount)
console.log(getAccountSummary(myAccount))