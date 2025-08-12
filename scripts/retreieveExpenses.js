window.addEventListener('DOMContentLoaded', () => {
    const expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData"));

    const template = document.getElementById('expenseTemplate');
    const container = document.getElementById('expenseContainer'); 


    expenses.forEach(expense => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex";
        clone.removeAttribute("id");

        clone.querySelector(".expense-name").textContent = expense.name;
        //clone.querySelector(".expense-type").textContent = expense.type;
        clone.querySelector(".expense-location").textContent = expense.location;
        clone.querySelector(".expense-date").textContent = expense.date;
        clone.querySelector(".expense-cost").textContent = "$" + expense.cost;
        container.prepend(clone);
    })


})
