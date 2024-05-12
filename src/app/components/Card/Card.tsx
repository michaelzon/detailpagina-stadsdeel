'use client'

import React, { ReactNode, createContext } from 'react';
import styles from './Card.module.css'

interface CardProps {
    isOpen: boolean;
    children?: ReactNode;
};

interface TitleProps {
    title: string;
};

interface DescriptionProps {
    description: string;
};

interface UnorderedListProps {
    items: object[];
};

interface FooterProps {
    text: string;
    handleClose: () => void;
};

interface CardComponent extends React.FC<CardProps> {
    Title: React.FC<TitleProps>;
    Description: React.FC<DescriptionProps>;
    UnorderedList: React.FC<UnorderedListProps>;
    Footer: React.FC<FooterProps>;
};

const CardContext = createContext<CardProps>({ isOpen: false });

const Card: CardComponent = ({ isOpen, children }) => {
    return (
        <CardContext.Provider value={{ isOpen }}>
            {isOpen && (
                <div className={styles.container}> {children} </div>)}
        </CardContext.Provider>
    )
};

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h3> {title} </h3>
    )
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <p> {description} </p>
    )
};

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
    return (
        <ul className={styles.list}>
            {items.map((item: any, i: number) => (
                <li className={styles.item} key={i}>{item.naam}</li>
            ))}
        </ul>
    )
}

const Footer: React.FC<FooterProps> = ({ text, handleClose }) => {
    return (
        <button onClick={handleClose}>{text}</button>
    )
};

Card.Title = Title;
Card.Description = Description;
Card.UnorderedList = UnorderedList;
Card.Footer = Footer;

export default Card;