const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent')



dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

function changeButtonText(text){

    dropdownButton.innerText = text;
    dropdownButton.value = text;
    dropdownContent.classList.remove('show');


}

