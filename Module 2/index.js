const express = require('express');
const app = express();
const locationArray = [];

app.listen(3000, () => {
	console.log('listening at 3000')
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

// Routing
app.post('/api', (request, response) => {
	locationArray.push(request.body);
	response.json(
		locationArray
	);
});



