function convert() {
    let a = document.getElementById("inputdata").value;
    let s1 = document.getElementById("unit1").value;
    let s2 = document.getElementById("unit2").value;
    let b = null;

    if (s1 === "Feet" && s2 === "Meter") {
        b = 0.305 * a;
    } else if (s1 === "Meter" && s2 === "Feet") {
        b = 3.279 * a;
    } else
        b = a;
    document.getElementById("result").innerHTML = "Ket Qua: " + b;
}