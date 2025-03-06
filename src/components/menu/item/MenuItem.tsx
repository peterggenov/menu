import React, { useEffect, useState } from 'react';
import './menu-item.css';
import clsx from 'clsx';
import { MenuItemModel } from 'components/menu/Menu';
import { MenuPopup } from 'components/menu/item/MenuPopup';

export function MenuItem<T extends MenuItemModel<T>>(props: { direction: 'down' | 'right'; item: T; onSelect?: (item: T) => void }) {
    const [isOpened, setIsOpened] = useState(false);
    const [itemElement, setItemElement] = useState<HTMLElement | null>(null);

    const hasItems = !!props.item.subItems?.length;
    useEffect(() => {
        const onMouseEnter = () => {
            setIsOpened(true);
        }

        const onMouseLeave = () => {
            setIsOpened(false);
        };

        if (hasItems) {
            itemElement?.addEventListener('mouseenter', onMouseEnter);
            itemElement?.addEventListener('mouseleave', onMouseLeave);
        }

        return () => {
            itemElement?.removeEventListener('mouseenter', onMouseEnter);
            itemElement?.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [itemElement, hasItems]);

    const isDirectedRight = props.direction === 'right';
    const caretIcon = isDirectedRight ? 'bi-caret-right-fill' : 'bi-caret-down-fill';

    const _onClick = () => {
        props.onSelect?.(props.item);
    }
    return (
        <div className={clsx('menu-item', isOpened && 'menu-item--active', isDirectedRight && 'menu-item--right', hasItems && 'menu-item--has-sub-items')} ref={setItemElement}>
            <div className="menu-item__name" onClick={_onClick}>{props.item.name}</div>
            {props.item.subItems?.length && <div className={clsx('menu-item__arrow', 'bi', caretIcon)}></div>}
            {isOpened && props.item.subItems?.length && <MenuPopup<T> items={props.item.subItems} onSelect={props.onSelect}/>}
        </div>
    );
}