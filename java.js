document.title="Aplay";
let tryy=6;
let letters=5;
let word= [["A","h","m","e","d"],
  ["B","r","a","i","n"],
  ["C","l","o","u","d"],
  ["F","r","u","i","t"],
  ["S","t","o","r","y"]]
let randomIndex = Math.floor(Math.random() * word.length);
let arry=word[randomIndex]




function createGameBoard(){
for(let i=1;i<=tryy;i++){
    let div2=document.createElement("div")
    let text=document.createTextNode(`try${i}`)
    let inp=document.querySelector(".inputs")
    div2.classList.add(`try${i}`)
    div2.appendChild(text)
    for(let j=1;j<=letters;j++){
        let input=document.createElement("input")
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("letter"); // إضافة تنسيق موحد
input.addEventListener("input",function(){
      input.value = input.value.toUpperCase();
    if(input.value.length===1){
        let next=input.nextElementSibling;
        if(next&&next.tagName==="INPUT"){
            next.focus()
        }
    }
})
        div2.append(input)
        let b=document.querySelector(".check-word");



    }
    inp.appendChild(div2)
}
for (let i = 2; i < tryy+1; i++) {
    let inputs = document.querySelectorAll(`.try${i} .letter`);
    inputs.forEach(input => {
        input.disabled = true;
        input.classList.add("disabl");
    });
}


let p=document.querySelector(".letter")
if (p) p.focus();

}
window.onload=function(){
    createGameBoard()
    for(let i=1;i<=tryy;i++){
    let inputs = document.querySelectorAll(`.try${i} .letter`);
    inputs.forEach((e,index)=>{
    e.addEventListener("keydown",function(event){
        if(event.key==="ArrowRight"){
            if(index<inputs.length-1){
                inputs[index+1].focus()
            }}if(event.key==="ArrowLeft"){
                if(index>0){
                    inputs[index-1].focus()
                }
            
        }else if(event.key==="Enter"){
            checkButton.click()
        }
    })
})}
}


let checkButton=document.querySelector(".check-word");
let currentTry=1;

checkButton.addEventListener("click",function(){
    if(currentTry>tryy)return;

let input = document.querySelectorAll(`.try${currentTry} .letter`);
let guess=[]
    input.forEach(inp => {
            guess.push(inp.value);
        });
     if (guess.includes("")) {
            alert("اكتب كل الحروف الأول");
            return;
        }
        let suss=true;
        for(let j=0;j<letters;j++){
         if (guess[j].toLowerCase() === arry[j].toLowerCase()) {
            input[j].classList.add("first-letterR")
            
    }else if(arry.map(c => c.toLowerCase()).includes(guess[j].toLowerCase())
&&guess[j].toLowerCase() !== arry[j].toLowerCase()){
        input[j].classList.add("first-letterP")
        suss=false
    }else if(guess[j].toLowerCase() !== arry[j].toLowerCase()){
        input[j].classList.add("first-letterW")
        suss=false
    }
 
}
   if(suss){
        for(let i=1;i<=tryy;i++){
let input = document.querySelectorAll(`.try${i} .letter`);
            input.forEach(e=>{
                e.classList.add("disabl")
                e.disabled = true;
            })
        }
        let good=document.querySelector(".good");
        good.innerHTML="Very Gooood"
       return
    }else{
        let good=document.querySelector(".good");
        good.innerHTML="Try agian"
    }
if(currentTry<tryy){
    let inputs = document.querySelectorAll(`.try${currentTry+1} .letter`);
    let input = document.querySelectorAll(`.try${currentTry} .letter`);
    input.forEach(e=>{
        e.classList.add("disabl")
        e.disabled = true;
    })
    inputs.forEach(e=>{
        e.classList.remove("disabl")
        e.disabled = false;
    })
    if(inputs[0]) inputs[0].focus();
}

    currentTry++;
});
let h=document.querySelector(".hint");
let N=document.querySelector(".hint span");


let max=3;
let usedHints=0;

h.addEventListener("click",function(){
   
    let input = document.querySelectorAll(`.try${currentTry} .letter`);
    if(usedHints>=max){
        return alert("خلصت عدد المساعدات المسموح بيها!");

    }else{
    for(let j=0;j<letters;j++){
        if(input[j].value.toLowerCase() !== arry[j].toLowerCase()){
            input[j].value=arry[j]
            input[j].focus()
            usedHints++
            N.innerHTML=max-usedHints
            break
            
        }
    }}

})


