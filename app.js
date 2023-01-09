function SignUp() {
    let a = document.querySelector('.one-input').value;
    if (a.length < 3) {
        document.querySelector('p').classList.remove('classs')
        document.querySelector('p').classList.add('class');
    }
    
     else {
        document.querySelector('p').innerHTML = "To'g'ri"
        document.querySelector("p").style.color = "green";
        document.querySelector("p").style.background = "white";
    }
}