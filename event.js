document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${eventName} - ${eventDate} - ${eventTime} - ${eventLocation}`;

    // Append the new event to the list
    document.getElementById('event-list').appendChild(li);

    // Clear the form
    document.getElementById('event-name').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-time').value = '';
    document.getElementById('event-location').value = '';
});
