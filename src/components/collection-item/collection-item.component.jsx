import React from 'react';
import {AddButton,CollectionItemContainer,CollectionFooter,NameContainer,ImageContainer,PriceContainer} from './collection-item.styles';
import {connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';


const CollectionItem = ({item,addItem }) => {
    const {name,price,imageUrl} = item;
    return (
    <CollectionItemContainer >
        <ImageContainer className='image' imageUrl = {imageUrl}/>

        <CollectionFooter>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
        </CollectionFooter>
        <AddButton inverted onClick ={()=> addItem(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
)};
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item)) 
})
export default connect(null,mapDispatchToProps)(CollectionItem);