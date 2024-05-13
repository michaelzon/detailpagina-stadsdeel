'use client'

import React, { ReactNode, createContext } from 'react';
import styles from './Card.module.css'

interface CardProps {
    isOpen: boolean;
    type: "warning";
    children?: ReactNode;
};

interface IconProps {
    src: string;
}

interface TitleProps {
    title: string;
};

interface DescriptionProps {
    description: string;
};

interface ButtonProps {
    handleClose: () => void;
};

interface CardComponent extends React.FC<CardProps> {
    Icon: React.FC<IconProps>;
    Title: React.FC<TitleProps>;
    Description: React.FC<DescriptionProps>;
    Button: React.FC<ButtonProps>;
};

const CardContext = createContext<CardProps>({ isOpen: false, type: "warning"});

const Card: CardComponent = ({ isOpen, type, children }) => {
    return (
        <CardContext.Provider value={{ isOpen, type }}>
            {isOpen && (
                <div className={`${styles.container} ${type === 'warning' ? styles.warning : ''}`}> {children} </div>)}
        </CardContext.Provider>
    )
};

const Icon: React.FC<IconProps> = ({ src }) => {
    return (
        <img height={36} width={36} src={src} alt={""}/>
    )
};

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <h1> {title} </h1>
    )
};

const Description: React.FC<DescriptionProps> = ({ description }) => {
    return (
        <p> {description} </p>
    )
};

const Button: React.FC<ButtonProps> = ({ handleClose }) => {
    return (
        <button onClick={handleClose} aria-label={'Close'}><img height={36} width={36} src={'cross.svg'} alt={"Close"}/></button>
    )
};

Card.Icon = Icon;
Card.Title = Title;
Card.Description = Description;
Card.Button = Button;

export default Card;