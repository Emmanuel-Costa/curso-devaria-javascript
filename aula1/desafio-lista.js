const listaPessoas = ["Douglas", "Rafael", "Daniel"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaPessoas.includes(nome)){
    console.log("Você não foi convidado");
    return;
}

if (idade < 18){
    console.log("Você não possui a idade mínima para entrar.");
    return;
}
else{
    console.log("Bem-vindo à festa!")
}