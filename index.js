//import { createClient } from '@supabase/supabase-js'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const supabaseUrl = 'https://cbfubvssfciepzrsqowv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZnVidnNzZmNpZXB6cnNxb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NjE4OTgsImV4cCI6MjA4NzQzNzg5OH0.SlEnvYurXsXFd5NUj3C_Izxnwk_gWiRa9C2sICGdyiI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    if (error) {
        console.error('Error fetching books:', error)
        return
    }

    const bookList = document.getElementById('books')

    bookList.innerHTML = `
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody></tbody>
    `

    const tbody = bookList.querySelector('tbody')

    for (let book of books) {
        tbody.innerHTML += `
            <tr>
                <td>${book.title ?? ''}</td>
                <td>${book.author ?? ''}</td>
                <td>${book.isbn ?? ''}</td>
            </tr>
        `
    }
}

getBooks();