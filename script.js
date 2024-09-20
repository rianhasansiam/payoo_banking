document.getElementById('login-btn').addEventListener('click',function() {

    const phoneInput=document.getElementById('phone-input').value;

    const pinInputt=document.getElementById('pin-input').value;

    if(phoneInput=="01932600504"  && pinInputt=="0193"){

        window.location.href="./home.html";

    }
    else{
        alert("Your phone or pin is wrong.please try again later...!");
    }

})
