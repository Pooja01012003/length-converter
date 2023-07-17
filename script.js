function add(){
let input1= Number(document.getElementById("input1").value)
let input2=Number(document.getElementById("input2").value)
    let answer=input1+input2;
    const result= document.getElementById("result");
    result.innerHTML= answer;
}
function sub(){
    let input1=Number(document.getElementById("input1").value);
    let input2=Number(document.getElementById("input2").value)
    let subtract=input1-input2;
    let result=document.getElementById("result");
    result.innerHTML=subtract;
}
function mul(){
    let input1=Number(document.getElementById("input1").value);
    let input2=Number(document.getElementById("input2").value)
    let multiply=input1*input2;
    let result=document.getElementById("result");
    result.innerHTML=multiply;
}
function div(){
    let input1=Number(document.getElementById("input1").value);
    let input2=Number(document.getElementById("input2").value)
    let divide=input1/input2;
    let result=document.getElementById("result");
    result.innerHTML=divide;
}