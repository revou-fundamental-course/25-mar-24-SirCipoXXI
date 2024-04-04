function submit_form(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var result = weight/(height*height);

    if(document.getElementById('male').checked) {
        document.getElementById("result-number").innerHTML = result.toFixed(2);
        document.getElementById("span-sex").innerHTML = "Sebagai" + "Laki-Laki";
        document.getElementById("span-age").innerHTML = "ber usai" + age + "Tahun";
        document.getElementById("span-weight").innerHTML = "dengan berat" + weight + "Kg";
        document.getElementById("span-height").innerHTML = "dengan tinggi" + height + "Cm";
    }
    else if (document.getElementById('female').checked) {
        document.getElementById("result-number").innerHTML = result.toFixed(2);
        document.getElementById("span-sex").innerHTML = "Sebagai" + "Perempuan";
        document.getElementById("span-age").innerHTML = "ber usai" + age + "Tahun";
        document.getElementById("span-weight").innerHTML = "dengan berat" + weight + "Kg";
        document.getElementById("span-height").innerHTML = "dengan tinggi" + height + "Cm";
    }else {
        alert("isi form yang kosong")
    }
}

function bmi_result (){
    if(result<18.5)
    console.log("kurang Berat Dadan");
} else if (result >= 18.5 && result <= 24.9){
    console.log("Normal / Ideal")
} else if (result >= 25.0 && result <= 29.9){
    console.log("Kelebihan Berat Badan")
} else {console.log("Kegemukan / Obesitas")
}