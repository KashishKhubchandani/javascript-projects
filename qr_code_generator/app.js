let api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qr-img");
let qrText = document.getElementById("qrText");



function generateQR(){

    if(qrText.value.length > 0){

    qrImg.src = api_url + qrText.value;
    imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }

}