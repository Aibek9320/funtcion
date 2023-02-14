const task1 = (val) => {
    return `${val} typeof ${typeof val}`
}
console.log(task1(true));

const task2 = (num) => {
    if (num > 0) return 'positive'
    if (num < 0) return 'negative'
    if (num === 0) return 'zero'
}
console.log(task2(-1))

const task3 = (id)=> {
    return id.id 
}
console.log(task3({id:10}))
 

const task4 = (pad) => {
   return pad.name.length%2===0 ? 0 : 1;
}
console.log(task4({name:'xxxx'}))

const task5 = (a, b) => {
    return a > b ? 1 :
     a < b ? -1 :
     a === b ? 0 : 'не правильные данные'

}
console.log(task5(1, 2));

const task6 = (num) => {
    return num % 2 === 0 ? 'четное' : 'нечетное'   
}
console.log(task6(2));

const task7 = (f, g) => {
    return 180 - (f + g)
}
console.log(task7(43, 78))

const task8 = (master) => {
    return master % 3 === 0 ? 'Master' :
    master % 5 === 0 ? 'Yoda' : 
    master % 5 === 0 && master % 3 === 0 ? 'MasterYoda' : master   
}
console.log(task8(15));