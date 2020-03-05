
  class App {
    constructor() {
        console.log("👊🏼 The Constructor!");
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
        this.btnAdd = document.querySelector("#btnAddNote");
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
      // alert("click");
        let text= document.querySelector("#txtAddNote").value;
        console.log(text);
        let note = new Note(text);
        
        note.add();
      // note.saveToStorage();
      // this.reset();
    }
    
    reset(){
      // this function should reset the form 
    }
    
  }
  
  let app = new App();


  class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 
      this.element = this.createElement(title);
      console.log(this.title);
    }
    
    createElement(title){
        let newNote = document.createElement('div');
        newNote.setAttribute("class", "card"); 

        let newP = document.createElement("p");         //<p>Todo</p>
        newP.innerHTML = title;

        newNote.appendChild(newP);
        return newNote;
    }
    
    add(newNote){
      // HINT🤩
      // this function should append the note to the screen somehow
       document.querySelector(".notes").appendChild(this.element);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
    } 
  }
