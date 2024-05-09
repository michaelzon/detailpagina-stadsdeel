import styles from './Header.module.css'

export default function Header() {

    return (
        <header role={"banner"} className={styles.header}>
            <img src="logo-gemeente.svg" alt="logo-gemeente" className={styles.logo} />
        </header>
    );
}