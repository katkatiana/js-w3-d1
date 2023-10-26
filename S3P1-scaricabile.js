/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazySum = function (x, y) {
  let finalSum = 0;
  if ((x ===y)) {
    finalSum = (x + y) * 3;
  } else {
    finalSum = x + y;
  }
  return finalSum;
};

let sum = crazySum(4, 8);
console.log("This is a normal sum ", sum)
sum = crazySum(5, 5);
console.log("This is a crazy sum ", sum)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let boundary = function (i) {
  let number;
  if (((i>20) && (i<=100)) || (i === 400)) {
    number = true;
  } else {
    number = false
  }
  return number;
};

let finalNumber = boundary(400);
console.log("Since this number is equal to 400 ", finalNumber);
finalNumber = boundary(344)
console.log("Since this number is not what we wanted ", finalNumber);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let reverseString = function (a) {
  let arrEpi = a.split("");
  let arrReversed = ""
  for (i = arrEpi.length -1; i >= 0; i--) {
    arrReversed += arrEpi[i]
  }
  return arrReversed;
}

let finalValue = reverseString("EPICODE")
console.log(finalValue)
finalValue = reverseString("Pare che funzioni")
console.log(finalValue)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//ipotesi: la stringa di ingresso deve essere formata da parole delimitate da uno spazio
let upperFirst = function(s) {
    let arr = s.split(" ");
    for (i = 0; i < arr.length; i++) {
        let a = arr[i].charAt(0).toUpperCase();
        let b = arr[i].slice(1);
        let c = a + b
        arr[i] = c
    }
    return arr.join(" ")
    
}
let d = upperFirst("bambola")
console.log(d)
d = upperFirst("credo che funzioni")
console.log(d)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom = function(n) {
  let arrNum = Array(n)
  for(i = 0; i < arrNum.length; i++) {
    arrNum[i] = Math.floor(Math.random() * 10)
  }
  return arrNum
}

console.log("Here are some random numbers: ", giveMeRandom(4))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let areaDelRettangolo = function (l1, l2) {
  let areaResult
  if((l1>l2) || (l2>l1)) {
    areaResult = l1*l2
  } else {
    areaResult = null, console.log("This is not a rectangle")
  }
  return areaResult;
};
let rettangolo;
rettangolo = areaDelRettangolo(2, 7)
console.log(rettangolo);
rettangolo = areaDelRettangolo(14, 6)
console.log(rettangolo);
rettangolo = areaDelRettangolo(3, 3)
console.log(rettangolo);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazyDiff = function(x) {
    const y = 19;
    let firstDiff = 0;
    let val
    if (x > y) { //differenza assoluta
        firstDiff = x - y
    } else {
        firstDiff = y - x
    }

    if (firstDiff > y) {
        val = firstDiff * 3
    } else {
        val = firstDiff
    }
    return val
}

let v = crazyDiff(9)
console.log("This is a normal difference ", v)
v = crazyDiff(68)
console.log("This is a crazy difference ", v)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let codify = function (string) {
  let stringResult
  if (string.startsWith("code")) {
      stringResult = string
  } else {
    stringResult = "code " + string
  }
  return stringResult
}
let codeTry = codify ("let's hope the first word will be code")
console.log(codeTry)
codeTry = codify("code, and now please do not repeat it")
console.log(codeTry)
codeTry = codify ("last try")
console.log(codeTry)
codeTry = codify("code, very last try")
console.log(codeTry)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let check3and7 = function (positivo) {
  if ((positivo % 3 === 0) || (positivo % 7 === 0)) {
    positivo = true;
  } else {
    positivo = false
  }
  return positivo;
};
console.log("This is a multiple of 7: ", check3and7(49))
console.log("This is a multiple of 3: ", check3and7(9))
console.log("This is undesired: ", check3and7(13))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cutString = function (string) {
  let arrString = string.slice(1, -1)
  return arrString
}

let alu = cutString("taglia iniziale e finale")
console.log(alu)
alu = cutString("prova")
console.log(alu)
