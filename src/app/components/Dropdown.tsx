'use client'

import React, { useState, createContext, useContext, ReactNode } from 'react';

interface DropdownProps {
    isOpen: boolean;
    toggle: () => void;
    highlightedIndex: number;
    setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
    items: string[];
    onSelect: (item: any) => void;
    handleSelect: (item: any) => void;
    children?: ReactNode;
}

const DropdownContext = createContext<DropdownProps>({ isOpen: false, toggle: () => { }, highlightedIndex: 0, setHighlightedIndex: () => { }, items: [''], onSelect: () => { }, handleSelect: () => { }, children: '' });

const Dropdown: React.FC<DropdownProps> = ({ children: any, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [items, setItems] = useState(['option 1', 'option 2', 'option 3']);

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
        items,
        onSelect,
        handleSelect,
    };


    return (
        <DropdownContext.Provider value={contextValue}>
            <div className={'dropdown'}>{children}</div>
        </DropdownContext.Provider>
    )
};

// const 



// const Toggle = () => {
//     const { isOpen, toggle } = useContext(DropdownContext)

//     return (
//         <button onClick={toggle} aria-haspopup="true" aria-expanded={isOpen}>
//             Toggle Dropdown
//         </button>
//     )
// }

// Dropdown.Toggle = Toggle; 

export default Dropdown;

