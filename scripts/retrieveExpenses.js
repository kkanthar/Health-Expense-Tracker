window.addEventListener('DOMContentLoaded', () => {
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));

    const template = document.getElementById('expenseTemplate');
    const container = document.getElementById('expenseContainer'); 



    expenses.forEach((expense, index) => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex";
        clone.removeAttribute("id");
        clone.setAttribute("data-expense-index", index);
        
        let dateObject = new Date(parseInt(expense.date));
        let today = new Date();

        let formattedDate;

        if (today.getFullYear() === dateObject.getFullYear()) {
            formattedDate = dateObject.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        } else {
            formattedDate = dateObject.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }



        clone.querySelector(".expense-name").textContent = expense.name;
        clone.querySelector(".expense-type").textContent = expense.type;
        clone.querySelector(".expense-location").textContent = expense.location;
        clone.querySelector(".expense-date").textContent = formattedDate;
        clone.querySelector(".expense-cost").textContent = expense.cost;


        let typeHeader = clone.querySelector(".type-header");
        let typeIcon = clone.querySelector(".type-icon")

        if (expense.type === "Prescription"){
            typeHeader.style.backgroundColor = "rgb(221, 37, 0)";
            typeIcon.src = "icons/pill-icon.svg";
        } else if (expense.type === "Counter Medicine"){
            typeHeader.style.backgroundColor = "rgb(255, 193, 7)";
            typeIcon.src = "icons/counter-medicine-icon.svg";
        } else if (expense.type === "Check Up"){
            typeHeader.style.backgroundColor = "rgb(76, 175, 80)";
            typeIcon.src = "icons/check-up-icon.svg";
        } else if (expense.type === "Insurance"){
            typeHeader.style.backgroundColor = "rgb(33, 150, 243)";
            typeIcon.src = "icons/health-insurance-icon.svg";
        } else if (expense.type === "Other"){
            typeHeader.style.backgroundColor = "rgb(158, 158, 158)";
            typeIcon.src = "icons/other-icon.svg";
        }



        container.prepend(clone);
    })

    if (expenses.length === 0){
        const addExpenseButtonText = document.getElementById('addExpenseButtonText');
        addExpenseButtonText.textContent = "Add Your First Expense!";

    }


})
