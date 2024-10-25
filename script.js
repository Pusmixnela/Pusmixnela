const books = [
    { title: "Kelas X Bahasa Indonesia", category: "edukasi", link: "https://qrto.org/T9mXS8" },
    { title: "Biologi 1", category: "edukasi", link: "https://qrto.org/YRqDLM" },
    { title: "Why The Human Body", category: "edukasi", link: "https://books.google.co.id/books?id=9goREAAAQBAJ&lpg=PA2&hl=id&pg=PP1#v=onepage&q&f=false" },
   { title: "Teknik Kontrol Automatik", category: "edukasi", link: "https://www.google.co.id/books/edition/Teknik_Kontrol_Automatik/XNkDEAAAQBAJ?hl=id&gbpv=1&kptab=overview" },
   { title: "Kelas X Prakarya dan Kewirausahaan BS Sem 2", category: "edukasi", link: "https://qrto.org/lYvlwF" },
   { title: "Kelas X Matematika", category: "edukasi", link: "https://qrto.org/yWOotm" },
   { title: "Kelas X Seni Budaya", category: "edukasi", link: "https://qrto.org/yaZS5n" },
    { title: "Sejarah Dunia Yang Disembunyikan", category: "edukasi", link: "https://docs.google.com/file/d/1XBDrWqs9yOnlLi9i4VugsAlUqu7a06rn/preview" },
    { title: "Kelas X PPKN", category: "edukasi", link: "https://qrto.org/u1vIns" },
    { title: "Kelas X Bahasa Inggris", category: "edukasi", link: "https://qrto.org/qYX1Te" },
];

function displayBooks(filteredBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear previous books

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';

        // Create a link for the book
        const bookLink = document.createElement('a');
        bookLink.href = book.link; // Set the link
        bookLink.textContent = book.title; // Set the book title
        bookLink.target = "_blank"; // Open link in a new tab
        bookLink.rel = "noopener noreferrer"; // Security feature

        bookItem.appendChild(bookLink); // Add the link to the book item
        bookList.appendChild(bookItem); // Add the book item to the list
    });
}

function filterBooks() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const filteredBooks = selectedCategory === 'all' 
        ? books 
        : books.filter(book => book.category === selectedCategory);
    
    displayBooks(filteredBooks);
}

// Display all books on initial load
window.onload = () => displayBooks(books);
