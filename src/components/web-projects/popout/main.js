function openPopup() {
    document.getElementById("popupBox").style.display = "block";
    return false;
}

function closePopup() {
    document.getElementById("popupBox").style.display = "none";
}

function submitForm() {
    // Submit the form when the user clicks "Yes"
    document.getElementById("quizForm").submit();
}