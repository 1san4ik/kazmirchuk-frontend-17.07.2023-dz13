{
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result = ''
for (let i = 20; i <= 30; i += 0.5) {
    result += (`${i} `)
}
console.log(result)
}

{
// Один долар коштує 37 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const usdPrice = 37
let uahPrice = ''
for (let usd = 10; usd <= 100; usd += 10) {
    uahPrice += (`${usd}дол.=${usd * usdPrice}грн. `)
}
console.log(uahPrice)
}

{
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let integerNumber = 1
let result = ''
const userNumber = prompt('Введіть число, для якого будемо шукати цілі числа, квадрат яких не перевищує його: ')
while (integerNumber <= 100) {
    if (integerNumber ** 2 <= userNumber) {
        result += (`${integerNumber} `)
    }
    integerNumber += 1

}
console.log(result)
}

{
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let integerNumber = Number(prompt('Введіть ціле число, для визначення чи воно є простим: '))
let sum = 0
for (let i = 2; i <= integerNumber; i++){
    if (integerNumber % i === 0) {
        sum += 1    
    }      
}
if (sum !== 1 || integerNumber ===1) {
    console.log(`Число ${integerNumber} є складним`)
    
}else {
    console.log(`Число ${integerNumber} є простим`)
}
}

{
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let integerNumber = Number(prompt('Введіть число для визначення, чи можна його одержати шляхом зведення числа 3 у деякий ступінь: '))
let sum = false
for (let i = 1; i <= integerNumber; i++) {
    if (3**i === integerNumber) {
        sum = true
        break
    }else if (3**i > integerNumber) {
        break
    }
}
if (sum) {
    console.log(`Число ${integerNumber} можна одержати шляхом зведення числа 3 у ступінь`)
}else {
    console.log(`Число ${integerNumber} не можна одержати шляхом зведення числа 3 у ступінь`)
}
}