window.addEventListener('DOMContentLoaded', () => {

    const expense = JSON.parse(localStorage.getItem("healthTrack.selectedExpense"));

    if (expense){
        let dateObject = new Date(parseInt(expense.date));
        let formattedDate = dateObject.toISOString().split('T')[0];

        document.getElementById("dropdownButton").innerText = expense.type;
        document.getElementById("dropdownButton").value = expense.type;
        document.getElementById("expenseName").value = expense.name;
        document.getElementById("expenseCost").value = expense.cost;
        document.getElementById("expenseDate").value = formattedDate;
        document.getElementById("expenseLocation").value = expense.location;

        localStorage.removeItem("healthTrack.selectedExpense");

        const type = document.getElementById("dropdownButton").value = expense.type;

        if (type === "Prescription"){
            dropdownButton.style.backgroundColor = "rgb(221, 37, 0)";
        } else if (type === "Counter Medicine"){
            dropdownButton.style.backgroundColor = "rgb(255, 193, 7)";
        } else if (type === "Check Up"){
            dropdownButton.style.backgroundColor = "rgb(76, 175, 80)";
        } else if (type === "Insurance"){
            dropdownButton.style.backgroundColor = "rgb(33, 150, 243)";
        } else if (type === "Other"){
            dropdownButton.style.backgroundColor = "rgb(158, 158, 158)";
        }

    }
})