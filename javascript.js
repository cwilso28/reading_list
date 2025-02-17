// let full_test_array = [("The Hobbit", "J.R.R. Tolkien", "310", createCheckbox, createDelete),
//                   ("The Lion, the Witch and the Wardrobe", "C.S. Lewis", "172", createCheckbox, createDelete),
//                   ("Leviathan Wakes", "James S.A. Corey", "577", createCheckbox, createDelete)
//                   ("A Game of Thrones", "George R.R. Martin", "694", createCheckbox, createDelete)
// ];

let partial_test_array = [["The Hobbit", "J.R.R. Tolkien", "310", "read", "delete"],
    ["The Lion, the Witch and the Wardrobe", "C.S. Lewis", "172", "not_read", "delete"],
    ["Leviathan Wakes", "James S.A. Corey", "577", "read", "don't delete"],
    ["A Game of Thrones", "George R.R. Martin", "694", "not-read", "don't delete"],
    ["sample", "sample", "3", "read", "sample"]
];


let test_line = [["The Hobbit", "J.R.R. Tolkien", "310", "yes", "delete"]];

let buttonContainer = document.querySelector("#add-book");
let column_count = document.querySelector("thead").rows[0].cells.length;
let table = document.querySelector("tbody");

let check_box = document.createElement("input");
check_box.type = "checkbox";
check_box.id = "read_status";
check_box.name = "read_status";
check_box.value = "read";


function insertBookRow (book_info_array) {
    
    let row = table.insertRow(-1);
    let row_counter = document.querySelector('tbody').rows.length;
    row.id = `row_${row_counter}`;

    for (let i=0; i < column_count; i++) {
        let cell = row.insertCell(i)

        if (i === 3 ) {
            if (book_info_array[i] === 'read') {
                check_for_read = "checked = checked";
            }
            else {
                check_for_read = '';
            }

            cell.innerHTML = `<input type = 'checkbox' id = 'read_status' name = 'read_status' value = 'read' ${check_for_read}></input>`;
        }

        else if (i === 4) {

            cell.innerHTML = `<button type=button id=row_${row_counter}_button class="delete_button"><img src="resources/delete.svg" alt="Delete button"></button>`
        }

        else {
            cell.textContent = book_info_array[i];
        }
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

function addBookToLibrary() {
    let book_title = document.getElementById("book_title");
    let book_author = document.getElementById("book_author");
    let page_count = document.getElementById("page_count");
    let read_status = document.getElementById("read_status");
    let book = new Book(book_title, book_author, page_count, read_status);
    book_array = class_to_array(book);
    insertBookRow(book_array);
};

function class_to_array(book) {
    return [book.title, book.author, book.page_count, book.read_status]
}

function delete_button_press(e) {
    if (e.target && e.target.matches('.delete_button')) {
        const selectedButton = e.target;

        row_id = selectedButton.id;
        row_id = row_id.split("_").slice(0,2).join("_")
        const row_to_delete = document.getElementById(row_id)
        row_to_delete.remove();
    }
}

// buttonContainer.addEventListener("click", function () {
//     alert("You made the button work!");
// }
// );

function openForm() {
    document.getElementById("popupOverlay").style.display="block";
}
function closeForm() {
    document.getElementById("popupOverlay").style.display="none";
}

table.addEventListener("click", function(e) {
    delete_button_press(e);
}
);