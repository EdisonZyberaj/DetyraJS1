//Detyra JS
// Krijimi i nje objekti person
let person = {
    name: "Edison Zyberaj",
    balance: 1000
};
//percaktimi i funksionit withdraw qe duke shqyrtuar balancen e llogarise na tregon
//nese mund te kryhet veprimi withdraw
function withdraw(person, amount) {
    if (amount > person.balance) {
        console.log("withdrawal cannot be processed due to insufficient funds.");
    } else {
        person.balance = person.balance - amount;
        console.log(`Withdrawal of $${amount} is done successfully. Remaining balance: $${person.balance}.`);
    }
}
//testimi i funksionit te krijuar
withdraw(person, 500); //ekzekutohen instruksionet brenda else
withdraw(person, 700); //ekzekutohen instruksionet brenda if passi balaca zvogelohet 
//pas thirrjes se funksonit te pare
