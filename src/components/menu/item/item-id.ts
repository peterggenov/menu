function createMenuItemUId(menuUId: string, menuItemUId: number) {
    return `${menuUId}_${menuItemUId}`;
}

function getMenuItemId(menuItemUId: string) {
    return parseInt(menuItemUId.split('_')[1]);
}

export const menuItemId = {
    create: createMenuItemUId,
    get: getMenuItemId
};