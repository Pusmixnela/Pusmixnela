const books = [
    { title: "Fakta Unik dan Super", category: "edukasi", link: "https://link-buku-fiksi-1.com" },
    { title: "Biologi 1", category: "edukasi", link: "https://qrto.org/YRqDLM" },
    { title: "Why The Human Body", category: "edukasi", link: "https://books.google.co.id/books?id=9goREAAAQBAJ&lpg=PA2&hl=id&pg=PP1#v=onepage&q&f=false" },
   { title: "Teknik Kontrol Automatik", category: "edukasi", link: "https://www.google.co.id/books/edition/Teknik_Kontrol_Automatik/XNkDEAAAQBAJ?hl=id&gbpv=1&kptab=overview" },
   { title: "Sosiologi Untuk Masyarakat Indonesia", category: "edukasi", link: "https://link-buku-fiksi-1.com" },
   { title: "Inti Sari Fisika Untuk SMA", category: "edukasi", link: "https://link-buku-fiksi-1.com" },
   { title: "Gen Z In Islam", category: "edukasi", link: "https://link-buku-fiksi-1.com" },
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
