window.addEventListener("DOMContentLoaded", () => {
    
    const updateExpenseButton = document.getElementById('updateButton');
    const index = parseInt(localStorage.getItem('healthTrack.selectedExpenseIndex'));
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));


    updateExpenseButton.addEventListener('click', () => {

        //To reformat date so that it doesnt change time zones i.e. initially when inputting date, it is set at 12:00pm Universel Time, but when reconverting it will switch to est (a day back)
        const expenseDateValue = document.getElementById('expenseDate').value;
        const [year, month, day] = expenseDateValue.split('-').map(Number);
        const expenseDate = new Date(year, month - 1, day);
        const timestamp = expenseDate.getTime();

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
