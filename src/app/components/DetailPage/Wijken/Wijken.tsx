import { Wijk } from '@/app/types/gebiedenTypes';
import Dropdown from '../../Dropdown/Dropdown';
import styles from './Wijken.module.css'

interface WijkenProps {
    wijken: Wijk[];
    handleSelectWijken: (wijk: Wijk) => void;
    wijkenIsLoading: boolean;
}

export const Wijken: React.FC<WijkenProps> = ({
    wijken,
    handleSelectWijken,
    wijkenIsLoading
}) => {

    return (
        <section className={styles.interactiveSection}>
            <h2> Wijken </h2>
            <Dropdown onSelect={handleSelectWijken} items={wijken}>
                <Dropdown.Toggle label={"Selecteer wijk"} />
                <Dropdown.List>
                    {wijkenIsLoading ?
                        <div className={styles.loader}></div>
                        :
                        wijken.map((wijk: Wijk, i: number) => (
                            <Dropdown.Item key={i} index={i} item={wijk} label={wijk.naam} />
                        ))}
                </Dropdown.List>
            </Dropdown>
        </section>
    );
}