const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "03/9/2023" };
const day2 = { donations: [donation3, donation4, donation5], date: "03/10/2023" };

const dailyRecord = [day1, day2];

//1. use for loop in a function,dailyTotal to find the total amount donated for a given day 
console.log("expect 21:", dailyTotal(day2.donations));
function dailyTotal(donations) {
    let total = 0;
    for (let i = 0; i < donations.length; i++) {
        total += donations[i].amount;
    }
    return total;
}

//2. use reduce in a function,dailyTotalReduce,to find the total amount donated for a given day.

// function dailyTotalReduce(donations){
//     return donations.reduce(());
// }
//console.log("expect 110.",dailyTotalReduce(day1.donations));


//3.write a function totalDonations using a for loop what will find the total donations across all days in the dailyRecord array.
console.log("expect 131:",totalDonations(dailyRecord));
function totalDonations(dailyRecord) {
    let totalDonation = 0;
    for (const day of dailyRecord) {
        totalDonation += dailyTotal(day.donations);
    }
    return totalDonation;
}

//4. write a function,findBigDonations,that will return an array with all the dates that daily donations exceeded the maximum amount
//goal.Each entry in the array should be an object that contains the date,and the total amount donated.The second parameter for your function should
//be the maximum amount goal.For the example below,the result should return the date and amounts for every donations that had an amount>10.
//in this example those are donation 1 and 2.

function findBigDonations(dailyRecord,maxAmount){
    let bigDonations=[];
    for(const day of dailyRecord){
        for(const donation of day.donations){
            if(donation.amount>maxAmount){
                bigDonations.push({day:day.date,amount:donation.amount});
            }
        }
        return bigDonations;
    }
}
console.log(`expect[{day:"03/9/2023",amount:100}]),
{day:"03/10/2023",amount:15}:`,findBigDonations(dailyRecord,10));


  //5.  write a function, sortByAverage,that sorts the daily records by average donation in ascending order.

  function sortByAverage(dailyRecord){
    let sortByAverage=[];
    for(const day of dailyRecord){
       for(const donation of day.donations){
        sortByAverage.push[donation.amount];
       }
    }
    return sortByAverage.sort();
  }
console.log(sortByAverage());

