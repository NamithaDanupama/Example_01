
function username(name){
    if(name.trim().charAt(0)!==name.trim().charAt(0).toUpperCase()){
        document.getElementById("Mname").textContent="* first letter must me uppercase";
    }
    else if(name.length>10){
        document.getElementById("Mname").textContent="* maximum letters can contains 10";
    }
    else{
        document.getElementById("Mname").textContent=""
    }
}

function emailAddress(email){
    if (!(email.trim().length>=12)){
        document.getElementById("Memail").textContent="* atleast 10 letters must contains";
    }
    else if((email.endsWith("@gmail.com")) && ((email.trim().indexOf("@")-1)!=="")){
        document.getElementById("Memail").textContent=""
    }
    else{
        document.getElementById("Memail").textContent="* invalid email... please try again !"
    }

}

function PhoneNumber(pno){
    if((pno.trim().charAt(0)!=="0") || pno.length>10 ){
        document.getElementById("Mpno").textContent="* invalid phone number... please try again ! ";
    }
    else{
        document.getElementById("Mpno").textContent="";
    }
}

function gender(female,male,custom){
    if(female.checked || male.checked || custom.checked){
        document.getElementById("Mgender").textContent="";
    }
    else{
        document.getElementById("Mgender").textContent="* You must select a Gender";
    }
 
}

document.getElementById("sign").onclick=function(){
    let name=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let pno=document.getElementById("pnumber").value;
    let birth=document.getElementById("DofB").value;
    let female=document.getElementById("female").value;
    let male=document.getElementById("male").value;
    let custom=document.getElementById("custom").value;
    username(name);
    emailAddress(email);
    PhoneNumber(pno);
    gender(female,male,custom);


}
