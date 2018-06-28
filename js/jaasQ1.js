window.onload = function(){
    //document.getElementById('resultado').disabled=true;
    var btnPreco = document.getElementById("preco");
    var btnQtd = document.getElementById("quantidade");

    btnPreco.oninput = function (){
        var preco = document.getElementById("preco").value;
        var quantidade = document.getElementById("quantidade").value;
        var pr = parseFloat(preco);
        var qtd = parseFloat(quantidade);
        total(pr,qtd);
    }

    btnQtd.oninput = function (){
        var preco = document.getElementById("preco").value;
        var quantidade = document.getElementById("quantidade").value;
        var pr = parseFloat(preco);
        var qtd = parseFloat(quantidade);
        total(pr,qtd);
    }
}

function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
 }

function total(pr, qtd){
    var total_;
    if (isNumber(pr) && isNumber(qtd)){
        total_ = pr*qtd;
        document.getElementById("resultado").value = total_;
    }
    else{
        if(isNumber(a) && !isNumber(b)){
            document.getElementById("MyOutPut").value = 'Digite uma quantidade';
        }

        if(!isNumber(a) && isNumber(b)){
            document.getElementById('MyOutPut').value = 'Digite um preço';
        }

        if(!isNumber(a) && !isNumber(b)){
            document.getElementById('MyOutPut').value = 'Digite um preço e uma quantidade';
        }
    }
    
}
