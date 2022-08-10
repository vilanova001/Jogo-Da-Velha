window.variavelControle = "X";
function marcarComXouO(D){
    var mensagenRetorno = " ";

    if(document.getElementById(D).value == " "){

    if(window.variavelControle == "X"){
        document.getElementById(D).value = "X";
        window.variavelControle = "O";
    }
    else{
        window.variavelControle = "X";
        document.getElementById(D).value = "O";
        
    } 
    
    var D1 = document.getElementById("D1").value;
    var D2 = document.getElementById("D2").value;
    var D3 = document.getElementById("D3").value;
    var D4 = document.getElementById("D4").value;
    var D5 = document.getElementById("D5").value;
    var D6 = document.getElementById("D6").value;
    var D7 = document.getElementById("D7").value;
    var D8 = document.getElementById("D8").value;
    var D9 = document.getElementById("D9").value;
//1
    if(D1 == D2 && D2 == D3 && D1 != " "){
       mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
       alert(mensagenRetorno);            
    }
//2
    else if(D4 == D5 && D5 == D6 && D4 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);             
     }
//3
    else if(D7 == D8 && D8 == D9 && D7 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);             
     }
//4
    else if(D1 == D5 && D5 == D9 && D1 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);             
     }
//5    
    else if(D3 == D5 && D5 == D7 && D3 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);             
     }
//6
    else if(D1 == D4 && D4 == D7 && D1 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);     
    }
//7
    else if(D2 == D5 && D5 == D8 && D2 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);
     }
//8
    else if(D3 == D6 && D5 == D9 && D3 != " "){
        mensagenRetorno = "PARABENS VOCE GANHOU " + document.getElementById(D).value;
        alert(mensagenRetorno);
     }
//9 DEU VELHA
    else if(D1 != " " && D2 != " " && D2 != " " && D4 != " " && D5 != " " && D6 != " " && D7 != " " && D8 != " " && D9 != " " ){
        mensagenRetorno = "DEU VELHA"
        alert(mensagenRetorno);
     }
    }
}