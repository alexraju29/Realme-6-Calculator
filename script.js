Boolean:operatorClick=false; 
var oldValue
var newValue
var oldValuef
var newValuef
var operation
function operatorclick(op){
    operatorClick=true
    operation=op;
    oldValue=document.getElementById("screen").value
    
}
function buttonclick(val){

 if (operatorClick) {
   
        document.getElementById("screen").value=val;
        operatorClick=false;
    
}else
{
        document.getElementById("screen").value+=val;
    }

}

function clearScreen(){
    document.getElementById("screen").value="";
}



function equalClick(){
    newValue=document.getElementById("screen").value
    newValuef=parseFloat(newValue)


    oldValuef=parseFloat(oldValue)
    
    
 
    if (operation=='/') {
        var result=oldValuef/newValuef
        document.getElementById("screen").value=result

        
    } else if(operation=='+'){
        result=oldValuef+newValuef
        document.getElementById("screen").value=result

        
    }else if(operation=='*'){
        result=oldValuef*newValuef
        document.getElementById("screen").value=result
    }else if(operation=='-'){
        result=oldValuef-newValuef
        document.getElementById("screen").value=result
    }else if(operation=='%'){
        result=oldValuef*100/newValuef
        document.getElementById("screen").value=result
    }

    
}
function unariyclick()
{
    var num=document.getElementById("screen").value
    numf=parseFloat(num)
   var square=numf*numf
    document.getElementById("screen").value=square
}
