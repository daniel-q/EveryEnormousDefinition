while(true){
  nome = prompt("Digite seu nome completo")
  nascimento = parseInt(prompt("Digite o ano de nascimento (entre 1922 e 2022)"))
  if(nome=='' || /\d/.test(nome)){
    console.log("Nome invalido")
  }
  else if(nascimento >=1922 && nascimento <=2021){
    console.log(nome+" completou "+(2022-nascimento)+ " anos em 2022")
    break
  }
  else if(isNaN(nascimento)){
    console.log("O ano de nascimento tem que ser um numero inteiro!")
  }
  else{
    console.log("Ano de nascimento invalido Invalida")
  }
}
