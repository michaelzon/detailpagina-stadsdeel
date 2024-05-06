'use client'

import React, { ReactNode, createContext } from 'react';

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

interface FooterProps {
    text: string;
    handleClose: () => void;
};

interface CardComponent extends React.FC<CardProps> {
    Title: React.FC<TitleProps>;
    Description: React.FC<DescriptionProps>;
    Footer: React.FC<FooterProps>;
};

const CardContext = createContext<CardProps>({ isOpen: false });

const Card: CardComponent = ({ isOpen, children }) => {
    return (
        <CardContext.Provider value={{ isOpen }}>
            {isOpen && (
                <div>{children}</div>
            )}
        </CardContext.Provider>
    )
};

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h4> {title} </h4>
    )
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <p> {description} </p>
    )
};

const Footer: React.FC<FooterProps> = ({ text, handleClose }) => {
    return (
        <button onClick={handleClose}>{text}</button>
    )
};

Card.Title = Title;
Card.Description = Description;
Card.Footer = Footer;

export default Card;

