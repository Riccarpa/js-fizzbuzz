/*

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//stampa numeri 1-100

var listItems = '';

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        listItems += '<li>fizzbuzz </li>';
    } else if (i % 3 === 0) {
        console.log('fizz');
        listItems += '<li>fizz </li>';
    } else if (i % 5 === 0) {
        console.log('buzz');
        listItems += '<li>buzz</li>';
    } else {
        console.log(i);
        listItems += '<li>' + i + '</li>';
    }

}


//stamp
stamp = document.getElementById('stamp');
stamp.innerHTML = listItems;