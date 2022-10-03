let loginForm = document.querySelector("#sign-in")
let inputUsername = document.querySelector("#username")
let inputPassword = document.querySelector("#password")


let user = {
    username: "erik",
    password: "123"
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let userLogin = {
        username: inputUsername.value,
        password: inputPassword.value
    }

    let login = userLogin.username == user.username &&
                userLogin.password == user.password

    if(login){
        console.log("Yey Berhasil")
    }else{
        console.log("Coba Lagi ya")
    }
})

loginForm.reset()