

var input = document.getElementById('input');
var result = document.getElementById('result');

var inputtype =  document.getElementById('inputtype'); 
var resulttype =  document.getElementById('resulttype'); 

var inputtypevalue,resulttypevalue;
//adding listener
input.addEventListener("keyup",myresult);
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);
//taking initial value
inputtypevalue =inputtype.value;
resulttypevalue=resulttype.value;

function myresult(){
       //compare the input and result type and add formula
            
       inputtypevalue =inputtype.value;
       resulttypevalue=resulttype.value;

       //conversion
    
       if(inputtypevalue === "meter" && resulttypevalue === "kilometer"){
           result.value = Number(input.value)*0.001;
       }
       else if(inputtypevalue === "meter" && resulttypevalue === "centimeter"){
          result.value = Number(input.value)*100;

       }
       else if(inputtypevalue === "meter" && resulttypevalue === "meter"){
        result.value = Number(input.value);

     }
        
}
