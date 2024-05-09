import styles from './Header.module.css'
import Image from 'next/image';

export default function Header() {

    return (
        <header role={"banner"} className={styles.header}>
            <Image width={120} height={60} src={"logo-gemeente.svg"} alt={"logo-gemeente"} className={styles.logo} />
        </header>
    );
}