
import styles from './Stadsdeel.module.css'

interface StadsdeelProps {
    stadsdeelCode: string;
}

export const Stadsdeel: React.FC<StadsdeelProps> = ({
    stadsdeelCode,
}) => {

    return (
        <section className={styles.beginSection}>
            <h1> Stadsdeel </h1>
            <h2> Nieuw-West </h2>
            <h3> Code </h3>
            {stadsdeelCode && <span className={styles.code}>{stadsdeelCode}</span>}
        </section>
    );
}