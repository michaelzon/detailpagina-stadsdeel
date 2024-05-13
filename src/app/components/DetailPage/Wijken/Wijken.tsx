import { Wijk } from '@/app/types/gebiedenTypes';
import Dropdown from '../../Dropdown/Dropdown';
import styles from './Wijken.module.css'

interface WijkenProps {
    wijkenData: Wijk[];
    handleSelect: (wijk: Wijk) => void;
}

export const Wijken: React.FC<WijkenProps> = ({ wijkenData, handleSelect }) => {

    // if (!wijkenData.length) {
    //     return (
    //         <section className={styles.interactiveSection}>
    //             <h2>Wijken</h2>
    //             <p>No wijken available.</p>
    //         </section>
    //     );
    // }

    return (
        <section className={styles.interactiveSection}>
            <h2> Wijken </h2>
            <Dropdown onSelect={handleSelect} items={wijkenData}>
                <Dropdown.Toggle label={"wijk"} />
                <Dropdown.List>
                    {wijkenData.map((wijk: Wijk, i: number) => (
                        <Dropdown.Item key={wijk.identificatie} index={i} item={wijk} label={wijk.naam} />
                    ))}
                </Dropdown.List>
            </Dropdown>
        </section>
    );
}