const numbers=[]
function addNumber(){
    const input=document.getElementById("numInput")
    const value=Number(input.value)
    if(!isNaN(value)){
        numbers.push(value)
        document.getElementById("arrayOutput").textContent=JSON.stringify(numbers)
        const sum=numbers.reduce((acc,val)=>acc+val,0)
        document.getElementById("sumOutput").textContent=sum
        input.value=""
    }
}