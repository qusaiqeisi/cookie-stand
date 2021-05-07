
// 'use strict';
// let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  let avaregcookesforcustmer = [];

'use strict';
let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 let avaregcookesforcustmer = [];

// let Seattle = {

//     name: 'Seattle',
//     maxcustmerhourly: 65,
//     mincustmerhourly: 23,
//     avaregcookes: 6.3,


//     total : 0,

//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`

            

        

//         }
//     }
// }



 
 

// Seattle.getCookies();
// Seattle.render(); 

// Seattle.getCookies();
// Seattle.render(); 



// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }


// ///////////////////////////////////////////////////


// // let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
// //  let avaregcookesforcustmer = [];
// let Tokyo = {

//     name: 'Tokyo',
//     maxcustmerhourly: 24,
//     mincustmerhourly: 3,
//     avaregcookes: 1.2,
//     // total:0,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }

//         // let totalItem = document.createElement('li');
//         // unorderedList.appendChild(totalItem);
//         // totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }


// // let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
// //  let avaregcookesforcustmer = [];
// let Tokyo = {

//     name: 'Tokyo',
//     maxcustmerhourly: 24,
//     mincustmerhourly: 3,
//     avaregcookes: 1.2,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {


//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }


 

// Tokyo.getCookies();
// Tokyo.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// ///////////////////////////////////////////////////
// let Dubai = {

//     name: 'Dubai',
//     maxcustmerhourly: 38,
//     mincustmerhourly: 11,
//     avaregcookes: 3.7,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }


 
 

// Dubai.getCookies();
// Dubai.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }
// ////////////////////////////////////////////////////


// let Paris = {

//     name: 'Paris',
//     maxcustmerhourly: 38,
//     mincustmerhourly: 20,
//     avaregcookes: 2.3,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }


 
 

// Paris.getCookies();
// Paris.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// Tokyo.getCookies();
// Tokyo.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// ///////////////////////////////////////////////////
// let Dubai = {

//     name: 'Dubai',
//     maxcustmerhourly: 38,
//     mincustmerhourly: 11,
//     avaregcookes: 3.7,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }



 
 

// Dubai.getCookies();
// Dubai.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }
// ////////////////////////////////////////////////////


// let Paris = {

//     name: 'Paris',
//     maxcustmerhourly: 38,
//     mincustmerhourly: 20,
//     avaregcookes: 2.3,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }

// //////////////////////////////////////////////

// let Lima = {

//     name: 'Lima',
//     maxcustmerhourly: 16,
//     mincustmerhourly: 2,
//     avaregcookes: 4.6,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {


//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));



// Paris.getCookies();
// Paris.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }


// //////////////////////////////////////////////

// let Lima = {

//     name: 'Lima',
//     maxcustmerhourly: 16,
//     mincustmerhourly: 2,
//     avaregcookes: 4.6,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },


//         }

//     },


//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
//             //     document.write(avaregcookesforcustmer[j]);
//             // }
//            liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
//         }
//     }
// }


 
 

// Lima.getCookies();
// Lima.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }


// //////////////////////////////////////////////


////////////////////////////////////////Seattle///////////////////////
'use strict';
// the hours array [working times for the franchises ]
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    locationName: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }


//////////////////////////////////////////////


function City(name, maxcustmerhourly, mincustmerhourly,avaregcookes, opentime, closedtime) {
    
    this.name = name;
    this.maxcustmerhourly = maxcustmerhourly;
    this.mincustmerhourly = mincustmerhourly;
    this.avaregcookes = avaregcookes;
    this.opentime = opentime;
    this.closedtime = closedtime;
    // I will build a prototype of it 
    // this.swim = function() {
    //     console.log('Hello I am ' + this.name + ' and I am swimming');
    // }
}

///////
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(seattle);
seattle.calcCustomersEachHour();
seattle.calcCookiesEachHour();
seattle.renderFunction();


///////////////////////////////////////////tokoy//////////////////////////////////////

const tokyo = {
    locationName: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

tokyo.calcCustomersEachHour();
tokyo.calcCookiesEachHour();
tokyo.renderFunction();


///////////////////////////////////dubai////////////////////////////////
const dubai = {
    locationName: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

dubai.calcCustomersEachHour();
dubai.calcCookiesEachHour();
dubai.renderFunction();

////////////////////////////////////////paris/////////////////////////////


const paris = {
    locationName: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

paris.calcCustomersEachHour();
paris.calcCookiesEachHour();
paris.renderFunction();


////////////////////////////////lima///////////////////////////////////

const lima = {
    locationName: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersEachHour: [],
    cookiesEachHour: [],
    total: 0,

    // calculate a random number of customers every hour
    calcCustomersEachHour: function() {
        for (let i = 0; i < hours.length; i++) {

            // this.customersEachHour[i] = (random(this.minCustomers, this.maxCustomers));
            this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
        }
    },
    calcCookiesEachHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
            //    the total
            this.total += this.cookiesEachHour[i];
        }

    },
    renderFunction: function() {
        // get the parent element
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
        // give it a text content
        shopName.textContent = this.locationName;

        // create new element UL
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

        // creating li items
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
            // 6am: 16 cookies
            listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies.`

        }
        // create element for the total
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

lima.calcCustomersEachHour();
lima.calcCookiesEachHour();
lima.renderFunction();

let theParent = document.getElementById('market profiles');

Kitten.prototype.tableRender = function() {

    let table = document.createElement('table');
    theParent.appendChild(table);
    console.log(theParent);

    let headRow = document.createElement('tr');
    table.appendChild(headRow);
    // the header
    let th1 = document.createElement('th');
    headRow.appendChild(th1);
    th1.textContent = 'seattle';

    let th2 = document.createElement('th');
    headRow.appendChild(th2);
    th2.textContent = 'tokoy';

    let th3 = document.createElement('th');
    headRow.appendChild(th3);
    th3.textContent = 'Good with Dogs';

    // rows for the values
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    // td

    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.isGoodWithKids;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.isGoodWithCats;


    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = this.isGoodWithDogs;


////////////////////////////////thnaks/////////////////////



