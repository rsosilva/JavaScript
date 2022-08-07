const transactionUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID => {
    transactions = transactions.filter(transaction => transaction.id !== ID)
    updateLocalStorage()
    init()
} 

const addTransactionIntoDOM = ({amount, name, id}) =>{
    const operator = amount < 0 ? '-' : '+'
    const CSSClass = amount < 0 ? 'minus' : 'plus'
    const amountwithoutOperator = Math.abs(amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
      ${name} 
      <span>${operator} R$ ${amountwithoutOperator} </span>
      <button class="delete-btn" onClick="removeTransaction(${id})">x</button> `
    
    transactionUl.append(li)
}

const getIncome = transactionsAmounts => transactionsAmounts
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2)

const getExpenses = transactionsAmounts => Math.abs(transactionsAmounts
    .filter(value => value < 0)
    .reduce((acc , value) => acc + value, 0))
    .toFixed(2) 

const getTotal = transactionsAmounts => transactionsAmounts
    .reduce((acc, transaction) => acc + transaction, 0)
    .toFixed(2)


const updateBalanceValues = () => {
    const transactionsAmounts = transactions.map(({ amount }) => amount)

    const total = getTotal(transactionsAmounts)
    const income = getIncome(transactionsAmounts)
    const expense = getExpenses(transactionsAmounts) 

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent =  `R$ ${income}`
    expenseDisplay.textContent =  `R$ ${expense}`
}

const init = () => {
    transactionUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random() * 1000 )

const addToTransactionArray = (transactionName, transactionAmount) => {
    transactions.push({id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount)})
}

const clearinputs = () => {
    inputTransactionName.value = ''
    inputTransactionAmount.value = ''
}

const handleFormSubmit = event => {
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()
    const isSomeInputEmpty = transactionName ==='' || transactionAmount ===''

    if (isSomeInputEmpty) {
        alert('Por favor, preencha tanto o nome quanto o valor da transação!')
        return
    }

    addToTransactionArray(transactionName, transactionAmount )    
    init()
    updateLocalStorage()
    clearinputs()
    
}

form.addEventListener('submit', handleFormSubmit )