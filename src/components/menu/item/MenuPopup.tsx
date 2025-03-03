import React from 'react';
import { MenuItemModel } from 'components/menu/Menu';
import { MenuItem } from 'components/menu/item/MenuItem';

export function MenuPopup(props: { items: MenuItemModel[] }) {
    return <div className="menu-popup">
        {props.items.map((item: MenuItemModel) => {
            return <MenuItem direction="right" key={item.id} item={item}/>
        })}
    </div>;
}