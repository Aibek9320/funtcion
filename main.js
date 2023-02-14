// const task1 = (val) => {
//     return `${val} typeof ${typeof val}`
// }
// console.log(task1(true));

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