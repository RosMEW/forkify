import React from 'react';

import './App.scss';
import Header from './Header/Header';
import RecipeList from './RecipeList/RecipeList';
import RecipeBody from './RecipeBody/RecipeBody';
import ShoppingList from './ShoppingList/ShoppingList';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <RecipeList />
            <RecipeBody />
            <ShoppingList />
        </div>
    );
};

export default App;
