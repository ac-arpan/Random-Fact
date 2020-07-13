// Fact Container, input DOM, selected DOM
const factContainer = document.getElementById('fact')
const factHeading = document.getElementById('fact-heading')
const numberInput = document.getElementById('number')
const optionBox = document.getElementById('selectBox')


// Get the Fact button
const getFactBtn = document.getElementById('submit-btn')

numberInput.addEventListener('input', () => {
    
    
    const number = numberInput.value
    const option = optionBox.value.toLowerCase()

    

    if(!number) {
        factContainer.innerText = "Random Facts will appear here!"
        factHeading.innerText = ""
    }
    else fetchFact(number, option)
    

})
getFactBtn.addEventListener('click', e => {
    e.preventDefault()


    const number = numberInput.value
    const option = optionBox.value.toLowerCase()

    if(!number) alert('Please enter a number')
    else {
        fetchFact(number, option)
    }

})


// Get the fact function
const fetchFact = async (number, option) => {

    const res = await fetch(`http://numbersapi.com/${number}/${option}`)
    const fact = await res.text()

    let yearAddon = option === 'year' ? number < 0 ? 'BC' : '' : ''
    factHeading.innerText = `Random Fact about ${Math.abs(number)} ${yearAddon}` 
    factContainer.innerText = fact
    
}
