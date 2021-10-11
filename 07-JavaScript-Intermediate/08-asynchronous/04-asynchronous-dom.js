const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async( str ) => { 
    try {
        if (!str) {
            return null;
        }
        const check = await fetch("https://api.github.com/users/"+str);
        let tmp = await check.json();
        if (tmp?.login) {
            return tmp;
        }
        return {login:"Not Found"};
    } catch (error) {
        throw (error);
    }
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();

    // console.log(elFormUsername.firstElementChild.value);
    const curr = await getGitHubUser(elFormUsername.firstElementChild.value);
    console.log(curr);
    elCardTitle.innerText =curr.login;
    if(curr.id){
        elCardImg.src = curr.avatar_url;
        elCardBtn.classList.remove("d-none");
        elCardImg.classList.remove("d-none");
    }
    else{
        elCardBtn.classList.add("d-none");
        elCardImg.classList.add("d-none");
    }
    elCard.classList.remove("d-none");
};