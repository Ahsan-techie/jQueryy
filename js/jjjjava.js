/*var car = {
    car_brand: "tesla",
    car_model: "Model 3",
    price: 35000,
    teslaautopilot: function () {

        document.write("<h2>This car has auto pilot</h2>");

    }

}
car.teslaautopilot();*/

function car(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaautopilot = function () {
        document.write("<h2>This car has auto pilot</h2>");

    }

}
var c1 = new car("tesla", "model 3", 35000);
//c1.teslaautopilot();
function buttonclick() {
    var e1 = document.getElementById("name").value;
    var e2 = document.getElementById("password").value;
    if (e1 === e2) {
        alert("you entered same name and password");
    } else {
        alert("Different name and password.");
    }

}
function slect() {

    var select = document.getElementById("sel");
    alert(select.options[select.selectedIndex].value);

}
function setnewimg() {
    document.getElementById("img1").src = "imges/download.png";
}
function oldimge() {
    document.getElementById("img1").src = "imges/download.jpg";
}

function validate() {
    var e1 = document.getElementById("name");
    var e2 = document.getElementById("password");
    if (e1.value.trim() == "") {

        alert("username blanked");
        e1.style.border = "solid red 3px";
        document.getElementById("lable").style.visibility = "visible";
        return false;
    } else if (e2.value.trim() == "") {

        alert("password blanked");
        e2.style.border = "solid red 3px";
        document.getElementById("lable").style.visibility = "visible";
        return false;
    } else if (e2.value.trim().length < 5) {

        alert("password length should be greater than 5");
        e2.style.border = "solid red 3px";
        document.getElementById("lable").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}

function val() {
    var e2 = document.getElementById("password").value;
    // var regx = /^[0][3]\d{9}$/;//phone number
    var regx = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})(.[a-z]{2,20})?$/
    if (regx.test(e2)) {
        document.getElementById("lable").innerHTML = "valid";
        document.getElementById("lable").style.visibility = "visible";
        document.getElementById("lable").style.color = "green";
    } else {
        document.getElementById("lable").innerHTML = "inValid";
        document.getElementById("lable").style.visibility = "visible";
        document.getElementById("lable").style.color = "red";
    }

}
var opacity = 0;
var ID = 0;

function fadeout() {
    ID = setInterval(hide, 20);
}
function hide() {
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity = opacity - 0.1;
        img.style.opacity = opacity;
    }
    else {
        clearInterval(ID);
    }
}
function fadein() {
    clearInterval(show, 20);
}
function show() {
    var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        img.style.opacity = opacity;
    }
    else {
        clearInterval(ID);
    }
}

var widt = 100;
var difference = 2;
var ID =0;

function incr() {
    clearInterval(ID);
    ID = setInterval(zoomIn, 20);
}
function zoomIn() {
    if(widt<200){
        widt = widt+difference;
        document.getElementById("img1").width = widt;
        console.log(widt);
    }
    else{
        clearInterval(ID);
    }

}
function decr() {
    clearInterval(ID);
    ID = setInterval(zoomOut, 20);
}
function zoomOut() {
    if(widt>100){
        widt = widt-difference;
        document.getElementById("img1").width = widt;
        console.log(widt);
    }
    else{
        clearInterval(ID);
        
    }

}
