import { Dispatch, SetStateAction, ReactNode, FC } from 'react';

export interface DropdownProps {
    items: DataObj[];
    onSelect: (item: any) => void;
    children: ReactNode;
};

export interface ToggleProps {
    label: string;
};

export interface ListProps {
    children: ReactNode;
};

export type DataObj = {
    naam: string;
    identificatie: string;
}

export interface ItemProps {
    item: DataObj;
    index: number;
    isHighlighted?: boolean;
    label: string;
};

export interface DropdownComponent extends FC<DropdownProps> {
    Toggle: FC<ToggleProps>;
    List: FC<ListProps>;
    Item: FC<ItemProps>;
}

export interface DropdownContextProps {
    isOpen: boolean;
    toggle: () => void;
    highlightedIndex: number;
    itemIsSelected: boolean;
    selectedItem: DataObj;
    setHighlightedIndex: Dispatch<SetStateAction<number>>;
    onSelect: (item: any) => void;
    handleSelect: (object: any) => void;
    children: ReactNode;
}