window.addEventListener('DOMContentLoaded', () => {
    const removeExpenseButton = document.getElementById('removeButton');
    const index = parseInt(localStorage.getItem("healthTrack.selectedExpenseIndex"));
    
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));
    removeExpenseButton.addEventListener('click', () => {

        if (expenses[index]){
            expenses.splice(index,1);
            localStorage.setItem("healthTrack.user.expenseData", JSON.stringify(expenses));
        }
        
        localStorage.removeItem("healthTrack.selectedExpenseIndex");
        window.top.location.reload();

        


    })

});