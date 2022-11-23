const context=document.getElementById("dataset").getContext("2d");
let line=new Chart(context, {});
//Values from html
const initialAmount=document.getElementById("initialamount");
const years=document.getElementById("investmentyears");
const rates=document.getElementById("rates");
const compound=document.getElementById("compound");

//The Calculate Button
const button = document.querySelector(".input-group button");


button.addEventListener("click", calculateGrowth);

const data=[];
const labels =[];
function calculateGrowth(e){
    e.preventDefault(); 
data.length=0;
labels.length=0;
    try {
        const initial = parseInt(initialAmount.value);
        const period = parseInt(years.value);
        const interest = parseInt(rates.value);
        const comp = parseInt(compound.value);

        for(let i=1; i<=period; i++)
        {
            const final=(initial)*Math.pow((1+((interest/100)/comp)), comp*i);
            data.push(final);
            labels.push("Year "+ i);
        }
        drawGraph();
    } catch (error) {
        console.error(error); 
    }
}
function drawGraph(){
    line.destroy();
    line = new Chart(context, {
        type:'line',
        data: {
            labels,
            datasets: [{
                labels: 'compound',
                data,
                fill: true,
                backgroundColor: "rgba(12, 141, 0, 0.7)",
                borderWidth: 3,
        }]
    } 
    });
}
function toDecimal(value, decimals)
{
    return +value.toFixed(decimals);
}