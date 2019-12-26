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
const axios = require('axios').default;
const https = require('https');

class BookList extends React.Component {
    componentDidMount() {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        axios.get('http://localhost:5000/api/books/list', { httpsAgent: agent })
        .then((x) => this.setState({books: x.data}))
        .catch((x) => console.log('(', x));
    }

    constructor(props) {
        super(props);

        this.state = {
            books: []
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
                            {book.authors}
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
