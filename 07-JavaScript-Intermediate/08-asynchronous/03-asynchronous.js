import fetch from 'node-fetch';

const getGitHubUser = async( str ) => { 
    try {
        if (!str) {
            return null;
        }
        const check = await fetch("https://api.github.com/users/"+str);
        let tmp = await check.json();
        if (tmp.id) {
            return tmp;
        }
        return "Not Found";
    } catch (error) {
        throw (error);
    }
}

const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();