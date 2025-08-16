window.addEventListener("DOMContentLoaded", () => {
    
    const updateExpenseButton = document.getElementById('updateButton');
    const index = parseInt(localStorage.getItem('healthTrack.selectedExpenseIndex'));
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));
    updateExpenseButton.addEventListener('click', () => {

        const updatedExpense = {
            type: document.getElementById("dropdownButton").value,
            name: document.getElementById("expenseName").value,
            location: document.getElementById("expenseLocation").value,
            date: document.getElementById("expenseDate").value,
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
