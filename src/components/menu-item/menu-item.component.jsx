import React from 'react';
import {MenuitemContainer,BackgroundImageContainer,ContentContainer,TitleContainer,SubTitleContainer} from './menu-item.styles';

import {withRouter} from 'react-router-dom';


const MenuItem = ( {title,imageUrl,size,history,linkUrl,match} ) =>(
    <MenuitemContainer size={size} onClick = {()=>history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer className = 'background-image' imageUrl={imageUrl}/>
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubTitleContainer>SHOP NOW</SubTitleContainer>
        </ContentContainer>
    </MenuitemContainer>
)

export default withRouter(MenuItem);