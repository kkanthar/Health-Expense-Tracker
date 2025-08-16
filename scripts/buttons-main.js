
document.addEventListener('DOMContentLoaded', () => {

    //Add an Expense

    // When clicking the add expense button, open the iframe
    const addExpense = document.getElementById('addExpense');
    const addExpenseButton = document.getElementById('addExpenseButton');
    const exitAddExpenseButton = document.getElementById('exitAddExpense');
    const backdropCover = document.getElementById('backdropCover');

    addExpenseButton.addEventListener('click', () => {
        addExpense.style.display = "block";
        addExpense.src = "add-expense.html";
        exitAddExpenseButton.style.display = "block";
        backdropCover.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    // Exit Add Expense Page
    exitAddExpenseButton.addEventListener('click', () => {
        addExpense.style.display = "none";
        exitAddExpenseButton.style.display = "none";
        backdropCover.style.display = "none";
        document.body.style.overflow = "auto";
    });


    //Remove an Expense
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"))
    
    const editExpense = document.getElementById('editExpense');
    const exitEditExpenseButton =  document.getElementById('exitEditExpense');
    const expenseContainer = document.getElementById('expenseContainer');

    expenseContainer.addEventListener('click', (event) => {
        const clickedExpense = event.target.closest('.expense-template');

        if (clickedExpense){ 
            const index = clickedExpense.getAttribute("data-expense-index");
            const selectedExpense = expenses[index];

            localStorage.setItem("healthTrack.selectedExpenseIndex", index);
            localStorage.setItem("healthTrack.selectedExpense", JSON.stringify(selectedExpense));


            editExpense.style.display = "block";
            editExpense.src = "edit-expense.html";
            exitEditExpenseButton.style.display = "block";
            backdropCover.style.display = "block";
        }
    })

    exitEditExpenseButton.addEventListener('click', () => {
        editExpense.style.display = "none";
        exitEditExpenseButton.style.display = "none";
        backdropCover.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("healthTrack.selectedExpenseIndex");

    })

    


});

