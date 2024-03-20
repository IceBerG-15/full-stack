const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/feedback-form.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    res.send(displayFeedback(formData));
});

function displayFeedback(data) {
    let tableHtml = `
        <table>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Comments</th>
                <th>Subscribe</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>${data.name}</td>
                <td>${data.gender}</td>
                <td>${data.comments}</td>
                <td>${data.subscribe ? 'Yes' : 'No'}</td>
                <td>${data.rating}</td>
            </tr>
        </table>
    `;
    return tableHtml;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
