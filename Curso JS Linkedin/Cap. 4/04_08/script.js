function logScope(){
    const localVar = 2;

    if(localVar){
        const localVar = "Eu sou diferente!";
        console.log("localVar aninhada: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}

logScope();

