import React from 'react';
import Logo from "../../assets/svg/shop.svg";
import {IMenuButton} from "../../interfaces/IMenuButton";


const ContainerLogoMenu = (props: IMenuButton) => {

    return (
        <>
            <div>
                <button className={props.activeMenu ? 'button-menu' : 'button-menu-active'} onClick={props.menuButton}></button>
            </div>

            <div>
                <a href="src/components#" className='link-logo-text'>
                    <div className='alignment'>
                        <div>
                            <img src={Logo} alt="Logo" width='60px'/>
                        </div>
                        <div>
                            <h2 className='logo-text'>Шоппер</h2>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default ContainerLogoMenu;