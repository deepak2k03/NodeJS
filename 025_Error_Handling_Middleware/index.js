const express = require('express');
const app = express();
const port = 3000;

// --- 1. ROUTE THAT WILL THROW AN ERROR ---
app.get('/broken', (req, res, next) => {
    // Ye line error throw karegi
    throw new Error('This is a simulated error!'); 
});

// A standard route that works fine
app.get('/works', (req, res) => {
    res.send('Route is working fine.');
});


// --- 2. THE SIMPLE ERROR HANDLING MIDDLEWARE ---
// Four arguments is the only rule: (err, req, res, next)
app.use((err, req, res, next) => {
    
    // Server console mein error message log karte hain
    console.error(err.message); 
    
    // User ko 500 status aur simple text message bhejte hain
    res.status(500).send('Kuchh gadbad ho gayi! Server error.');
});


// --- 3. START SERVER ---
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
