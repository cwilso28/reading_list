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

function insertBookRow (book_info) {
    let column_count = document.querySelector("thead").rows[0].cells.length;
    console.log(column_count);
    let table = document.querySelector("tbody");
    let row = table.insertRow(-1);
    for (let i=0; i < column_count; i++) {
        let cell = row.insertCell(i)
        cell.textContent = book_info[i];
    };
};

// insertBookRow(test_line[0]);