'use client'

import React, { useState, createContext, useContext, ReactNode } from 'react';

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
    items: string[];
    children: ReactNode;
};

interface ItemProps {
    item: string;
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
    // items: string[];
    onSelect: (item: any) => void;
    handleSelect: (item: any) => void;
    children: ReactNode;
}

const DropdownContext = createContext<DropdownContextProps>({
    isOpen: false,
    toggle: () => { },
    highlightedIndex: 0,
    setHighlightedIndex: () => { },
    // items: ['', ''],
    onSelect: () => { },
    handleSelect: () => { },
    children: ''
});

const Dropdown: DropdownComponent = ({ children, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    // const [items, setItems] = useState(['1', '2']);

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
        // items,
        handleSelect,
        onSelect, // weet niet zeker of dit klopt 
        children // weet niet zeker of dit klopt
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

const List: React.FC<ListProps> = ({ items }) => {
    const { isOpen, highlightedIndex } = useContext(DropdownContext);

    return isOpen ? (
        <ul>
            {items.map((item, index) => (
                <Dropdown.Item
                    key={index}
                    item={item}
                    index={index}
                    isHighlighted={index === highlightedIndex}
                />
            ))}
        </ul>
    ) : null
};

const Item: React.FC<ItemProps> = ({ item, isHighlighted }) => {
    const { handleSelect, } = useContext(DropdownContext)

    return (
        <li onClick={() => handleSelect(item)}>
            {/* {item[key]} */}
            {/* {'hahaha'} */}
            {item}
        </li>
    )
}

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;

