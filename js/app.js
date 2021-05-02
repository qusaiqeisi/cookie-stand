'use strict';
let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '13PM' , '14PM' , '15PM' , '16PM' , '17PM' , '18PM' , '19PM']
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
           liElemant.textContent = `${hour[i]}:${avaregcookesforcustmer[i]} cookes`
            
        }
    }
}


 
 

Seattle.getCookies();
Seattle.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


