  class Note {
    constructor(noteId, title) {
      this.title = title;
      this.element = this.createElement(title);
      this.id = noteId;
    }
    
    createElement(title){

      let newNote = document.createElement("div");
      newNote.setAttribute("class", "card");        //<div class="card"></div>

      let newP = document.createElement("p");         //<p>Todo</p>
      newP.innerHTML = title;

      let newA= document.createElement("a");
      newA.setAttribute("href", "#");
      newA.setAttribute("class", "card-remove");
      newA.innerHTML = document.querySelector(".card-remove").innerHTML;

      newNote.appendChild(newP);
      newNote.appendChild(newA);

      newA.addEventListener("click", this.remove.bind(this) );
      
      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").appendChild(this.element);    
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      let currentNotes = JSON.parse(localStorage.getItem("notes") );
      if(currentNotes === null){
        currentNotes= [];
      }
      currentNotes.push(this.title);
      localStorage.setItem("notes", JSON.stringify(currentNotes) );
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      let parent = document.querySelector(".notes");
      parent.removeChild(this.element);
      let currentNotes = JSON.parse(localStorage.getItem("notes") );
      currentNotes.splice(this.id, 1);
      localStorage.setItem("notes", JSON.stringify(currentNotes) );
    } 
  }

  

  class App {
    constructor() {
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      this.btnAdd = document.querySelector("#btnAddNote");
      this.btnClear = document.querySelector("#clearAll");
      this.currentId = 0;
      this.btnAdd.addEventListener("click", this.createNote.bind(this) );
      this.btnClear.addEventListener("click", this.reset.bind(this) );
      this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      let notes = JSON.parse(localStorage.getItem("notes"));
      console.log(notes);
      if(notes === null){
        notes = [];
      }

      notes.forEach((item, index) => {
        let noteTitle = item;
        let currentNote = new Note(index, noteTitle);
        currentNote.add();
        this.currentId = index;
      });
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      e.preventDefault();
      let text = document.querySelector("#txtAddNote").value;
      let note = new Note(this.currentId, text);        
      note.add();

      //push new note to array 
      note.saveToStorage();
      document.querySelector(".form").reset()
    }
    
    reset(){
      // this function should reset the form 
      localStorage.clear();
      location.reload();
    }
  }
  
  let app = new App();
