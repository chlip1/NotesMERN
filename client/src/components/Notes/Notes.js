import React from "react";
import './Notes.css'
import Note from './Note/Note'

class Notes extends React.Component {
    constructor(props){
        super(props);
        this.notes = [
            {
                id: '2323',
                title: 'Wykąpać psa',
                body: 'Pamiętaj, aby wykąpać psa specjalnym szamponem'
            },
            {
                id: '2323',
                title: 'Wykąpać psa',
                body: 'Pamiętaj, aby wykąpać psa specjalnym szamponem'
            }
        ];
    }
    render() {
        return (
            <div>
                <p>Moje notatki</p>
                {this.notes.map(note => {
                    return (
                        <Note 
                            title={note.title} 
                            body={note.body}
                            id={note.id}
                            />
                    )})}
            </div>
        );
    }
}

export default Notes;