var tentativas = 0
var meu_login = "Mari"
var minha_senha = "321"

do{
    var login = prompt("Insira seu login")
    var senha = prompt("Insira sua senha")

    if(login == meu_login && senha == minha_senha){
        console.log("Estou logado!")
        tentativas = 4
    }else{
        alert("Senha ou login incorretos")
        tentativas++
    }

}while(tentativas <= 3)


if(tentativas == 3){
    alert("Usuário bloqueado")
}