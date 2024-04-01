let libraryEntryHTML = ""

const library  = [];
let index = 0;



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        let infoText = "";
        infoText = title + " by " + author + ", " + pages + " pages, "
        if (read){
            infoText = infoText + "read";
        }
        else{
            infoText = infoText + "not yet read";
        }
        return infoText;
    }

}

function addBook(){
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read = document.querySelector(".read").checked;

    const book = new Book(title, author, pages, read);
    library[index] = book;
    index++;
    displayLibrary();

    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".pages").value = "";
    document.querySelector(".read").checked = false;
}

function displayLibrary(){
    const display = document.querySelector(".display-library");
    display.innerHTML = "";
    for(let i = 0; i < library.length; i++){
        if (library[i] != null){
            display.innerHTML += `<br><p>${library[i].title} by ${library[i].author}, ${library[i].pages} pages</p>
            <label for='has-read'>Read?</label>
            <input type='checkbox' class='has-read${i}' onclick="return false;">
            <button onclick="checkRead(${i})">Finished Reading</button>
            <button onclick='removeEntry(${i})'>Remove</button>`;
        }
    }
    for(let i = 0; i < library.length; i++){
        if (library[i] != null){
            document.querySelector(`.has-read${i}`).checked = library[i].read;
        }
    }
}

function removeEntry(bkIndex){
    for(let i = bkIndex; i < library.length-1; i++){
        library[i] = library[i + 1];

    }
    library[library.length-1] = null;
    displayLibrary();
}

function checkRead(bkIndex){
    if (!library[bkIndex].read){
        library[bkIndex].read = true;
        document.querySelector(`.has-read${bkIndex}`).checked = true;
    }
}
