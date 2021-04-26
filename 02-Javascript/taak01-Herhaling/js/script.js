let strNaam;
let boolNaamKlopt;
// vraag de gebruiker om zijn naam
prompt("Hoe heet je?"); 

// vraag de gebruiker om zijn naam én sla de opgegeven naam op in strNaam
strNaam = prompt("Hoe heet je?");

// toon een alertbox. Gebruiker kan alleen op OK drukken. Let op de string samenvoeging.
alert("Je heet " + strNaam); 

// toon een-confirm box (gebruiker kan op OK of Cancel drukken). Als de gebruiker op OK drukt, wordt er TRUE opgeslagen in de boolNaamCorrect variabele. Als Cancel dan FALSE.
boolNaamCorrect = confirm("Heet je echt" + strNaam +"?"); 