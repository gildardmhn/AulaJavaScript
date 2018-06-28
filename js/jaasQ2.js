window.onload = function(){
    var b = document.getElementById("b");
    var a = document.getElementById("a");
    a.oninput = function(){
        var preco = document.getElementById("a").value;
        var qtd = document.getElementById("b").value;
        var a_int = parseFloat(preco);
        var b_int = parseInt(qtd);
        OutPut(a_int,b_int);
    }
    b.oninput = function (){
        var preco = document.getElementById("a").value;
        var qtd = document.getElementById("b").value;
        var a_int = parseFloat(preco);
        var b_int = parseInt(qtd);
        OutPut(a_int,b_int);
    }
}



function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}



function OutPut(a,b){
    var total = 0;

    if(isNumber(a) && isNumber(b)){
        total = a * b;
        document.getElementById("x").value = total;
    }
    else{
        if(isNumber(a) && !isNumber(b)){
            document.getElementById("x").value = 'Digite uma quantidade';
        }

        if(!isNumber(a) && isNumber(b)){
            document.getElementById('x').value = 'Digite um preço';
        }

        if(!isNumber(a) && !isNumber(b)){
            document.getElementById('x').value = 'Digite um preço e uma quantidade';
        }
    }
    
}