import React, { useId } from 'react';
import './menu.css';
import { menuItemId } from 'components/menu/item/item-id';
import { MenuItem } from 'components/menu/item/MenuItem';

export function Menu(props: { items: MenuItemModel[] }) {
    const menuUId = useId();

    return (
        <div className="menu">
            {
                props.items.map((item) => {
                    const menuItemUId = menuItemId.create(menuUId, item.id);
                    return <MenuItem direction="down" key={menuItemUId} item={item}/>;
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