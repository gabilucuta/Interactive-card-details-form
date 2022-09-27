function myFunction1(){
    var a = document.getElementById("inputName").value;
    if(a==undefined){
    document.getElementById("holderName").innerHTML = "0000 0000 0000 0000";
     
    }else{
    document.getElementById("holderName").innerHTML = a;
    }
    var b = document.getElementById("cardNumber").value;
    document.getElementById("cardNub").innerHTML = b;
    var c = document.getElementById("month").value;
    document.getElementById("holderMonth").innerHTML = c;
    var d = document.getElementById("year").value;
    document.getElementById("holderYear").innerHTML = d;
    var e = document.getElementById("cvvc").value;
    document.getElementById("holderCVV").innerHTML = e;


}





function myFunction(){

var a = document.getElementById("inputName").value;
var b = document.getElementById("cardNumber").value;
var c = document.getElementById("month").value;
var d = document.getElementById("year").value;
var e = document.getElementById("cvvc").value;
var error = false;
var error2 = false;
var error3 = false;
var error4 = false;
var error5 = false;








if(a=="")
{
    document.getElementById("inputName").style.borderColor = "red";
    document.getElementById("errorName").style.opacity = "1";
    error = true;
   
}else
{
   document.getElementById("inputName").style.borderColor = "#acacac90";
   document.getElementById("errorName").style.opacity = "0";
}


if(b=="")
{
    document.getElementById("cardNumber").style.borderColor = "red";
    document.getElementById("errorCard").style.opacity = "1";
    error2 = true;

   
}else
{
    if(/[a-zA-Z]/.test(b))
    {
    document.getElementById("errorImput").style.opacity = "1";
    document.getElementById("cardNumber").style.borderColor = "red";
    error2 = false;

       
    }else
    {
       document.getElementById("errorImput").style.borderColor = "#acacac90";
       document.getElementById("errorImput").style.opacity = "0";
       document.getElementById("errorCard").style.opacity = "0";
       error2=false;

    }
}

if(c=="") 
{
    document.getElementById("errorYearDate").style.opacity = "1";
    document.getElementById("month").style.borderColor = "red"; 
    error3 = true;

}else if(c<=12)
{ 
    document.getElementById("errorYearDate").style.opacity = "0";
    document.getElementById("month").style.borderColor = "#acacac90";
    error3=false;

}else{
    document.getElementById("errorYearDate").style.opacity = "1";
    document.getElementById("month").style.borderColor = "red"; 
    error3 = true;

}

if(d=="") 
{
    document.getElementById("errorYearDate").style.opacity = "1";
    document.getElementById("year").style.borderColor = "red"; 
    error4 = true;

}else
{ 
    document.getElementById("errorYearDate").style.opacity = "0";
    document.getElementById("year").style.borderColor = "#acacac90";
    error4=false;

}


if(e=="")
{
    document.getElementById("errorCVC").style.opacity = "1";
    document.getElementById("cvvc").style.borderColor = "red"; 
    error5 = true;


   
}else
{
    document.getElementById("cvvc").style.borderColor = "#acacac90";   
    document.getElementById("errorCVC").style.opacity = "0";
    error5=false;

}

if(!error&&!error2&&!error3&&!error4&&!error5)
{
    document.getElementById("formCont").style.opacity ="0";
    document.getElementById("confirm").style.opacity ="1";   
    document.getElementById("confirm").style.display ="block";

}

}


