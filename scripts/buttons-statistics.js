

//Nav Button Change Theme
const navButtonMyStats = document.getElementById('navButtonMyStats');
navButtonMyStats.style.borderTopWidth = "6px";
navButtonMyStats.style.filter = "invert(1) brightness(30%)";

const dropdownButton = document.getElementById('dropdownButtonPeriod');
const dropdownContent = document.getElementById('dropdownPeriodContent');

//Tooltip Average Spending
const tooltipContainerAvgSpending = document.getElementById('tooltipContainerAvgSpending');
const tooltipAvgSpending = document.getElementById('tooltipAvgSpending');

//Tooltip Spending Distribution
const tooltipIconSpendDistri = document.getElementById('tooltipSpendingDistribution');
const tooltipSpendDistri = document.getElementById('tooltipSpendingDistri');

//Tooltip Total Spending Weekly
const tooltipIconTotalSpendingWeek = document.getElementById('tooltipIconTotalSpendingWeek');
const tooltipTotalSpendingWeek = document.getElementById('tooltipTotalSpendingWeek')

dropdownButton.addEventListener('click', () => {

    dropdownContent.classList.toggle('show');

    if (dropdownContent.classList.contains('show')){
        dropdownButton.style.borderRadius = "5px 5px 0px 0px"
    } else {
        dropdownButton.style.borderRadius = "5px"
    }
})

function changeButtonText(text){
    dropdownButton.innerText = text;
    dropdownButton.value = text;
    dropdownContent.classList.remove('show');
    dropdownButton.style.borderRadius = "5px"

    if (text === 'Day'){
        tooltipAvgSpending.innerText = "Average spending per day is calculated by dividing the total spending in the calendar month by the number of days that have passed.";

    } else if (text === 'Week'){
        tooltipAvgSpending.innerText = "Average spending per week is calculated by dividing the total spending for the current month by 4 (the approximate number of weeks per month).";
    } else if (text === 'Month'){
        tooltipAvgSpending.innerText = "Average spending per month is calculated by dividing the total spending for the current calendar year by the number of months that have passed.";
    } else if (text === 'Year'){
        tooltipAvgSpending.innerText = "Average spending per year is calculated by dividing the total lifetime spending by the total number of unique years recording expenses."

    }

}

//Tooltip Display Average Spending
tooltipContainerAvgSpending.addEventListener('mouseover', () => {
    tooltipAvgSpending.style.display = "block";
    

})

tooltipContainerAvgSpending.addEventListener('mouseout', () => {
    setTimeout(() => {
    tooltipAvgSpending.style.display = "none";
    }, 2000)
})

//Tooltip Display Spending Distribution

tooltipIconSpendDistri.addEventListener('mouseover', () => {
    tooltipSpendDistri.style.display = "block"; 

})

tooltipIconSpendDistri.addEventListener('mouseout', () => {
    setTimeout(() => {
    tooltipSpendDistri.style.display = "none";
    }, 2000)
})

//Tooltip Total Spending Week

tooltipIconTotalSpendingWeek.addEventListener('mouseover', () => {
    tooltipTotalSpendingWeek.style.display = "block";    
})

tooltipIconTotalSpendingWeek.addEventListener('mouseout', () => {
    setTimeout(() => {
    tooltipTotalSpendingWeek.style.display = "none";
    }, 2000)
})


