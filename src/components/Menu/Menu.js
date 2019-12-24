import React from 'react';
import './Menu.css';
import { connect } from 'react-redux'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { setPage }  from './../../actions/index';
import { ROOT_PAGES } from "./../../constants/types";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: ROOT_PAGES.books,
        };
    }

    render = () => {
        return (
            <div className={'snow-menu'}>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={() => this.props.setPage(ROOT_PAGES.books)}>Books</Button>
                    <Button onClick={() => this.props.setPage(ROOT_PAGES.authors)}>Authors</Button>
                    <Button onClick={() => this.props.setPage(ROOT_PAGES.wishlist)}>Wishlist</Button>
                </ButtonGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (page) => {
            dispatch(setPage(page))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
