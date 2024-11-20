import React, { ReactNode, createContext, useContext, useState } from 'react';
import styles from './Card.module.css'

interface CardProps {
    type: "warning";
    children?: ReactNode;
}

interface IconProps {
    children: ReactNode;
}

interface TitleProps {
    children: string;
}

interface DescriptionProps {
    children: string;
}

interface ButtonProps {
    children: ReactNode;
}

interface CardComponent extends React.FC<CardProps> {
    Icon: React.FC<IconProps>;
    Title: React.FC<TitleProps>;
    Description: React.FC<DescriptionProps>;
    Button: React.FC<ButtonProps>;
};

interface CardContextProps {
    isOpen: boolean;
    handleClose: () => void;
}

const CardContext = createContext<CardContextProps>({ isOpen: true, handleClose: () => { } });

const Card: CardComponent = ({ type, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => setIsOpen(!isOpen);

    const contextValue = {
        isOpen,
        handleClose
    }

    return (
        <CardContext.Provider value={contextValue}>
            {isOpen && (
                <div className={`${styles.container} ${type === 'warning' ? styles.warning : ''}`}>
                    {children}
                </div>
            )}
        </CardContext.Provider>
    )
};

const Icon: React.FC<IconProps> = ({ children }) => {
    return (
        <div> {children} </div>
    )
};

const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <h1> {children} </h1>
    )
};

const Description: React.FC<DescriptionProps> = ({ children }) => {
    return (
        <p> {children} </p>
    )
};

const Button: React.FC<ButtonProps> = ({ children }) => {
    const { handleClose } = useContext(CardContext);

    return (
        <button onClick={handleClose} aria-label={'Close'}>
            {children}
        </button>
    )
};

Card.Icon = Icon;
Card.Title = Title;
Card.Description = Description;
Card.Button = Button;

export default Card;