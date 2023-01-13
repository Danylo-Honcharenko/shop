import React from 'react';

const ContainerCatalogSearch = () => {
    return (
        <div className='alignment container-catalog-search'>
            <div>
                <button className='button-catalog'>Каталог</button>
            </div>
            <div>
                <input type="text" placeholder='Поиск продуктов' className='search-input'/>
            </div>
            <div>
                <button className='search-button'>Найти</button>
            </div>
        </div>
    );
};

export default ContainerCatalogSearch;