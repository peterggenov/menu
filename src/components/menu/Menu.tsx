import React, { useId } from 'react';
import './menu.css';
import { menuItemId } from 'components/menu/item/item-id';
import { MenuItem } from 'components/menu/item/MenuItem';

export function Menu<T extends MenuItemModel<T>>(props: { items: T[], onSelect?: (item: T) => void }) {
    const uid = useId();

    return (
        <div className="menu">
            {
                props.items.map((item: T) => {
                    const itemUid = menuItemId.create(uid, item.id);
                    return <MenuItem<T> direction="down" key={itemUid} item={item} onSelect={props.onSelect}/>;
                })
            }
        </div>
    );
}

export type MenuItemModel<T extends MenuItemModel<T>> = {
    id: number;
    name: string;
    subItems?: T[];
};