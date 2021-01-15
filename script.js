document.querySelector("#seven").onclick = function(){
   getValue(7);
   return false;
};
document.querySelector("#eght").onclick = function(){
    getValue(8);
    return false;
 };
 document.querySelector("#nine").onclick = function(){
    getValue(9);
    return false;
 };
 document.querySelector("#dev").onclick = function(){
    getValue('/');
    return false;
 };
 document.querySelector("#four").onclick = function(){
    getValue(4);
    return false;
 };
 document.querySelector("#fife").onclick = function(){
     getValue(5);
     return false;
  };
  document.querySelector("#six").onclick = function(){
     getValue(6);
     return false;
  };
  document.querySelector("#umn").onclick = function(){
     getValue('*');
     return false;
  };
  document.querySelector("#one").onclick = function(){
    getValue(1);
    return false;
 };
 document.querySelector("#two").onclick = function(){
     getValue(2);
     return false;
  };
  document.querySelector("#three").onclick = function(){
     getValue(3);
     return false;
  };
  document.querySelector("#min").onclick = function(){
     getValue('-');
     return false;
  };
  document.querySelector("#zero").onclick = function(){
    getValue(0);
    return false;
 };
 document.querySelector("#point").onclick = function(){
     getValue('.');
     return false;
  };
  document.querySelector("#ravn").onclick = function(){
     getValue('=');
     chisl();
     return false;
  };
  document.querySelector("#plus").onclick = function(){
     getValue('+');
     
     return false;
  };
  document.querySelector("#c").onclick = function(){
   clear();
   
   return false;
};
  
  var x= true;

 function getValue(val){
    if(x){
      value(val);
   }else{
      document.querySelector("input[type='text']").value = '';
      x = true;
     value(val);
      
   }
 }

 function value(val){
   let inp = document.querySelector("input[type='text']").value;
   if(inp.length <= 0){
       document.querySelector("input[type='text']").value = val;
   }else{
       if((val != '/') && (val!= '*' )&& (val!= '-') && (val!= '+') && (val!= '=')){
       let sum = inp + val; 
       document.querySelector("input[type='text']").value = sum;    
       }else{
           sum = inp + ' ' + val + ' '; 
           document.querySelector("input[type='text']").value = sum; 
       }  
   }    
 }


 function chisl(){ 
  var val = document.querySelector("input[type='text']").value;
  var znach1='';
  for(var i = 0; i <= val.length; i++){
     if(val[i] != ' '){
        znach1 = znach1 + val[i];
     }else{
        break;
     }
  }

  var znak = '';
  for(i++; i <= val.length; i++){
   if(val[i] != ' '){
      znak = znak + val[i];
   }else{
      break;
   }
}

var znach2='';
for(i++; i <= val.length; i++){
   if(val[i] != ' '){
      znach2 = znach2 + val[i];
   }else{
      break;
   }
}

 result(znach1, znach2, znak);

 }


 function result(val1, val2, znak){
   val1 = Number(val1);
   val2 = Number(val2);
   var res;
   switch (znak) {
      case '+':
         res = val1 + val2;
         break;
      case '-':
         res = val1 - val2;
         break;
      case '*':
         res = val1 * val2;
         break;
      case '/':
         res = val1 / val2;
         break;
   
      default:
         break;
   }

   document.querySelector("input[type='text']").value += res;
   x = false;
 }

 function clear(){
   document.querySelector("input[type='text']").value = "";
 }