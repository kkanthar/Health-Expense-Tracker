
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

        //To Position the exit button relative to the iframe
        const addExpenseRect = addExpense.getBoundingClientRect();
        const buttonTop = addExpenseRect.top + 5;
        const buttonLeft = addExpenseRect.left + addExpenseRect.width - 25; 
        
        exitAddExpenseButton.style.display = "block";
        exitAddExpenseButton.style.top = `${buttonTop}px`;
        exitAddExpenseButton.style.left = `${buttonLeft}px`;

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

    //If user resizes the window
    window.addEventListener('resize', () => {
        const addExpenseRect = addExpense.getBoundingClientRect();
        const buttonTop = addExpenseRect.top + 5;
        const buttonLeft = addExpenseRect.left + addExpenseRect.width - 25; 
        
        exitAddExpenseButton.style.display = "block";
        exitAddExpenseButton.style.top = `${buttonTop}px`;
        exitAddExpenseButton.style.left = `${buttonLeft}px`;

    })


    //Edit an Expense
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"))
    
    const editExpense = document.getElementById('editExpense');
    const exitEditExpenseButton =  document.getElementById('exitEditExpense');
    const expenseContainer = document.getElementById('expenseContainer');

    //Opening Window
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
            //To Position the exit button relative to the iframe
            const editExpenseRect = editExpense.getBoundingClientRect();
            const buttonTop = editExpenseRect.top + 5;
            const buttonLeft = editExpenseRect.left + editExpenseRect.width - 25; 
            exitEditExpenseButton.style.top = `${buttonTop}px`;
            exitEditExpenseButton.style.left = `${buttonLeft}px`;


            backdropCover.style.display = "block";
            document.body.style.overflow = 'hidden';
            
        }
    })

    //Exiting Edit Expense
    exitEditExpenseButton.addEventListener('click', () => {
        editExpense.style.display = "none";
        exitEditExpenseButton.style.display = "none";
        backdropCover.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("healthTrack.selectedExpenseIndex");

    })

    window.addEventListener('resize', () => {
        const editExpenseRect = editExpense.getBoundingClientRect();
        const buttonTop = editExpenseRect.top + 5;
        const buttonLeft = editExpenseRect.left + editExpenseRect.width - 25; 
        
        exitEditExpenseButton.style.display = "block";
        exitEditExpenseButton.style.top = `${buttonTop}px`;
        exitEditExpenseButton.style.left = `${buttonLeft}px`;

    })

    


});

