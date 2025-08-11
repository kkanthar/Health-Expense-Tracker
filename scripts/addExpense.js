const addButton = document.getElementById('addButton');


addButton.addEventListener('click', () => {


    const expenseType = document.getElementById('dropdownButton').innerText;
    const expenseName = document.getElementById('expenseName').value;
    const expenseLocation = document.getElementById('expenseLocation').value;
    const expenseDate = document.getElementById('expenseDate').value;


    const expenseData = {
        type: expenseType,
        name: expenseName,
        location: expenseLocation,
        date: expenseDate
    }; 


    const expenseKey = "healthTrack.user.expenseData." + expenseName + "" + expenseLocation + "" + expenseDate;
        localStorage.setItem(expenseKey, JSON.stringify(expenseData));
    alert("This works 1");

    //Testing Code
    const storedData = localStorage.getItem(expenseKey);
    const myParsedObject = JSON.parse(storedData);
    alert(storedData);
    

})




