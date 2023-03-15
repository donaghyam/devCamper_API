// create route
// handle get request to index (/)
// arrow function - take in request and response objects
app.get('/api/v1/bootcamps', (req, res) => {
  // res.send('Hello from express');

  // res.send({ name: 'Adam'})  // this will send the object in JSON format, but the code below is preferred
  // res.json({ name: 'Adam' });

  // res.sendStatus(400); // this will show 'Bad Request' in response body

  // this is a better response, as it provides the 400 error in addition to the JSON object
  // res.status(200).json({ success: true, data: { id: 1 } });

  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});
