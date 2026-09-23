//* Basic url
// const url = require("url");

// let address = "http://localhost:8080/default.htm?year=2017&month=february";
// console.log(url.parse(address,true));
// console.log(url.parse(address,true).hostname);


//* Using the WHATWG URL API (recommended for new code)
// const { URL } = require("url");

// const myUrl = new URL("https://example.org:8080/p/a/t/h?query=string#hash");
// console.log(myUrl);
// console.log(myUrl.hostname);
// console.log(myUrl.host);
// console.log(myUrl.searchParams.get("query"));


//* Using the legacy API
// const url = require("url");

// const myUrl = "https://example.org:8080/p/a/t/h?query=string#hash";
// const parsedUrl = url.parse(myUrl);

// console.log(parsedUrl);


//* URLSearchParams API
// const { URL, URLSearchParams } = require("url");

// const myURL = new URL('https://example.com/?name=Kai&age=30');
// const params = new URLSearchParams(myURL.search);

// console.log(params.get("name"));

// params.append('city', 'Stavanger');


//* Validate and Sanitize URLs
const {URL} = require("url");

function isValidHttpUrl(string){
    try{
        const url = new URL(string);
        return url.protocol === "http" || url.protocol === "https";
    }
    catch(error){
        return false;
    }
}
console.log(isValidHttpUrl("https://example.com"));