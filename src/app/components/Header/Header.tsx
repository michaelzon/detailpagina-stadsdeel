import styles from './Header.module.css'

export default function Header() {

    return (
        <header role={"banner"} className={styles.header}>
            <img width={120} height={60} src={"logo-gemeente.svg"} alt={"logo-gemeente"} className={styles.logo} />
        </header>
    );
}