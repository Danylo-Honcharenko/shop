import React from 'react';
import UserMenu from '../../assets/svg/UserMenu.svg';
import {IToggleModalMenu} from "../../interfaces/IToggleModalMenu";

const ModalMenu = (props: IToggleModalMenu) => {
    return (
        <>
            {!props.showMenu &&
                <div className='bg-modal-menu' onClick={props.toggleModalMenu}>
                    <div className='modal-menu-contant' onClick={e => e.stopPropagation()}>
                        <div className='user-card-menu-login alignment'>
                            <div>
                                <img src={UserMenu} alt="User Menu"/>
                            </div>
                            <div>
                                <div>
                                    <p className='text-user-card-menu'><a href="#" className='link-user-card-menu'>Войти</a> | <a href="#" className='link-user-card-menu'>Регистрация</a></p>
                                </div>
                                <div>
                                    <p className='text-user-card-menu'>Авторизуйтесь для получения расширенных возможностей</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#"><button className='button-menu-1'>Каталог</button></a>
                            <a href="#"><button className='button-menu-2'>Избранное</button></a>
                            <a href="#"><button className='button-menu-3'>Справочный центр</button></a>
                            <a href="#"><button className='button-menu-4'>Корзина</button></a>
                        </div>
                        <hr/>
                        <div>
                            <p className='title-menu'>Помощь</p>
                            <a href="#" className='links-pay'>Оплата</a>
                        </div>
                        <hr/>
                        <div>
                            <p className='title-menu'>Информация о компании</p>
                            <a href="#" className='links-pay'>Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ModalMenu;