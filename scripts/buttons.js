
document.addEventListener('DOMContentLoaded', () => {
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


});

