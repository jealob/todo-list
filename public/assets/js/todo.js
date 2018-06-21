// Client-side API request code 
// When Documnet is ready attach handlers
// $(document).ready(function () {
$(function () {
    // Update task
    $(".change-complete").on("click", function (event) {
        let id = $(this).data("id");
        let newComplete = $(this).data("newcomplete");
        let newCompleteState = {
            complete: newComplete
        };

        // Send the PUT request
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompleteState
        }).then(function () {
            console.log("changed completed to", newComplete);
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
// Create task
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newTask = {
            task: $("#ca").val().trim(),
            complete: $("[name=complete]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(
            function () {
                console.log("created new task");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
// Delete task
    $(".delete-task").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/tasks/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})
