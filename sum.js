let array=[1,2,3,4,5,6,7,8]
const sumOfArray=(arr)=>{
    return arr.reduce((acc,ele)=>acc+ele,0)
}
const sum=sumOfArray(array);

module.exports={
    sum
}