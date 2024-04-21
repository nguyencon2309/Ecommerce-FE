const a = [1,2,3,4,5,6,7,8,9,10];
const b = a.reduce((total,cur)=>total+(cur%2?0:cur),0)
console.log(b)