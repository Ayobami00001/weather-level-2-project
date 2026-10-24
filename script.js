const golive = () => {
const apiKey ="e1d69e1431d4205b1ef00177ce2b8667"
const writting = document.getElementById('writting')
const write = writting.value
const city = write
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const large  = document.getElementById("large")
const small = document.getElementById("small")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")

fetch(url)
.then(response =>response.json())
.then(result => {

    if (result.cod!== 200) {
        console.error(result.message);
        large.innerHTML = `<h3 d-flex justify-content-center >Error: ${result.message}</h3>`;
        return;
    }
    let locaname = result.name
    let depi = result.weather[0].description
    let humi = result.main.humidity
    let winn = result.wind.speed
    let visi = result.visibility
    let temp =Math.round(result.main.temp -273) 
    let min =Math.round(result.main.temp_min -273) 
    let max =Math.round(result.main.temp_max -273) 
    let fee =Math.round(result.main.feels_like -273) 
    let pre = result.main.pressure
    let country = result.sys.country

    large.innerHTML =`
    ${temp}°C`
    small.innerHTML =`
    <h3>${locaname},${country}, </h3>
    `

    one.innerHTML =`
    ${locaname}`
    two.innerHTML =`
    ${depi}`
    three.innerHTML =`
    ${humi}%`
    four.innerHTML =`
    ${winn}Km/h`
    five.innerHTML =`
    ${visi}Km`
    six.innerHTML =`
    ${min}°C`
    seven.innerHTML =`
    ${max}°C`
    eight.innerHTML =`
    ${fee}°C`
    nine.innerHTML =`
    ${pre}  `
    
})
writting.value=''
}