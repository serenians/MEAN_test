var express = require('express')

var app = express();



var mongoose = require('mongoose')
var bodyParse = require('body-parser')

app.use(bodyParse.json())
Genre = require('./models/genre')
Book = require('./models/book')

mongoose.connect('mongodb://localhost:27017/BookStore')

var db = mongoose.connection;

app.get('/', function(request, response){
    response.send("please use /api/books for books and /api/genres for genres")
})

app.get('/api/genres', function(request, response){
    Genre.getGenres(function(error, genres){
        if(error){
            throw error
        }
        response.json(genres);
    })
})

app.get('/api/genres/:_id', function(request, response){
    var id = request.params._id
    Genre.getGenreById(id, function(error, genre ){
        if(error){
            throw error
        }
        response.json(genre)        
    })
})

app.post('/api/genres', function(request, response){
    var genre = request.body;
    console.log(genre)
    Genre.addGenre(genre, function(error, genre){
    if(error){
        throw error;
    }
    response.json(genre);
    });

})

app.put('/api/genres/:_id', function(request, response){
    var genre = request.body;
    var id = request.params._id;
    console.log(genre)
    Genre.updateGenre(id, genre, {},  function(error, updatedGenre){
    if(error){
        throw error;
    }
    response.json(updatedGenre);
    });

})

app.delete('/api/genres/:_id', function(request, response){
    var id = request.params._id;

    Genre.deleteGenre(id, function(error, deletedData){
        if(error){
            throw error
        }
        response.json(deletedData)
    })
})


app.get('/api/books', function(request, response){
    Book.getBooks(function(error, books){
        if(error){
            throw error
        }
        response.json(books);
    })
})

app.get('/api/books/:_id', function(request, response){
    var id = request.params._id;
    Book.getBookById(id, function(error, book){
        if(error){
            throw error
        }
        response.json(book)
    })
})


app.post('/api/books', function(request, response){
    var book = request.body;
    console.log(book)
    Book.addBook(book, function(error, book){
    if(error){
        throw error;
    }
    response.json(book);
    });

})

app.put('/api/books/:_id', function(request, response){
    var book = request.body;
    var id = request.params._id;
    console.log(book)
    Book.updateBook(id, book, {},  function(error, updatedBook){
    if(error){
        throw error;
    }
    response.json(updatedBook);
    });

})

app.delete('/api/books/:_id', function(request, response){
    var id = request.params._id;
    Book.deleteBook(id, function(error, deleteddata){
        if(error){
            throw error
        }
        response.json(deleteddata);
    })
})

app.listen('4245')
