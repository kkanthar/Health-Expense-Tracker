window.addEventListener("DOMContentLoaded", () => {
    
    const updateExpenseButton = document.getElementById('updateButton');
    const index = parseInt(localStorage.getItem('healthTrack.selectedExpenseIndex'));
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));

    const expenseDateValue = document.getElementById('expenseDate');
    const [year, month, day] = expenseDateValue.split('-').map(Number);
    const expenseDate = new Date(year, month - 1, day);
    const timestamp = expenseDate.getTime();
    updateExpenseButton.addEventListener('click', () => {

        const updatedExpense = {
            type: document.getElementById("dropdownButton").value,
            name: document.getElementById("expenseName").value,
            location: document.getElementById("expenseLocation").value,
            date: timestamp,
            cost: document.getElementById("expenseCost").value
        }

        if (expenses[index]){

            expenses[index] = updatedExpense;

            localStorage.setItem("healthTrack.user.expenseData", JSON.stringify(expenses));
        }


        localStorage.removeItem("healthTrack.selectedExpenseIndex");
        window.top.location.reload();
    })
})
