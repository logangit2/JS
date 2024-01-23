let pwd = document.querySelector('.pwd')
let btn = document.querySelector('.btn')
btn.addEventListener('click', generate)

function generate() {
    let pwdVal = "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let value = ""

    for (let index = 0; index < 8; index++) {

        let password = Math.floor(Math.random() * pwdVal.length+1)
        // console.log(password);
        value += pwdVal.charAt(password)
        // console.log(value);
    }
    pwd.innerText = value
}