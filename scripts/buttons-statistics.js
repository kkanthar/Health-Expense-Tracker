const dropdownButton = document.getElementById('dropdownButtonPeriod');
const dropdownContent = document.getElementById('dropdownPeriodContent');

dropdownButton.addEventListener('click', () => {

    dropdownContent.classList.toggle('show');

    if (dropdownContent.classList.contains('show')){
        dropdownButton.style.borderRadius = "5px 5px 0px 0px"
    } else {
        dropdownButton.style.borderRadius = "5px"
    }
})

function changeButtonText(text){
    dropdownButton.innerText = text;
    dropdownButton.value = text;
    dropdownContent.classList.remove('show');
    dropdownButton.style.borderRadius = "5px"

}