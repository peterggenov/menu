import React from 'react';
import { MenuItemModel } from 'components/menu/Menu';
import { MenuItem } from 'components/menu/item/MenuItem';

export function MenuPopup<T extends MenuItemModel>(props: { items: T[], onSelect?: (item: T) => void }) {
    return <div className="menu-popup">
        {props.items.map((item: T) => {
            return <MenuItem direction="right" key={item.id} item={item} onSelect={props.onSelect}/>
        })}
    </div>;
}