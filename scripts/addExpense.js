const addButton = document.getElementById('addButton');


addButton.addEventListener('click', () => {


    const expenseType = document.getElementById('dropdownButton').value;
    const expenseName = document.getElementById('expenseName').value;
    const expenseLocation = document.getElementById('expenseLocation').value;
    const expenseDate = document.getElementById('expenseDate').value;
    const expenseCost = document.getElementById('expenseCost').value;


    if (!expenseType || !expenseName || !expenseLocation || !expenseDate){
        alert('Please fill in all fields');
        return;
    }

    const expenseData = {
        type: expenseType,
        name: expenseName,
        location: expenseLocation,
        date: expenseDate,
        cost: expenseCost
    }; 

    let expenses = JSON.parse(localStorage.getItem("healthTrack.user.expenseData")) || [];
    expenses.push(expenseData);
    localStorage.setItem("healthTrack.user.expenseData", JSON.stringify(expenses));
    alert('working!')

    //Testing Code
    const storedData = localStorage.getItem(expenseKey);
    const myParsedObject = JSON.parse(storedData);
    alert(storedData);
    

})




