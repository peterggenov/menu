import React from 'react';
import './app.css';
import { Menu } from 'components/menu/Menu';


export function App() {
    const items = [
        { id: 1, name: 'Home', subItems: [
                { id: 1, name: 'Home 1' },
                { id: 2, name: 'Home 2', subItems: [{ id: 1, name: 'Home 2 1' }, { id: 2, name: 'Home 2 2' }, { id: 3, name: 'Home 2 3' }] },
                { id: 3, name: 'Home 3', subItems: [{ id: 1, name: 'Home 3 1' }, { id: 2, name: 'Home 3 2', subItems: [{ id: 1, name: 'Home 3 2 1' }, { id: 2, name: 'Home 3 2 2' }, { id: 3, name: 'Home 3 2 3' }] }, { id: 3, name: 'Home 3 3' }] }
            ]
        },
        { id: 2, name: 'About 1' },
        { id: 3, name: 'About 2' },
        { id: 4, name: 'About 3', subItems: [{ id: 1, name: 'About 3 1' }, { id: 2, name: 'About 3 2' }, { id: 3, name: 'About 3 3' }]  },
        { id: 5, name: 'About 4' }
    ];
    return (
        <div className="app">
            <div className="app__header">Menu component playground</div>
            <div className="app__content content">
                <div className="content__menu-example-wide">
                    <Menu items={items}/>
                </div>
            </div>
        </div>
    )
}