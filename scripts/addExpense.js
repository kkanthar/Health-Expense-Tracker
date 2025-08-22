const addButton = document.getElementById('addButton');


addButton.addEventListener('click', () => {


    const expenseType = document.getElementById('dropdownButton').value;
    const expenseName = document.getElementById('expenseName').value;
    const expenseLocation = document.getElementById('expenseLocation').value;
    
    const expenseDateValue = document.getElementById('expenseDate').value;
    const [year, month, day] = expenseDateValue.split('-').map(Number);
    const expenseDate = new Date(year, month - 1, day);
    const timestamp = expenseDate.getTime();

    const expenseCost = document.getElementById('expenseCost').value;

    

    if (!expenseType || !expenseName || !expenseLocation || !expenseDate){
        alert('Please fill in all fields');
        return;
    }

    const expenseData = {
        type: expenseType,
        name: expenseName,
        location: expenseLocation,
        date: timestamp,
        cost: expenseCost
    }; 

    let expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData")) || [];
    expenses.push(expenseData);
    localStorage.setItem("healthTrack.user.expenseData", JSON.stringify(expenses));
    window.top.location.reload();
})




