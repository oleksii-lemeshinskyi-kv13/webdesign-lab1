document.getElementById('urlShortenForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the actual form submission

    const originalUrl = document.getElementById('originalUrl').value;
    const shortenedUrl = generateShortenedURL();
    const tbodyRef = document.getElementById('urlList');

    // Create new row and cells
    const newRow = tbodyRef.insertRow();
    const indexCell = newRow.insertCell(0);
    const originalUrlCell = newRow.insertCell(1);
    const shortenedUrlCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    // Insert content to cells
    indexCell.textContent = tbodyRef.rows.length; // Assuming # column is for the row count
    originalUrlCell.textContent = originalUrl;
    shortenedUrlCell.innerHTML = `<a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
    actionsCell.innerHTML = `<button class="btn btn-sm btn-danger" onclick="deleteRow(this)">Delete</button>`;

    // Clear input field
    document.getElementById('originalUrl').value = '';
});

function generateShortenedURL() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `https://cutt.ly/${result}`;
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}