const express = require('express');
app = express();

const rappers = {

  'juvenile': {
    'age': 48,
    'birthName': 'Terius Gray',
    'birthLocation': 'New Orleans, Lousiana'
  },
  'lil b': {
    'age': 34,
    'birthName': 'Brandon McCartney',
    'birthLocation': 'Berkley, California'
  },
  'eazy-e': {
    'age': 30,
    'birthName': 'Eric Wright',
    'birthLocation': 'Los Angeles, California'
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/api', (req, res) => {
  res.json(rappers)
})

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName])
  } else {
    res.json(rappers.unknown)
  }
})





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) })