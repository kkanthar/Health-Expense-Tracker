const expensesData = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));

//For average spending
let totalSpent = 0; 
let earliestDate = null;
let latestDate = null;

//Grouping spending by type
const totalsByType = {};

//Total spending per
let totalSpentDay = 0;
let totalSpentWeek = 0;
let totalSpentMonth = 0;
let totalSpentYear = 0;

/*
let totalSpentLastDay = 0;
let totalSpentLastWeek = 0; 
let totalSpentLastMonth = 0;
let totalSpentLastYear = 0;
*/


function sameWeek(now, dateToCheck){
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    if (dateToCheck >= startOfWeek && dateToCheck < endOfWeek){
        return true
    } else {
        return false
    }

}

/*

function sameLastWeek(now, dateToCheck){
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfLastWeek = new Date(startOfWeek);
    startOfLastWeek.setDate(startOfWeek.getDate() - 7);

    const endOfLastWeek = new Date(startOfWeek.getTime() - 1);
    endOfLastWeek.setDate(startOfWeek.getDate() - 7);

    if (dateToCheck >= startOfLastWeek && dateToCheck < endOfLastWeek){
        return true
    } else {
        return false
    }

}

*/
const now = new Date();
expensesData.forEach(expense => {
    
    const amount = parseFloat(expense.cost) || 0;
    const date = new Date(parseInt(expense.date));
    const type = expense.type;


    //For total spending
    

    if (now.getFullYear() === date.getFullYear() &&
           now.getMonth() === date.getMonth() &&
           now.getDate() === date.getDate()){
        totalSpentDay += amount;
    }
    if (sameWeek(now, date)){
        totalSpentWeek += amount;
    }
    if (now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()){
        totalSpentMonth += amount;
    }
    if (now.getFullYear() === date.getFullYear()){
        totalSpentYear += amount;
    }

    /*
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1)

    const lastMonth = new Date();
    lastMonth.setMonth(now.getMonth()-1);

    const lastYear = new Date();
    lastYear.setFullYear(now.getFullYear() - 1);

    if(yesterday.getFullYear() === date.getFullYear() &&
        yesterday.getMonth() === date.getMonth() &&
        yesterday.getDate() === date.getDate()){

        totalSpentLastDay += amount;

    } 
    if (sameLastWeek(now, date)){
        totalSpentLastWeek += amount;
    }
    if (lastMonth.getMonth() === date.getMonth() && lastMonth.getFullYear() === date.getFullYear()){
        totalSpentLastMonth += amount;
    }

    if (lastYear.getFullYear() === date.getFullYear()){
        totalSpentLastYear += amount;
    }

    */

    




    //For average spending year
    totalSpent += amount;

    if (!earliestDate || date < earliestDate){
        earliestDate = date.getFullYear(); 
    }
    if (!latestDate || date > latestDate){
        latestDate = date.getFullYear();
    }

    //Totals by type
    if (!totalsByType[type]) {
        totalsByType[type] = 0;
    }
    totalsByType[type] += amount;
})


//Initially calculate for monthly average spending

//Animation for counting up
function animateValue(obj, start, end, duration){
    var range = end - start;
    var minTimer = 50;
    //calculating how much time is needed for each number
    var stepTime= Math.abs(Math.floor(duration / range));

    //Check to not go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    //get current time and calculate end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        //This is will how much of range is completed i.e (78% done)
        var remaining = Math.max(Math.pow((endTime - now) / duration, 2), 0);
        //This will calculate the current value
        var value = (end - (remaining * range)).toFixed(2);
        obj.innerHTML = value;

        if (now >= endTime){
            obj.innerHTML = end.toFixed(2);
            clearInterval(timer);
        }

    }

    timer = setInterval(run, stepTime);
    run();
}

//---
const daysInCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const monthsPassedYear = now.getMonth() + 1;
const numberOfYears = (latestDate - earliestDate) + 1;


const averageMonthlySpending = totalSpentYear / monthsPassedYear;

//Set monthly spending
const spendingAverageInput = document.getElementById('averageSpendingCalculation');
animateValue(spendingAverageInput, 0, averageMonthlySpending, 700);

function calculateAverageSpending(text){
    let averageSpending = 0;


    if (text === 'Day'){
        averageSpending = totalSpentMonth / daysInCurrentMonth;
        

    } else if (text === 'Week'){
        averageSpending = totalSpentMonth / 4;

    } else if (text === 'Month'){
        if (monthsPassedYear > 0){
            averageSpending = totalSpentYear / monthsPassedYear;
        } else {
            averageSpending = 0; 
        }


    } else if (text === 'Year'){    
        if (numberOfYears > 0){
            averageSpending = totalSpentYear / numberOfYears;
        }

    }

    animateValue(spendingAverageInput, 0, averageSpending, 500);

}


//Spending Distribution Chart
const typeColors = {
    'Prescription': 'rgba(221, 37, 0, 0.7)',
    'Counter Medicine': 'rgba(255, 193, 7, 0.7)',
    'Check Up': 'rgba(76, 175, 80, 0.7)',
    'Insurance': 'rgba(33, 150, 243, 0.7)',
    'Other': 'rgba(158, 158, 158, 0.7)'
}
const labels = [];
const data = [];
const backgroundColors = [];
const borderColors = [];

const sortedTypes = Object.keys(totalsByType).sort();

sortedTypes.forEach(type => {
    labels.push(type);
    data.push(totalsByType[type]);

    const color = typeColors[type] || 'rgba(0, 0, 0, 0.6)';
    backgroundColors.push(color); 
    borderColors.push(color.replace('0.7)', '1)'));


})


Chart.defaults.font.family = "Archivo";
const ctx = document.getElementById('spendingDistribution').getContext('2d');

new Chart(ctx, {
    type: 'doughnut', 
    data: {
        labels: labels,
        datasets: [{
            label: 'Spending',
            data: data,
            backgroundColor: backgroundColors, 
            borderColor: borderColors,
            borderWidth: 3
        }]
    }, 
    options: {
        maintainAspectRatio: false,
        responsive: true, 
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
                
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }, 
        plugins: {
            tooltip: {
                animation: {
                    duration: 150
                },
                displayColors: false
            }
        }
    }
})

//Total Spending Per Day, Week, Month, Year
const totalSpendingDay = document.getElementById('totalSpendingInputDay');
const totalSpendingWeek = document.getElementById('totalSpendingInputWeek');
const totalSpendingMonth = document.getElementById('totalSpendingInputMonth');
const totalSpendingYear = document.getElementById('totalSpendingInputYear');

totalSpendingDay.innerText = totalSpentDay;
totalSpendingWeek.innerText = totalSpentWeek; 
totalSpendingMonth.innerText = totalSpentMonth;
totalSpendingYear.innerText = totalSpentYear;






