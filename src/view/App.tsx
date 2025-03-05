import React, { useState } from 'react';
import './app.css';
import { Menu } from 'components/menu/Menu';

type SomeRandomType = {
    id: number;
    name: string;
    subItems?: SomeRandomType[];
    randomField?: string;
    randomField2?: string;
}

export function App() {
    const [selectedItem, setSelectedItem] = useState<SomeRandomType | null>(null);
    const items: SomeRandomType[] = [
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
            <div className="app__header">{selectedItem ? selectedItem.name : 'Nothing yet chosen'}</div>
            <div className="app__content content">
                <div className="content__menu-example-wide">
                    <Menu items={items} onSelect={(item) => setSelectedItem(item)}/>
                </div>
            </div>
        </div>
    )
}