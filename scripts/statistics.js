const expensesData = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));

//For average spending
let totalSpent = 0; 
let earliestDate = null;
let latestDate = null;

//Grouping spending by type
const totalsByType = {};

expensesData.forEach(expense => {
    const amount = parseFloat(expense.cost) || 0;
    const date = new Date(expense.date);
    const type = expense.type;


    //For average spending
    totalSpent += amount;

    if (!earliestDate || date < earliestDate){
        earliestDate = date; 
    }
    if (!latestDate || date > latestDate){
        latestDate = date;
    }

    //Totals by type
    if (!totalsByType[type]) {
        totalsByType[type] = 0;
    }
    totalsByType[type] += amount;
})


//Initially calculate for monthly average spending
//Since date gives me in miliseconds I have to convert to appropriate unit of measure
const daysBetween = Math.floor((latestDate - earliestDate)/(1000 * 60 * 60 * 24));
const weeksBetween = Math.floor((latestDate-earliestDate)/(1000 * 60 * 60 * 24 * 7));
const monthsBetween = (latestDate.getFullYear() - earliestDate.getFullYear()) * 12 + (latestDate.getMonth() - earliestDate.getMonth()) + 1;
const yearsBetween = (latestDate.getFullYear() - earliestDate.getFullYear()) + 1;

let averageMonthlySpending = null;
if (monthsBetween > 0){
    averageMonthlySpending = totalSpent/monthsBetween;    
}

//Set monthly spending
const spendingAverageInput = document.getElementById('averageSpendingCalculation');
spendingAverageInput.innerText = averageMonthlySpending.toFixed(2);

function calculateAverageSpending(text){
    let averageSpending = null;
    if (text === 'Day'){
        if (daysBetween > 0){
            averageSpending = totalSpent/daysBetween;
        }
        

    } else if (text === 'Week'){
        if (weeksBetween > 0){
            averageSpending = totalSpent/weeksBetween;

        }

    } else if (text === 'Month'){
        averageSpending = averageMonthlySpending;


    } else if (text === 'Year'){
        if (yearsBetween > 0){
            averageSpending = totalSpent / yearsBetween;
        }

    }

    spendingAverageInput.innerText = averageSpending.toFixed(2);

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
        }
    }
})