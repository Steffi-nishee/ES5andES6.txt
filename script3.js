// For given JSON iterate overall forloops( for,forin, for of forEach)

var a = [{"firstName":"steffi","lastName":"Nishee","id":"asndjsdk@gamil.com","state":"TamilNadu"},
{"firstName":"Gipson","lastName":"Singh","id":"fdkfldjik@gmail.com","state":"TamilNadu",},
{"firstName":"Subbu","lastName":"Lakshmi","id":"cvvfgffdfgk@gmail.com","state":"TamilNadu"}]

//forEach

a.forEach(function(obj) { console.log(obj.firstName); 
    console.log(obj.lastName);
});