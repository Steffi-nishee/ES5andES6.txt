// For given JSON iterate overall forloops( for,forin, for of, forEach)
students=[{"name":{"firstName":"steffi","lastName":"Nishee"}},{"id":"asndjsdk@gamil.com","state":"TamilNadu"},
{"name":{"firstName":"Gipson","lastName":"Singh"}},{"id":"fdkfldjik@gmail.com","state":"TamilNadu",},
{"name":{"firstName":"Subbu","lastName":"Lakshmi"}},{"id":"cvvfgffdfgk@gmail.com","state":"TamilNadu"}]

//forof
for (const name of students){
    console.log(name);
}