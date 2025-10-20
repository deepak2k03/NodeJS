const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// --- CRITICAL STEP: Configure express.static() middleware ---
// This line tells Express to serve files from the 'public' folder.
// The content inside the 'public' folder is accessible directly from the root URL ('/').
app.use(express.static('public')); 


// Optional: Define a route for the homepage to redirect or send a custom message
app.get('/', (req, res) => {
    // If you named your main file 'index.html', it will load automatically.
    // If you need to explicitly serve it:
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// 404 CATCH-ALL: This must always be the last route/middleware.
app.use((req, res) => {
    // Note: You must have a '404.html' file inside your 'public' directory for this to work.
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Static files served from the 'public' directory.`);
});
