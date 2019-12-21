import React from 'react';
import {CollectionItemContainer,CollectionPageContainer,TitleContainer} from './collection.styles';

import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title,items} = collection;
    return(
    <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer> 
        <CollectionItemContainer>
            {
                items.map(item=>
                    <CollectionItem key = {item.id} item = {item}/>)
            }    
        </CollectionItemContainer> 
    </CollectionPageContainer>
)};

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
