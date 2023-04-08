let string="";
let buttons=document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            document.getElementById("input-box").value=string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string="";
            document.getElementById("input-box").value=string;

        }
        else if(e.target.innerHTML == 'DE')
        {
            string=string.substring(0,string.length-1);
            document.getElementById("input-box").value=string;
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.getElementById("input-box").value=string;
        }
    })
   
})






















// let input=document.getElementById("input-box");
// let buttons=document.querySelectorAll("button");
// let string="";
// let arr=Array.from(buttons);
// arr.forEach(button =>{
// button.addEventListener("click",function(e)
// {
//     if(e.target.innerHtml == '=')
//     {
//         string=eval(string);
//         input.value=string;
//     }
//     else{
//         string+=e.target.innerHtml;
//         input.value=string;
//     }
// });
// });