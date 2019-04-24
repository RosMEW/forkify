import React from 'react';

import Button from '../shared/Button/Button';
import './Header.scss';
import Icon from '../shared/Icon/Icon';

const Header = () => {
    return (
        <header className='Header'>
            <img src='img/logo.png' alt='Logo' className='Header__logo' />
            <form className='search'>
                <input
                    type='text'
                    className='search__field'
                    placeholder='Search over 1,000,000 recipes...'
                />
                <Button
                    buttonType='btn__search'
                    iconType='icon__search'
                    svgName='magnifying-glass'
                    buttonText='Search'
                />
            </form>
            <div className='likes'>
                <div className='likes__field'>
                    <Icon iconType='icon__likes' svgName='heart' />
                </div>
            </div>
        </header>
    );
};

export default Header;
