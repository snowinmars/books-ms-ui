import React, { useState } from 'react';
import './AddBook.css'
import {
    FormControl,
    Input,
    InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
const axios = require('axios').default;

class AddBook extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <div className={'snow-book-add'}>
                <AddBook_Form />
            </div>
        );
    }
}

function AddBook_Form(props) {
    const classes = makeStyles((theme) => ({
        root: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200
        }
    }));
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [year, setYear] = useState('');
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, authors, year, isbn);

        axios.post('http://localhost:5000/api/books', {
            title: title,
            authors: authors,
            year: year,
            isbn: isbn,
        })
            .then(x => console.log(x))
            .catch(x => console.log(x));
    };

    return <form className={'snow-book-add-form'} onSubmit={handleSubmit}>
        <FormControl className={classes.root}>
        <InputLabel htmlFor={'snow-book-add-form-title'}>
            Title
        </InputLabel>
        <Input id={'snow-book-add-form-title'}
               type={'text'}
               value={title}
               onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl className={classes.root}>
        <InputLabel htmlFor={'snow-book-add-form-authors'}>
            Authors
        </InputLabel>
        <Input id={'snow-book-add-form-authors'}
               type={'text'}
               value={authors}
               onChange={(e) => setAuthors(e.target.value)} />
        </FormControl>
        <FormControl className={classes.root}>
        <InputLabel htmlFor={'snow-book-add-form-year'}>
            Year
        </InputLabel>
        <Input id={'snow-book-add-form-year'}
               type={'text'}
               value={year}
               onChange={(e) => setYear(e.target.value)} />
        </FormControl>
        <FormControl className={classes.root}>
        <InputLabel htmlFor={'snow-book-add-form-isbn'}>
            Isbn
        </InputLabel>
        <Input id={'snow-book-add-form-isbn'}
               type={'text'}
               value={isbn}
               onChange={(e) => setIsbn(e.target.value)} />
        </FormControl>
        <Button
            className={'snow-book-add-form-submit'}
            variant="contained"
            color="primary"
            type="submit"
            disabled={false}
            onClick={handleSubmit}>
            Add
        </Button>
    </form>
}

export default AddBook;
