function validarc(e){
    var datos = (document.all)?e.KeyCode : e.which

    if(datos==8) return true;
    var rango=/[0-9\d .]/

    var probar = String.fromCharCode(datos);
    return rango.test(probar);

}

function xd(){
    var a=document.problema1.num1.value;
    var b=document.problema1.num2.value;

    var num1 = parseInt(a);
    var num2 = parseInt(b);

    if (num1==num2)
        document.getElementById('p1-salida').textContent=num1*num2
    else if(num1>num2)
        document.getElementById('p1-salida').textContent=num1-num2;
    else if(num1<num2)
        document.getElementById('p1-salida').textContent=num1+num2;
}

function evaluar(){

    var num1=document.problema2.n1.value;
    var num2=document.problema2.n2.value;
    var num3=document.problema2.n3.value;
    
    if (num1>num2 && num1>num3){ 
        alert(num1);
        resultado= num1;
    }
    else if (num2>num1 && num2>num3)
    {       alert(num2);
            resultado=num2;
        } else {
            alert(num3);
            resultado=num3; 
        }
        document.getElementById('p2-salida').textContent=resultado;
}

function sueldoext(){
    var vsueldohr=document.problema3.sueldohr.value;
    var sueldohr=parseInt(vsueldohr);
    var vhrs=document.problema3.horas.value;
    var horas=parseInt(vhrs);

    if(horas<=40)
        document.getElementById('p3-salida').textContent="$"+horas*sueldohr;
    else if(horas>=40 && horas<=48)
        document.getElementById('p3-salida').textContent="$"+((horas-40)*(sueldohr*2)+(sueldohr*40));
    else
        document.getElementById('p3-salida').textContent="$"+((horas-48)*(sueldohr*3)+(8*(sueldohr*2))+(sueldohr*40));
}

function problema4(){

    //creamos variables para salario y los anios en los que se trabaja
    var salario = document.getElementById('salariom').value;
    var anios = document.getElementById('anos').value;
    var util = 0

    //se crean ifs anidados para las posibilidades de utilidad anual
    if(anios==0 || anios<1){
        util = parseFloat(salario)*0.05;
    }else{
        if(anios==1){
            util = parseFloat(salario)*0.07
        }else{
            if(anios<=2){
                util = parseFloat(salario)*0.07;
            }else{
                if(anios<=5){
                    util =parseFloat(salario)*0.10;
                }else{
                    if(anios<=10){
                        util = parseFloat(salario)*0.15;
                    }else{
                        if(anios>10){
                            util = parseFloat(salario)*0.20;
                        }
                    }
                }
            }
        }
    }

    //se da maximo 2 decimales de los valores
    var sal = parseFloat(salario).toFixed(2);
    var ut = parseFloat(util).toFixed(2);

    //se suman los valores
    var fin = parseFloat(sal)+parseFloat(ut);

    //se imprime el resultado
    document.getElementById('p4-salida').textContent = 'Tu salario es de ' + sal + '\n' +
                                                        'Tu utilidad es de ' + ut + '\n' +
                                                        'Tu importe final es de '+ fin;
    
}