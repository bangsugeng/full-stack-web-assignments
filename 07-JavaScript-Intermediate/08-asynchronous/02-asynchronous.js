const isR18Plus = (age) => {
    const tmp = age > 18;
    return new Promise((resolve, reject) => {
        if(tmp){
            resolve("Anda sudah dewasa");
        } else{
            reject("anda masih dibawah umur");
        }
    })
}

const printR18Plus = async () => {
    const underAge = await isR18Plus(10).then(tmp => tmp).catch(tmp => tmp);
    const properAge = await isR18Plus(19).then(tmp => tmp).catch(tmp => tmp);

    console.log(underAge);
    console.log(properAge);
}

printR18Plus();