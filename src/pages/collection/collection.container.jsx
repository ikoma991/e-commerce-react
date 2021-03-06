import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';

import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const mapStateToProps = createStructuredSelector({
    isLoading: (state)=> !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;