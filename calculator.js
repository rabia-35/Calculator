const btns=document.getElementsByTagName("button") //Bütün buttonlar değişkene atadık

function calculator(e){
    let btn=e.target
    const btnVal=document.getElementById(btn.id).innerHTML//buttonların innerHTML'leri değişkene atadık
    const res=document.querySelector("#result")//sonuç değişkene atadık
   
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
        case ".":
            res.innerHTML+= btnVal;
        break;
        case "÷":
            res.innerHTML+="/"// eval() ÷ işaretini tanımadığı için / işareti ile yerdeğiştirdik
        break;
        case "x²":
            let num=res.innerHTML
            res.innerHTML=num*num // sayının karesi aldık

        break;
        case "C":
            res.innerHTML="";
        break;
        case "=":
            let result=res.innerHTML
            res.innerHTML=eval(result)//sonuç kısmındaki işleminin yapılmasını eval() ile sağladık
}
}

for(let button of btns){
    button.onclick=calculator;// btns atanan buttonların onclick işleminde calculator function çalıştırdık.
}