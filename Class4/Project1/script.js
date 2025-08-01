const friends=["Khushi", "Prapty", "Rafi", "Happy"]
const fruits=["mango", "Apple"]
const ulfriend=document.getElementById("friendlist")

for(let i=0; i<friends.length; i++){
    const li=document.createElement("li")
    li.textContent=friends[i]
    ulfriend.appendChild(li)
}

const ulfruit=document.getElementById("fruit")
fruits.forEach(name=>{
    const li=document.createElement("li")
    li.textContent=name
    ulfruit.appendChild(li)
})
