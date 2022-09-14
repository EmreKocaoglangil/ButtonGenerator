const setText = document.querySelector('#text')
const btn = document.querySelector('.preview > button')
const select = document.querySelector('select')
const setSizesNumber = document.querySelector('#font-size-number')
const setSizesRange = document.querySelector('#font-size-range')
const setColorText = document.querySelector('#font-color-text')
const setColorHex = document.querySelector('#font-color-hex')
const cssSpans = document.querySelectorAll('.css_script > span')
const setBackgroundColor = document.querySelector('#background-color-hex')
const setBorderRadius = document.querySelector('#Border-radius')


// Object.values(styles).find('font-family')
window.addEventListener('load',e => {
    let styles = getComputedStyle(document.body)
    const {fontSize,color,borderRadius,fontFamily,backgroundColor} = styles
    cssSpans[0].textContent = `font-family : ${fontFamily}`
    cssSpans[1].textContent = `font-size : ${fontSize}`
    cssSpans[2].textContent = `color : ${color}`
    cssSpans[3].textContent = `backgroundColor : ${backgroundColor}`
    cssSpans[4].textContent = `borderRadius: ${borderRadius}`
})

setText.addEventListener('input',e => {
    btn.innerHTML = e.target.value
})

select.addEventListener('input',e => {
    btn.style.fontFamily = e.target.value
    // btnStyle  = {...btnStyle, 'font-family' : e.target.value}
    cssSpans[0].textContent = `font-family : ${e.target.value}` 
})

setSizesNumber.addEventListener('input',e => {
    setSizesRange.value =  e.target.value
    btn.style.fontSize = `${e.target.value}px`
    // btnStyle  = {...btnStyle,'font-size' : e.target.value}
    cssSpans[1].textContent = `font-size : ${e.target.value}px`
})

setSizesRange.addEventListener('input',e => {
    setSizesNumber.value =  e.target.value
    btn.style.fontSize = `${e.target.value}px`
    cssSpans[1].textContent = `font-size : ${e.target.value}px`
})
setColorText.addEventListener('input',e => {
    setColorHex.value = e.target.value
    btn.style.color = e.target.value
    cssSpans[2].textContent = `color : ${e.target.value}`
})

setColorHex.addEventListener('input',e => {
    setColorText.value = e.target.value
    btn.style.color = e.target.value
    cssSpans[2].textContent = `color : ${e.target.value}`
})

setBackgroundColor.addEventListener('input',e => {
    btn.style.backgroundColor = e.target.value
    cssSpans[3].textContent = `background-color : ${e.target.value}`
})

setBorderRadius.addEventListener('input',e => {
    btn.style.borderRadius = `${e.target.value}px`
    cssSpans[4].textContent = `border-radius : ${e.target.value}px`
})



      