
import Note from "./note.js";

  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
          this.btnAdd = document.getElementById("btnAddNote");
          this.btnAdd.addEventListener("click", this.createNote.bind(this));
          this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      // HINT🤩
        note.add();
        note.saveToStorage();
        this.reset();
    }
    
    reset(){
      // this function should reset the form 
    }
    
  }
  
  let app = new App();
