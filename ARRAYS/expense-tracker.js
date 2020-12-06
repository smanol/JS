const account = {
    
    name: 'Stamatis',
    
    expenses: [],
    incomes: [],

    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
        
    },
    sumExpenses: function (){
        let sum = 0
        this.expenses.forEach(function(expense){
            sum = sum + expense.amount
        })
        return sum
    },

    addIncome: function (descripion, amount) {
        this.incomes.push({
            descripion: descripion,
            amount: amount,
        })
    },

    sumIncomes: function() {

        let sum = 0
        this.incomes.forEach(function(income){
            sum = sum + income.amount
        })
        return sum

    },


    getAccountSummary: function() {
        const expenses = this.sumExpenses() 
        const incomes = this.sumIncomes() 
        const balance = incomes - expenses
        return `${this.name} has a balance of $${balance}. $${incomes} in income. $${expenses} in expenses.`
        }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAmount -> total up all expenses -> Andrew Mead has $1250 in expenses

// 1. add in come array  to account
// 2. add income method ->  description, amount
// 3. Tweak getAccountSummary

// Andrew Mead has a balance of $10. $100 in income. $90 in expences.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job',1000)

console.log(account.getAccountSummary())

