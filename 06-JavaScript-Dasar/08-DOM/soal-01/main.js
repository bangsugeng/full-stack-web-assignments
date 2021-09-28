const card = document.querySelectorAll(".card");

console.log(card.length);

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", tes);
    console.log("for");
}

function tes(e){
    const baru = document.createElement("p");
    baru.innerText = "tes";

    document.querySelector("#modal-title").innerText = 
        this.querySelector(".card-title").innerText;
    document.querySelector("#modal-text").innerText = 
        spasi(this.querySelector(".card-text").innerText);
    document.querySelector("#modal-image").src = 
        this.querySelector(".card-img-top").getAttribute("src");
}

function spasi(str){
    for(let i = 0; i<str.length;i++){
        if(str[i] == '\n'){
            str = str.slice(0,i) + str.slice(i+1);
        }
    }
    return str;
}