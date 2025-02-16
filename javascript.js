// let full_test_array = [("The Hobbit", "J.R.R. Tolkien", "310", createCheckbox, createDelete),
//                   ("The Lion, the Witch and the Wardrobe", "C.S. Lewis", "172", createCheckbox, createDelete),
//                   ("Leviathan Wakes", "James S.A. Corey", "577", createCheckbox, createDelete)
//                   ("A Game of Thrones", "George R.R. Martin", "694", createCheckbox, createDelete)
// ];

let partial_test_array = [["The Hobbit", "J.R.R. Tolkien", "310", "yes", "delete"],
    ["The Lion, the Witch and the Wardrobe", "C.S. Lewis", "172", "no", "delete"],
    ["Leviathan Wakes", "James S.A. Corey", "577", "yes", "don't delete"],
    ["A Game of Thrones", "George R.R. Martin", "694", "no", "don't delete"]
];


let test_line = [["The Hobbit", "J.R.R. Tolkien", "310", "yes", "delete"]];

let buttonContainer = document.querySelector("#add-book");

function insertBookRow (book_info_array) {
    let column_count = document.querySelector("thead").rows[0].cells.length;
    let table = document.querySelector("tbody");
    let row = table.insertRow(-1);
    for (let i=0; i < column_count; i++) {
        let cell = row.insertCell(i)
        cell.textContent = book_info_array[i];
    };
};

// insertBookRow(test_line[0]);

for (let i=0; i<partial_test_array.length; i++) {
    insertBookRow(partial_test_array[i]);
}

function Book(title, author, page_count, read_status) {
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.read_status = read_status;
};

function class_to_array(book) {
    return [book.title, book.author, book.page_count, book.read_status]
}

buttonContainer.addEventListener("click", function () {
    alert("You made the button work!");
}
);

