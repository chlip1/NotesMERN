const Note = require('../../db/models/note')

module.exports = {
    saveNote(req, res){
        
        res.send("Strona glowna")

        const newNote = new Note({
            title: 'tytl testowy', 
            body: 'tekst notatki'
        })
        
        newNote.save().then(() => {
            console.log('notatka zostala zapisana')
        })
    }
}