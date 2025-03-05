import React, { useId } from 'react';
import './menu.css';
import { menuItemId } from 'components/menu/item/item-id';
import { MenuItem } from 'components/menu/item/MenuItem';

export function Menu<T extends MenuItemModel>(props: { items: T[], onSelect?: (item: T) => void }) {
    const uid = useId();

    return (
        <div className="menu">
            {
                props.items.map((item) => {
                    const itemUid = menuItemId.create(uid, item.id);
                    return <MenuItem direction="down" key={itemUid} item={item} onSelect={props.onSelect}/>;
                })
            }
        </div>
    );
}

export type MenuItemModel = {
    id: number;
    name: string;
    subItems?: MenuItemModel[];
};