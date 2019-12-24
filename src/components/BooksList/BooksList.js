import React from 'react';
import './BooksList.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class BookList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [
                {
                    id: '1',
                    title: 'book title 1',
                    authors: [
                        {
                            id: 1,
                            well_known_name: 'author 1'
                        }
                    ],
                    status: 'local'
                },
                {
                    id: '2',
                    title: 'book title 2',
                    authors: [
                        {
                            id: 2,
                            well_known_name: 'author 2'
                        },
                        {
                            id: 3,
                            well_known_name: 'author 3'
                        }
                    ],
                    status: 'at sister'
                }
            ]
        }
    }

    render = () => {
        return (
            <div>
                <p>BookList from {this.props.source}</p>
                <BookList_Table books={this.state.books}/>
            </div>
        );
    }
}

const BookList_Table = (props) => {
    const classes =  makeStyles({
        table: {
            minWidth: 650,
        },
    });

    return <TableContainer component={Paper}>
        <Table className={classes.table} aria-label={'simple table'}>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Author(s)</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.books.map(book => (
                    <TableRow key={book.id}>
                        <TableCell>
                            {book.title}
                        </TableCell>
                        <TableCell>
                            {book.authors.map(author => {
                                return author.well_known_name
                            }).join(', ')}
                        </TableCell>
                        <TableCell>
                            {book.status}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default BookList;
