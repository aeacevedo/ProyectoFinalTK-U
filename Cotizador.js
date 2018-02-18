<script>
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

const precioBase = 250;

var comision = precioBase * 0.30;

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.
// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
recargos = 0;

//Alejando Acevedo -- 13 /02 /2018
var Total = 0; //esta variable tendra el total
var recargosPorEdad = 0;
var recargosConyuge = 0;
var recargoHijos = 0;
var totalPagar = (precioBase + Total);

//Mostrar la información del cliente
alert("Esta es la informacion del cliente:");


//1)  Parte Cargos por Edad
var edad = 2018 - anioNacimiento; // se realiza la resta con el año actual y el de nacimiento para sacar la edad.
if(edad <= 17) // se realizan todas las validaciones para todos los rangos de edad.
{
    alert("La edad necesaria debe ser mayor a 18 años, de lo contrario no podra ser asegurado");
}else if (edad >= 18 && edad <= 20)
{
    alert("Por tener la edad de: " + edad + " no se le aplica un recargo al precio base");
}else if (edad >= 21 && edad <= 24)
{
    alert("Por tener la edad de: " + edad + " se le aplica un recargo del 1% del precio base");
    Total = Total + (comision * 0.01) + comision;
    recargos = recargos + 1;
    recargosPorEdad = 1;
}else if (edad >= 25 && edad <= 29)
{
    alert("Por tener la edad de: " + edad + " se le aplica un recargo del 2% del precio base");
    Total = Total + (comision * 0.02) + comision;
    recargos = recargos + 2;
    recargosPorEdad = 2;
}else if (edad >= 30 && edad <= 39)
{
    alert("Por tener la edad de: " + edad + " se le aplica un recargo del 5% del precio base");
    Total =  Total + (comision * 0.05) + comision;
    recargos = recargos + 5;
    recargosPorEdad = 5;
}else if (edad >= 40 && edad <= 49)
{
    alert("Por tener la edad de: " + edad + " se le aplica un recargo del 8% del precio base");
    Total =  Total + (comision * 0.08) + comision;
    recargos = recargos + 8;
    recargosPorEdad = 8;
}else if (edad >=50 && edad <= 65)
{
    alert("Por tener la edad de: " + edad + " se le aplica un recargo del 12% del precio base");
    Total =  Total + (comision * 0.12) + comision;
    recargos = recargos + 12;
    recargosPorEdad = 12;
};


//2) Recargo por Cónyuge.
// ya que pueden escribir de muchas manera "SI" se valida que de cualquier forma vuelva la variable conyuge a una variable de true o false
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
if((conyuge == "SI") || (conyuge == "Si") || (conyuge == "si")){
    conyuge = true;
  var anoConyuge = prompt("Ingrese el año de nacimiento de su conyúge", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
}else{
    conyuge = false;
};
if (conyuge === true){
    var edadConyuge = 2018 - anoConyuge;
    if(edadConyuge <= 30){
        alert("Por tener la edad de: " + edadConyuge + " se le aplica un recargo del 1% del precio base");
        Total = Total + (comision * 0.01) + comision;
        recargos = recargos + 1;
        recargosConyuge = 1;
    }else if (edadConyuge >= 31 && edadConyuge <= 39){
        alert("Por tener la edad de: " + edadConyuge + " se le aplica un recargo del 2% del precio base");
        Total = Total + (comision * 0.02) + comision;
        recargos = recargos + 2;
        recargosConyuge = 2;
    }else if (edadConyuge >=40 && edadConyuge <= 49){
        alert("Por tener la edad de: " + edadConyuge + " se le aplica un recargo del 3% del precio base");
        Total = Total + (comision * 0.03) + comision;
        recargos = recargos + 3;
        recargosConyuge = 3;
    }else if (edadConyuge >=50 && edadConyuge <= 70){
        alert("Por tener la edad de: " + edadConyuge + " se le aplica un recargo del 5% del precio base");
        Total = Total + (comision * 0.05) + comision;
        recargos = recargos + 5;
        recargosConyuge = 5;
    };
};

//3) Recargos por Cantidad de Hijos
var hijos = prompt("¿Tiene hijos?", "SI/NO");

if((hijos == "SI") || (hijos == "Si") || (hijos == "si")){
    hijos = true;
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
}else{
    hijos = false;
};
if(hijos === true){
    for (let cont = 0; cont <= hijos; cont++) {
        var anoHijos = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");//instrucciones
        var edadHijos = 2018 - anoHijos;    //instrucciones
        if(edadHijos <= 21){//instrucciones
            alert("Por tener la edad de: " + edadHijos + " se le aplica un recargo del 1% del precio base");//instrucciones
            Total = Total + (comision * 0.01) + comision;
            recargos = recargos + 1;
            recargoHijos = 1;
        };
    };
};

// todo lo que se va ma mostrar en pantalla
/*EJEMPLO
Nombre Completo: Alejandro Acevedo
Edad: 30
Fecha de Nacimiento: 10/10/1988
Tiene Conyuge: SI
Tiene HIjos: SI
Cantidad Hijos: 3
Total Recargos: 16% respecto de la base
Detalle Recargos:
Recargos por edad: 8% respecto de la base
Recargos por Conyuge: 5% respecto de la base
Recargos por Hijos: 3% respecto de la base
Total:  xxxxxxxxxxx
*/
alert("La informacion del Cliente es la siguiente: \n" +
"Nombre Completo : " + nombreCompleto + "\n" + "edad: " + edad + "\n"
+ "Fecha Nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/"
+ anioNacimiento + "\n" + "tiene Conyuge: " + conyuge + "\n"
+ "tiene hijos: " + hijos + "\n" + "Cantidad Hijos: " + cantidadHijos + "\n"
+ "Total Recargos: " + recargos + "\n" + "detalle Recargos: " + "\n"
+ "Recargo Por edad: " + recargosPorEdad +"% respecto de la base" + "\n"
+ "Rercargo Por Conyuge: " + recargosConyuge + "% respecto de la base" + "\n"
+ "Recargo Por hijos: " + recargoHijos + "% respecto de la base" + "\n"
+ "Total: " + Total
);

document.write("La informacion del Cliente es la siguiente: \n" +
"Nombre Completo : " + nombreCompleto + "\n" + "edad: " + edad + "\n"
+ "Fecha Nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/"
+ anioNacimiento + "\n" + "tiene Conyuge: " + conyuge + "\n"
+ "tiene hijos: " + hijos + "\n" + "Cantidad Hijos: " + cantidadHijos + "\n"
+ "Total Recargos: " + recargos + "\n" + "detalle Recargos: " + "\n"
+ "Recargo Por edad: " + recargosPorEdad +"% respecto de la base" + "\n"
+ "Rercargo Por Conyuge: " + recargosConyuge + "% respecto de la base" + "\n"
+ "Recargo Por hijos: " + recargoHijos + "% respecto de la base" + "\n"
+ "Total: " + Total
);
</script>
