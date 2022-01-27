function fungsiJajargenjang(){
    document.getElementsByClassName("jajargenjang-modal")[0].style.display = "block";
}
document.getElementsByClassName("jajargenjang-close")[0].onclick = function(){
    document.getElementsByClassName("jajargenjang-modal")[0].style.display = "none";
}

function fungsiPersegi(){
    document.getElementsByClassName("persegi-modal")[0].style.display = "block";
}
document.getElementsByClassName("persegi-close")[0].onclick = function(){
    document.getElementsByClassName("persegi-modal")[0].style.display = "none";
}

function fungsiSegitiga(){
    document.getElementsByClassName("segitiga-modal")[0].style.display = "block";
}
document.getElementsByClassName("segitiga-close")[0].onclick = function(){
    document.getElementsByClassName("segitiga-modal")[0].style.display = "none";
}

function fungsiLingkaran(){
    document.getElementsByClassName("lingkaran-modal")[0].style.display = "block";
}
document.getElementsByClassName("lingkaran-close")[0].onclick = function(){
    document.getElementsByClassName("lingkaran-modal")[0].style.display = "none";
}

function luasLingkaran(form){
    var jarijari = form.jarijari.value;
    let Jawaban = Math.PI * jarijari * jarijari;
    let jawabanakhir = Math.round(Jawaban);
    alert ("Luasnya adalah " + jawabanakhir + " cm")
}

function luasSegitiga(form){
    var tinggi = form.tinggisegitiga.value;
    var alas = form.alassegitiga.value;
    let Jawaban = 0.5 * alas * tinggi;
    alert ("Luasnya adalah " + Jawaban + " cm")
}

function luasPersegi(form){
    var sisi = form.sisipersegi.value;
    let Jawaban = sisi * sisi;
    alert ("Luasnya adalah " + Jawaban + " cm")
}

function luasJajargenjang(form){
    var tinggi = form.tinggijajargenjang.value;
    var alas = form.alasjajargenjang.value;
    let Jawaban = alas * tinggi;
    alert ("Luasnya adalah " + Jawaban + " cm")
}