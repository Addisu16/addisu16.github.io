"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/
export const bank = {

};
transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    /* make sure current balance is > amount */
    //IMPLEMENT THIS
    const currentBalance = this.getBalance(id);
   if (currentBalance > amount) {
    customer.customerTransactions.push(-amount);
  }
};

bank.credit=function(id, amount) {
    this.saveTransaction(id, amount);
};

bank.getBalance = function (id) {
    //IMPLEMENT THIS
    const customer=bank.transactionsDB.find(customer=>customer.customerId===id);
    let totalAmt=0;
    for(const amt of customer.customerTransactions){

       totalAmt+=amt;
    }
    return totalAmt;

};
/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    let bankBalance=0;
    for(const customer of this.transactionsDB){
        bankBalance+=this.getBalance(customer.customerId);
    }
    return bankBalance;
    
//IMPLEMENT THIS
};
console.log("expect 55: ",bank.getBalance(3));

function Comparator(bal1,bal2){
    return bal1.gid-bal2.gid;

}




/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports= {bank }; //add all of your object names here that you need for the node mocha tests

