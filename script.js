do {
    var kaina = prompt("Įveskite prekės kainą.")
kaina = Number(kaina)
} while(isNaN(kaina) || kaina <= 0)

console.log("Prekės kaina: " + kaina + "€")

if (kaina < 60) {
  Pristatymas = 5
} else Pristatymas = 0

var sutikimas = confirm ("Ar reikalingas pristatymas į namus?")
 if (sutikimas){
    var miestas = prompt("Į kokį miestą reikės pristatyti?");
    alert("Prekės kaina: " + kaina + "€. " + "Pristatymas: " +  Pristatymas + "€. " + "Iš viso: " + (kaina + Pristatymas) + "€. "
 + "Pristatymas į " + miestas + " per 1-3 dienas")
   }
 else {
     alert("Prekės kaina: " + kaina + "€. " + "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}



