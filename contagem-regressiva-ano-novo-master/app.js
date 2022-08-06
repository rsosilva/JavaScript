const secondsConteiner = document.querySelector('#seconds')
const minutesConteiner = document.querySelector('#minutes')
const hoursConteiner   = document.querySelector('#hours')
const daysConteiner    = document.querySelector('#days')
const nextYearConteiner = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownConteiner = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearConteiner.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsConteiner.textContent = getTimeUnit(seconds)
    minutesConteiner.textContent = getTimeUnit(minutes)
    hoursConteiner.textContent = getTimeUnit(hours)
    daysConteiner.textContent = getTimeUnit(days)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime //diferença em milisegundos até o ano novo.
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000 ) % 60
    
    insertCountdownValues({days, hours, minutes, seconds})
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownConteiner.style.display = 'flex'
}

setTimeout(handleCountdownDisplay,1000)

setInterval(updateCountdown, 1000); 