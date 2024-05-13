
import { StadsdeelType } from '@/app/types/gebiedenTypes';
import styles from './Stadsdeel.module.css'

interface StadsdeelProps {
    stadsdeelData: StadsdeelType;
}

export const Stadsdeel: React.FC<StadsdeelProps> = ({ stadsdeelData }) => {

    // Fallback when stadsdeel data is not available. 
    if (!stadsdeelData) {
        return (
            <section className={styles.beginSection}>
                <h1>Stadsdeel</h1>
                <p>Data is currently unavailable.</p>
            </section>
        );
    }

    return (
        <section className={styles.beginSection}>
            <h1> Stadsdeel </h1>
            {stadsdeelData.naam && <h2> {stadsdeelData.naam}</h2>}
            <h3> Code </h3>
            {stadsdeelData.code && <span className={styles.code}>{stadsdeelData.code}</span>}
        </section>
    );
}