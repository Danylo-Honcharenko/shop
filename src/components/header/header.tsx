import React from 'react';
import ContainerRightControll from "./container-right-controll";
import ContainerCatalogSearch from "./container-catalog-search";
import ContainerLogoMenu from "./container-logo-menu";
import {IMenu} from "../../interfaces/IMenu";

const Header = (props: IMenu) => {
    return (
        <header className='header alignment'>
            <ContainerLogoMenu menuButton={props.stateMenu} activeMenu={props.stateMenuButton}/>
            <ContainerCatalogSearch />
            <ContainerRightControll />
        </header>
    );
};

export default Header;