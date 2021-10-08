export function validateLoginData(email,pass){
    const regexEmail = /^[A-Za-z.]+[\w\d]+@\w+\.\w+/;
    const regexPassword = /[A-Za-z\d-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}/;
    const regexCapital = /[A-Z]/
    const regexSmall = /[a-z]/
    const regexNumber = /[0-9]/
    const regexSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
    let message;

    if(!email.match(regexEmail)){
        message = "tolong masukan email yang valid";
    }
    else if(pass.match(regexPassword) &&
            pass.match(regexCapital) &&
            pass.match(regexSmall) &&
            pass.match(regexNumber) &&
            pass.match(regexSymbol)){
        message = "Welcome to The Jungle";
    }
    else{
        message = "tolong masukan password sesuai ketentuan";
    }
    alert(message);
    return message;
}