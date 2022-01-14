const btns=document.getElementsByTagName("button")

function calculator(e){
    let btn=e.target
    const btnVal=document.getElementById(btn.id).innerHTML
    const res=document.querySelector("#result")
   
    switch (btnVal) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
            res.innerHTML+= btnVal;
        break;
        case "÷":
            res.innerHTML+="/"
        break;
        case "x²":
            let num=res.innerHTML
            res.innerHTML=num*num

        break;
        case "C":
            res.innerHTML="";
        break;
        case "=":
            let result=res.innerHTML
            res.innerHTML=eval(result)
}
}

for(let button of btns){
    button.onclick=calculator;
}