let codes = document.getElementById("codes")
let play = document.getElementById("play")
let remove = document.getElementById("remove")
let result = document.getElementById("result")
play.onclick = ()=>{
    result.innerHTML = codes.value
    localStorage.setItem("Result",codes.value)
}
remove.onclick = ()=>{
    result.innerHTML = ""
    // codes.value = "" hadi katklick ire dkxi li ktbe utilisatuer itmshe
}
onload = ()=>{
    codes.value = localStorage.getItem("Result")
    result.innerHTML = codes.value
}