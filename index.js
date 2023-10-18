const users = [
    {
        name: "Mark",
        age: 19,
        city: ["Tbilisi", "London", "Rome", "Berlin"],
        payments: [120, 200, 150, 140]
    },
    {
        name: "Bob",
        age: 21,
        city: ["Miami", "Moscow", "Vienna", "Riga", "Kiev"],
        payments: [90, 240, 100, 76, 123]
    },
    {
        name: "Sam",
        age: 22,
        city:["Tbilisi", "Budapest", "varsava", "vilnius"] ,
        payments: [118, 95, 210, 236]
    },
    {
        name : "Anna",
        age: 20,
        city:["New York", "Athens", "Sidney", "Tokio"],
        payments:[100, 240, 50, 190]
    },
    {
        name : "Alex",
        age:23,
        city: ["Paris", "Tbilisi", "Madrid", "Marseille", "Minsk"],
        payments: [96, 134, 76, 210, 158]
    }
];

function isAdult(users){
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 21) {
        users[i].adult = true;
    }
}
}
isAdult(users)

function Georgia(users) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].city.includes("Tbilisi")) {
        users[i].wereInGeorgia = "yes";
      }
    }
  } 
  Georgia(users);
  
   function totalPayments(users) {
    users.forEach(user => {
        const total = user.payments.reduce((total, amount) => total + amount, 0);
        user.totalPayments = total;
    });
}
totalPayments(users);

let theMostSpend = null;
let PaymentAmount = 0;

users.forEach(user => {
    if (user.totalPayments > PaymentAmount) {
        PaymentAmount = user.totalPayments;
        theMostSpend = user;
    }
});

if (theMostSpend) {
    console.log(`User ${theMostSpend.name} spent the most`);
} 

console.log(users);