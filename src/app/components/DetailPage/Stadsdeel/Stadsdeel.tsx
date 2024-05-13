
import { StadsdeelType } from '@/app/types/gebiedenTypes';
import styles from './Stadsdeel.module.css'
import Dropdown from '../../Dropdown/Dropdown';

interface StadsdeelProps {
    selectedStadsdeel: StadsdeelType;
    stadsdelen: StadsdeelType[];
    handleSelectStadsdeel: (stadsdeel: StadsdeelType) => void;
}

export const Stadsdeel: React.FC<StadsdeelProps> = ({
    selectedStadsdeel,
    stadsdelen,
    handleSelectStadsdeel
}) => {

    return (
        <section className={styles.beginSection}>
            <h1> Stadsdeel </h1>
            <h2> Nieuw-West </h2>
            <h3> Code </h3>
            {selectedStadsdeel.code !== '' && <span className={styles.code}>{selectedStadsdeel.code}</span>}
            <Dropdown
             onSelect={handleSelectStadsdeel}
              items={stadsdelen}>
                <Dropdown.Toggle label={"Selecteer stadsdeel"} />
                <Dropdown.List>
                    {stadsdelen.map((stadsdeel: StadsdeelType, i: number) => (
                        <Dropdown.Item key={i} index={i} item={stadsdeel} label={stadsdeel.naam} />
                    ))}
                </Dropdown.List>
            </Dropdown>
        </section>
    );
}