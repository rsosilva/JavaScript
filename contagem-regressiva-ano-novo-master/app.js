const secondsConteiner = document.querySelector('#seconds')
const minutesConteiner = document.querySelector('#minutes')
const hoursConteiner   = document.querySelector('#hours')
const daysConteiner    = document.querySelector('#days')
const nextYearConteiner = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownConteiner = document.querySelector('#countdown')

console.log(countdownConteiner.textContent)

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearConteiner.textContent = nextYear

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime //diferença em milisegundos até o ano novo.
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000 ) % 60
    
    secondsConteiner.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesConteiner.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursConteiner.textContent = hours < 10 ? '0' + hours : hours
    daysConteiner.textContent = days < 10 ? '0' + days : days
}

setTimeout(() => {
    spinnerLoading.remove()
    countdownConteiner.style.display = 'flex'
},1000)

setInterval(updateCountdown, 1000); 