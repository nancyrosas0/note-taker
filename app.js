const express = require('express');
const path = require('path');
const fs = require('fs');
const { uuid } = require('uuidv4');
var data = fs.readFileSync("./db/db.json");
var notes = JSON.parse(data);

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


app.get("/api/notes", (req, res) => {
    return res.json(notes);
});

// app.post("/api/notes", (req, res) => {
//     var newNote = req.body
//     newNote.id = uuid()
//     notes.push(newNote);
//     fs.writeFile 
//     return res.json(notes)

//     // TO DO : push the new note into the noes array
//     // updates notes array, rewrite the db.json file
//     // send the response of the updated notes array
    
// });

// app.delete("/api/notes/:id", (req, res) => {
//     var id = req.params.id
//     notes = notes.filter !id
//     fs.writeFile notes
//     return res.json(notes);
//     // get the id from the params
//     // filter through the notes array for the object that DOES NOT contain the id that we're searching for 
//     // a filter creates a new array with what WAS NOT deleted
//     // rewrite the db.json file again
//     // send the response of the filtered notes array
    
// });

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });