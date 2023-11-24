// For given JSON iterate overall forloops( for,forin, for of forEach)
var a = [{"name":{"firstName":"steffi","lastName":"Nishee","id":"asndjsdk@gamil.com","state":"TamilNadu"}},
{"name":{"firstName":"Gipson","lastName":"Singh","id":"fdkfldjik@gmail.com","state":"TamilNadu",}},
{"name":{"firstName":"Subbu","lastName":"Lakshmi","id":"cvvfgffdfgk@gmail.com","state":"TamilNadu"}}]

//forin
for (var key in a) {
    if (a.hasOwnProperty(key)) {
        console.log(a[key].name.firstName);
        console.log(a[key].name.lastName);
        console.log(a[key].name.state);
        
    }
}
       
      