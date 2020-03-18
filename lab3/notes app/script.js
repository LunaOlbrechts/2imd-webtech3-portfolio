
  class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
      this.localStorageKey = null;
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
    
    saveToStorage(noteIndex){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify 
      this.localStorageKey = `notes_${noteIndex}`; 
      localStorage.setItem(this.localStorageKey, this.title);
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      let parent = document.querySelector(".notes");
      parent.removeChild(this.element);
    } 
  }
  
  
  

  class App {
    constructor() {
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      this.btnAdd = document.querySelector("#btnAddNote");
      this.btnClear = document.querySelector("#clearAll");
      this.notes = [];
      this.btnAdd.addEventListener("click", this.createNote.bind(this) );
      this.btnClear.addEventListener("click", this.reset.bind(this) );
      this.loadNotesFromStorage();
      console.log(localStorage);
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      for(let i=0;i<localStorage.length; i++) {
        let key = localStorage.key( i );
        console.log(key);
        let noteTitle = localStorage.getItem( key );
        let currentNote = new Note(noteTitle);
        currentNote.add();
      }
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      e.preventDefault();
      let text = document.querySelector("#txtAddNote").value;
      let note = new Note(text);        
      note.add();
      //push new note to array 
      let noteCount = this.notes.push(note);
      note.saveToStorage(noteCount);
      document.querySelector(".form").reset()
    }
    
    reset(){
      // this function should reset the form 
      localStorage.clear();
    }
  }
  
  let app = new App();
