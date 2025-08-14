const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent')



dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
    if (dropdownContent.classList.contains('show')){
        dropdownButton.style.borderRadius = "3px 3px 0px 0px"
    } else {
        dropdownButton.style.borderRadius = "3px 3px 3px 3px"
    }
});

function changeButtonText(text){

    dropdownButton.innerText = text;
    dropdownButton.value = text;
    dropdownContent.classList.remove('show');

    dropdownButton.style.borderRadius = "3px 3px 3px 3px"
    



    if (text === "Prescription"){
        
        dropdownButton.style.backgroundColor = "rgb(221, 37, 0)";
        
    } else if (text === "Counter Medicine"){
        dropdownButton.style.backgroundColor = "rgb(255, 193, 7)";
        

    } else if (text === "Check Up"){
        dropdownButton.style.backgroundColor = "rgb(76, 175, 80)";
    } else if (text === "Insurance"){
        dropdownButton.style.backgroundColor = "rgb(33, 150, 243)";
    } else if (text === "Other"){
        dropdownButton.style.backgroundColor = "rgb(158, 158, 158)";
    }


}

