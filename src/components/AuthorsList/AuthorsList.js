import React from 'react';
import './AuthorsList.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AuthorsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: [
                {
                    id: 1,
                    well_known_name: 'author 1',
                    first_name: 'first name 1',
                    full_middle_name: 'full middle name 1',
                    last_name: 'last name 1'
                },
                {
                    id: 2,
                    well_known_name: 'author 2',
                    first_name: 'first name 2',
                    full_middle_name: 'full middle name 2',
                    last_name: 'last name 2'
                },
                {
                    id: 3,
                    well_known_name: 'author 3',
                    first_name: 'first name 3',
                    full_middle_name: 'full middle name 3',
                    last_name: 'last name 3'
                }
            ],
        }
    }

    render = () => {
        return (
            <div>
                <p>AuthorsList</p>
                <AuthorsList_Table authors={this.state.authors} />
            </div>
        );
    }
}

const AuthorsList_Table = (props) => {
    const classes =  makeStyles({
        table: {
            minWidth: 650,
        },
    });

    return <TableContainer component={Paper}>
        <Table className={classes.table} aria-label={'simple table'}>
            <TableHead>
                <TableRow>
                    <TableCell>Well known name</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Full middle name</TableCell>
                    <TableCell>Last name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.authors.map(author => (
                    <TableRow key={author.id}>
                        <TableCell>
                            {author.well_known_name}
                        </TableCell>
                        <TableCell>
                            {author.first_name}
                        </TableCell>
                        <TableCell>
                            {author.full_middle_name}
                        </TableCell>
                        <TableCell>
                            {author.last_name}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default AuthorsList;
