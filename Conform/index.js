function confirmAction() {
    if (confirm("Are you sure you want to delete this item?")) {
        alert("Item deleted.");
    } else {
        alert("Action canceled.");
    }
}