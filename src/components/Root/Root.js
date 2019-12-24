import React from 'react';
import './Root.css';
import { connect } from 'react-redux';

import { ROOT_PAGES } from './../../constants/types'
import Menu from './../Menu/Menu';
import BooksList from './../BooksList/BooksList';
import AuthorsList from './../AuthorsList/AuthorsList';

class Root extends React.Component {
    setActivePage = (page) => {
        switch (page) {
            case ROOT_PAGES.books:
                return <BooksList source={'current'} />;
            case ROOT_PAGES.authors:
                return <AuthorsList />;
            case ROOT_PAGES.wishlist:
                return <BooksList source={'wish'} />;
            default:
                throw 'Unknown page was received'
        }
    };

    render = () => {
        return (
            <div className={'snow-root'}>
                <Menu />
                {this.setActivePage(this.props.page)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
    };
};

export default connect(mapStateToProps)(Root);
