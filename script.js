// For given JSON iterate overall forloops( for,forin, for of forEach)

var a = [{"name":{"firstName":"steffi","lastName":"Nishee","id":"asndjsdk@gamil.com","state":"TamilNadu"}},
{"name":{"firstName":"Gipson","lastName":"Singh","id":"fdkfldjik@gmail.com","state":"TamilNadu",}},
{"name":{"firstName":"Subbu","lastName":"Lakshmi","id":"cvvfgffdfgk@gmail.com","state":"TamilNadu"}}]

//for
for(var i = 0; i < a.length; i++) {
    var obj = a[i];
    var firstName = a[i].name.firstName;
    var lastName = a[i].name.lastName;
    var id =a[i].name.id;
    var state =a[i].name.state
    console.log("firstName:"+firstName);
    console.log("lastName:"+lastName);
    console.log("id:"+id);
    console.log("state:"+state);
}  


