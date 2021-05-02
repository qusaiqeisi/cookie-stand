'use strict';
let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 let avaregcookesforcustmer = [];
let Seattle = {

    name: 'Seattle',
    maxcustmerhourly: 65,
    mincustmerhourly: 23,
    avaregcookes: 6.3,
    // avaregcookesforcustmer: [],
    getCookies: function () {
        for (let i = 0; i < hour.length; i++) {

            avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    },

    render : function () {
        let listOne = document.getElementById('seatle');
        let par =document.createElement('p');
        par.textContent=this.name; 
        listOne.appendChild(par);
        let ulElemant = document.createElement('ul');
        listOne.appendChild(ulElemant);
        for (let i =0 ;  i< hour.length; i++) {
            let liElemant = document.createElement('li');
            ulElemant.appendChild(liElemant);
            // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
            //     document.write(avaregcookesforcustmer[j]);
            // }
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
        }
    }
}


 
 

Seattle.getCookies();
Seattle.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


///////////////////////////////////////////////////


// let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  let avaregcookesforcustmer = [];
let Tokyo = {

    name: 'Tokyo',
    maxcustmerhourly: 24,
    mincustmerhourly: 3,
    avaregcookes: 1.2,
    // avaregcookesforcustmer: [],
    getCookies: function () {
        for (let i = 0; i < hour.length; i++) {

            avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    },

    render : function () {
        let listOne = document.getElementById('seatle');
        let par =document.createElement('p');
        par.textContent=this.name; 
        listOne.appendChild(par);
        let ulElemant = document.createElement('ul');
        listOne.appendChild(ulElemant);
        for (let i =0 ;  i< hour.length; i++) {
            let liElemant = document.createElement('li');
            ulElemant.appendChild(liElemant);
            // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
            //     document.write(avaregcookesforcustmer[j]);
            // }
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
        }
    }
}


 
 

Tokyo.getCookies();
Tokyo.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

///////////////////////////////////////////////////
let Dubai = {

    name: 'Dubai',
    maxcustmerhourly: 38,
    mincustmerhourly: 11,
    avaregcookes: 3.7,
    // avaregcookesforcustmer: [],
    getCookies: function () {
        for (let i = 0; i < hour.length; i++) {

            avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    },

    render : function () {
        let listOne = document.getElementById('seatle');
        let par =document.createElement('p');
        par.textContent=this.name; 
        listOne.appendChild(par);
        let ulElemant = document.createElement('ul');
        listOne.appendChild(ulElemant);
        for (let i =0 ;  i< hour.length; i++) {
            let liElemant = document.createElement('li');
            ulElemant.appendChild(liElemant);
            // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
            //     document.write(avaregcookesforcustmer[j]);
            // }
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
        }
    }
}


 
 

Dubai.getCookies();
Dubai.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}
////////////////////////////////////////////////////


let Paris = {

    name: 'Paris',
    maxcustmerhourly: 38,
    mincustmerhourly: 20,
    avaregcookes: 2.3,
    // avaregcookesforcustmer: [],
    getCookies: function () {
        for (let i = 0; i < hour.length; i++) {

            avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    },

    render : function () {
        let listOne = document.getElementById('seatle');
        let par =document.createElement('p');
        par.textContent=this.name; 
        listOne.appendChild(par);
        let ulElemant = document.createElement('ul');
        listOne.appendChild(ulElemant);
        for (let i =0 ;  i< hour.length; i++) {
            let liElemant = document.createElement('li');
            ulElemant.appendChild(liElemant);
            // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
            //     document.write(avaregcookesforcustmer[j]);
            // }
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
        }
    }
}


 
 

Paris.getCookies();
Paris.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


//////////////////////////////////////////////

let Lima = {

    name: 'Lima',
    maxcustmerhourly: 16,
    mincustmerhourly: 2,
    avaregcookes: 4.6,
    // avaregcookesforcustmer: [],
    getCookies: function () {
        for (let i = 0; i < hour.length; i++) {

            avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    },

    render : function () {
        let listOne = document.getElementById('seatle');
        let par =document.createElement('p');
        par.textContent=this.name; 
        listOne.appendChild(par);
        let ulElemant = document.createElement('ul');
        listOne.appendChild(ulElemant);
        for (let i =0 ;  i< hour.length; i++) {
            let liElemant = document.createElement('li');
            ulElemant.appendChild(liElemant);
            // for (let j=0 ; j<avaregcookesforcustmer.length; j++){
            //     document.write(avaregcookesforcustmer[j]);
            // }
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookies`
            
        }
    }
}


 
 

Lima.getCookies();
Lima.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

//////////////////////////////////////////////


