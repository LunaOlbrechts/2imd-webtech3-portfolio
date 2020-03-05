class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 
      this.element = this.createElement(title);
    }
    
    createElement(title){
        let newNote = document.createElement('div');
        let add_btn= document.getElementById("btnAddNote");
        add_btn.addEventListener('click', this.remove.bind(newNote));
        console.log("haha");
        return newNote;
    }
    
    add(newNote){
      // HINT🤩
      // this function should append the note to the screen somehow
      document.getElementsByClassName("notes").appendChild(newNote);
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

  export default Note;