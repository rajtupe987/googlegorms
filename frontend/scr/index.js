document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clear-button");
    const form = document.querySelector(".form_data");

    // Clear form inputs when the "Clear Form" button is clicked
    clearButton.addEventListener("click", function () {
        form.reset();

        // Clear text content of editable elements
        const editableElements = document.querySelectorAll(".single-line-text[contenteditable=true]");
        editableElements.forEach(function (element) {
            element.textContent = "";
        });
    });

    // Show alert when the form is submitted
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        var mcqChecked = document.querySelector('input[name="mcq"]:checked');
        var checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');

        if (!mcqChecked || checkboxes.length === 0) {
            alert("Please complete all required questions.");
        } else {
            // Your alert message for successful submission
            alert("Your response has been submitted.");

            // Reset form
            form.reset();

            // Clear text content of editable elements
            const editableElements = document.querySelectorAll(".single-line-text[contenteditable=true]");
            editableElements.forEach(function (element) {
                element.textContent = "";
            });
        }
    });
});
