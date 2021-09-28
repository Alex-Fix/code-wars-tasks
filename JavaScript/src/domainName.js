/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    const schemeIndex = url.indexOf("//");
    if(schemeIndex != -1) {
        url = url.substring(schemeIndex + 2, url.length);
    }

    if(url.startsWith("www.")) {
        url = url.substring(4, url.length);
    }

    return url.split(".")[0];
}