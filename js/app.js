'use strict'
//the hours array
const hours =[
'6 AM',
'7 AM',
'8 AM',
'9 AM',
'10 AM',
'11 AM',
'12 PM',
'1 PM',
'2 PM',
'3 PM',
'4 PM',
'5 PM',
'6 PM',
'7 PM'
];

// global array
let shops = []; 

// RAMDOM FUNCTION NUMBER GENERATOR
function randomNum(min, max) {
return 	Math.floor(Math.random()*(max - min +1)+min)
}
 

function shop(locationName, mincustomers , maxcustomers, avgcookies){
this.locationName= locationName;
this.mincustomers=mincustomers ;
this.maxcustomers=maxcustomers;
this.avgcookies=avgcookies;

this.customersEachHour= [];
this.cookiesEachHour=[];
this.totalCookiesPreDay=0;

shops.push(this);

}

shop.prototype.calcCustomerEachHour=function(){
for (let i=0; i<hours.length; i++){
this.customersEachHour.push(randomNum(this.mincustomers,this.maxcustomers));
}
// console.log(this.customersEachHour);
}

shop.prototype.calcCookiesEachHour=function(){
    for (let i= 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.avgcookies * this.customersEachHour[i]));

        // total cookies
        this.totalCookiesPreDay+=this.cookiesEachHour[i];


        
    }
    // console.log(this.cookiesEachHour);
}


let seattle = new shop('seattle',23, 56, 6.3);
let tokoy = new shop('Tokyo', 3, 24, 1.2);
let dubai = new shop('Dubai', 11, 38, 3.7);
let paris =new shop('Pris', 20, 38, 2.3);
let lima = new shop('Lima', 2, 16, 4.6);
// seattle.calcCustomerEachHour();
// seattle.calcCookiesEachHour();


// for (let i = 0; i < shops.length; i++) {
//     shops[i].calcCustomerEachHour();
//     shops[i].calcCookiesEachHour();

// }
// console.log(shops);


//dom
// get the parent
let parent = document.getElementById('parent');
console.log(parent);


let table =document.createElement('table');
parent.appendChild(table);


// seperat header function
function makeHeader(){
    let headerRow=document.createElement('tr');
    table.appendChild(headerRow);

  let firstTh=document.createElement('th'); 
  headerRow.appendChild(firstTh);
   
 firstTh.textContent='NAME';
// to print the hours
for (let i = 0;i < hours.length;i++) {
    let thElement=document.createElement('th');
    headerRow.appendChild(thElement);
 /// hours [0]==>
 thElement.textContent=hours[i];

 }
 let lastTh=document.createElement('th');
 headerRow.appendChild(lastTh);
 lastTh.textContent = 'Daily location Total';
}

makeHeader();

// the table data 
shop.prototype.render=function(){
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);

    let nameData=document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent=this.locationName;


// looping through the hour to creat 14 td
    for (let i = 0; i < hours.length; i++) {
       let tdElement=document.createElement('td');
       dataRow.appendChild(tdElement);
        
       tdElement.textContent= this.cookiesEachHour[i];
    }
    let totalDataForEachShop=document.createElement('td');
    dataRow.appendChild(totalDataForEachShop);
    totalDataForEachShop.textContent = this.totalCookiesPreDay;


}


for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustomerEachHour();
    shops[i].calcCookiesEachHour();
    shops[i].render();

}
console.log(shops);



//// table footer

function makFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);


    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = 'Total';

    for (let i = 0; i < hours.length; i++) {
        let totalEachHour=0;

        for (let j = 0; j < shops.length; j++) {
            totalEachHour+=shops[j].cookiesEachHour[i];
            
        }
        let footerThTotal=document.createElement('th');
        footerRow.appendChild(footerThTotal);
        footerThTotal.textContent= totalEachHour;
    }
}

makFooter();