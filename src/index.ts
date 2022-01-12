import app from './app'
import deleteCharacter from './endpoints/deleteCharacter'
import getAllCharacters from './endpoints/getAllCharacters'
// import createCharacter from './endpoints/createCharacter'


app.get("/character", getAllCharacters)
// app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)