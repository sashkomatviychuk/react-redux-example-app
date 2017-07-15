import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPostsList } from '../actions'

import PostItem from './PostItem'

class Posts extends React.Component {

    componentDidMount() {
        const { loadedOnce } = this.props;
        !loadedOnce && this.props.dispatch(getPostsList());
    }

    render() {
        const { loading, items } = this.props;
        const data = items.map((item, i) => <PostItem
            {...item}
            key={i}
            itemKey={i}
        />);

        return (
            <div>
                {!loading && <ul>{data}</ul>}
                {loading && 'Load items list...'}
            </div>
        )
    }
}

Posts.propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    loadedOnce: PropTypes.bool,
    items: PropTypes.any
};

const mapStateToProps = state => {
    return state.posts || {};
};

export default  connect(mapStateToProps)(Posts);
