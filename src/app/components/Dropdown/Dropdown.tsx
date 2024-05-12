import React, { useState, createContext, useContext, KeyboardEvent, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css'
import { DropdownComponent, DropdownContextProps, ListProps, ItemProps, ToggleProps } from '@/app/types/dropdownTypes'

const DropdownContext = createContext<DropdownContextProps>({
    isOpen: false,
    toggle: () => { },
    highlightedIndex: 0,
    itemIsSelected: false,
    selectedItem: { naam: '', identificatie: '' },
    setHighlightedIndex: () => { },
    onSelect: () => { },
    handleSelect: () => { },
    children: ''
});

const Dropdown: DropdownComponent = ({ items, onSelect, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [itemIsSelected, setItemIsSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ naam: '', identificatie: '' });
    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (item: any) => {
        setSelectedItem(item);
        setItemIsSelected(true);
        onSelect(item);
        close();
    };

    const contextValue = {
        isOpen,
        toggle,
        highlightedIndex,
        itemIsSelected,
        selectedItem,
        setHighlightedIndex,
        handleSelect,
        onSelect,
        children
    };

    const highLightNext = () => {
        setHighlightedIndex((prev) => (prev < items.length - 1 ? prev + 1 : prev));
    }

    const highlightPrev = () => {
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        switch (e.key) {
            case "ArrowDown":
                setIsOpen(true);
                e.preventDefault();
                highLightNext();
                break;
            case "ArrowUp":
                e.preventDefault();
                highlightPrev();
                break;
            case "Enter":
                e.preventDefault();
                isOpen ? handleSelect(items[highlightedIndex]) : null
                break;
            case "Escape":
                close();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <DropdownContext.Provider value={contextValue}>
            <div className={styles.container} onKeyDown={handleKeyDown} tabIndex={0} ref={dropdownRef}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
};

const Toggle: React.FC<ToggleProps> = ({ label }) => {
    const { isOpen, toggle, itemIsSelected, selectedItem } = useContext(DropdownContext);

    return (
        <button className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} onClick={toggle} aria-haspopup={"true"} aria-expanded={isOpen} aria-controls={"dropdown-menu"} >
            <span className={`${itemIsSelected ? '' : styles.notSelected}`}> {itemIsSelected ? `${selectedItem.naam}` : `Selecteer ${label}`} </span>
            <img height={16} width={16} src={"arrow-down.svg"} alt={""} className={`${isOpen ? styles.rotated : ''}`} />
        </button>
    )
};

const List: React.FC<ListProps> = ({ children }) => {
    const { isOpen } = useContext(DropdownContext);
    return isOpen ? <ul className={styles.list} id={"dropdown-menu"} role={"menu"}>{children}</ul> : null;
};

const Item: React.FC<ItemProps> = ({ item, index }) => {
    const { handleSelect, highlightedIndex } = useContext(DropdownContext);
    const isHighlighted = index === highlightedIndex;

    return (
        <li className={`${styles.item} ${isHighlighted ? styles.highlighted : ''}`}
            onClick={() => handleSelect(item)}
            role={"menuitem"}>
            {item.naam}
        </li>
    )
}

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;

