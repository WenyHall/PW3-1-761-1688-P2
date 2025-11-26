// 1. Suma de tres valores ingresados por el usuario
function sumarValores() {
    let a = Number(document.getElementById("s1").value);
    let b = Number(document.getElementById("s2").value);
    let c = Number(document.getElementById("s3").value);
    let suma = a + b + c;
    document.getElementById("resultado1").innerText =
        "La suma de " + a + ", " + b + " y " + c + " es: " + suma;
}

// 2. Cuadrado de un número
function cuadrado() {
    let n = Number(document.getElementById("numeroCuadrado").value);
    let resultado = n * n;
    document.getElementById("resultado2").innerText =
        "El cuadrado de " + n + " es: " + resultado;
}

// 3. Promedio de calificaciones
function promedio() {
    let nombre = document.getElementById("nombre").value;
    let n1 = Number(document.getElementById("c1").value);
    let n2 = Number(document.getElementById("c2").value);
    let n3 = Number(document.getElementById("c3").value);
    let prom = (n1 + n2 + n3) / 3;
    document.getElementById("resultado3").innerText =
        "El promedio de " + nombre + " es: " + prom.toFixed(2) + " puntos";
}

// 4. Conversión de metros
function convertirMetros() {
    let m = Number(document.getElementById("metros").value);
    let cm = m * 100;
    let km = m / 1000;
    document.getElementById("resultado4").innerText =
        m + " metros equivalen a " + cm + " centímetros y " + km + " kilómetros.";
}

// 5. Comparación entre dos valores
function comparar() {
    let x = Number(document.getElementById("v1").value);
    let y = Number(document.getElementById("v2").value);

    let mayor = x > y ? x : y;
    let menor = x > y ? y : x;
    let diferencia = mayor - menor;

    document.getElementById("resultado5").innerText =
        "El número mayor es " + mayor + ", el menor es " + menor +
        ", y su diferencia es " + diferencia + ".";
}
