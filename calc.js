let output = document.querySelector('.output')
let controlbtn = document.querySelector('.controls').children
allsymbol = ['^2', 'c', '%', '+', '-', 'x', '.', '➗', '=', '#', 'Del']

var firstname = ""
var secondname = ""
var symbol =  ""
var result = ""
 let calculate =()  => {
firstname = parseFloat(firstname)
secondname = parseFloat(secondname)
if(symbol === '+') result = firstname + secondname
if(symbol === '-') result = firstname - secondname
if(symbol === '➗') result = firstname / secondname
if(!secondname && symbol === '%') result = firstname / 100
if(symbol === 'x') result = firstname * secondname

output .innerText = result
firstname = result
secondname = ''
 

 }


for(let  button of controlbtn){
    button.addEventListener('click', () => {

        let {innerText: btnValue } = button
let allsymbolv = allsymbol.includes(btnValue)
  
  

if(!secondname && btnValue === '=') return null
if(btnValue === 'c'){
    firstname = ''
    secondname = ''
    symbol = ''
    return output.innerText = ''
}
if(firstname && allsymbolv){
    secondname && calculate()
symbol = btnValue
}
else if(!symbol)
    firstname += btnValue

else if(symbol)
    secondname += btnValue

if(btnValue !== '=')   output.innerText += btnValue
    })

}
let img = document.getElementById('img')
imgArray = ['bi.jpg', 'bi2.jpg', '94.jpg', '95.jpg', '478.jpg', 'one.jpg']
biola = 0
function slideShow(){
    img.setAttribute('src', imgArray[biola])
    biola++
    if(biola >= imgArray.length){
        biola = 0
    }
}
setInterval(slideShow, 1500)