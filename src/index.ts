import app from './app'
import createCharacter from './endpoints/createCharacter'
import getAllCharacters from './endpoints/getAllCharacters'

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)