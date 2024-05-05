'use client'

import React, { useState, createContext, useContext, ReactNode } from 'react';
import styles from "../page.module.css";

interface DropdownProps {
    onSelect: (item: any) => void;
    children: ReactNode;
};

interface ToggleProps {
    // isOpen: boolean;
    // toggle: () => void;
};

interface ListProps {
    // highlightedIndex: number;
    children: ReactNode;
};

interface ItemProps {
    item?: string;
    index?: number;
    isHighlighted?: boolean;
};

interface DropdownComponent extends React.FC<DropdownProps> {
    Toggle: React.FC<ToggleProps>;
    List: React.FC<ListProps>;
    Item: React.FC<ItemProps>;
}

interface DropdownContextProps {
    isOpen: boolean;
    toggle: () => void;
    highlightedIndex: number;
    setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
    onSelect: (item: any) => void;
    handleSelect: (item: any) => void;
    children: ReactNode;
}

const DropdownContext = createContext<DropdownContextProps>({
    isOpen: false,
    toggle: () => { },
    highlightedIndex: 0,
    setHighlightedIndex: () => { },
    onSelect: () => { },
    handleSelect: () => { },
    children: ''
});

const Dropdown: DropdownComponent = ({ children, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    const handleSelect = (item: any) => {
        onSelect(item);
        close();
    };

    const contextValue = {
        isOpen,
        toggle,
        highlightedIndex,
        setHighlightedIndex,
        handleSelect,
        onSelect,
        children
    };

    return (
        <DropdownContext.Provider value={contextValue}>
            <div className={'dropdown'}>{children}</div>
        </DropdownContext.Provider>
    )
};

const Toggle: React.FC<ToggleProps> = () => {
    const { isOpen, toggle } = useContext(DropdownContext);

    return (
        <button onClick={toggle} aria-haspopup="true" aria-expanded={isOpen}>
            Toggle Dropdown
        </button>
    )
};

const List: React.FC<ListProps> = ({ children }) => {
    const { isOpen } = useContext(DropdownContext);
    return isOpen ? <ul>{children}</ul> : null;
};

const Item: React.FC<ItemProps> = ({ item, isHighlighted }) => {
    const { handleSelect, } = useContext(DropdownContext);

    return (
        <li className={`${styles.dropdownItem} ${isHighlighted ? styles.highlighted : ''}`}
            onClick={() => handleSelect(item)}>
            {item}
        </li>
    )
}

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;

