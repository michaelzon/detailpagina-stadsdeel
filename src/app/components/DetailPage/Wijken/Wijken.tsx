
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';
import Dropdown from '../../Dropdown/Dropdown';
import styles from './Wijken.module.css'

interface WijkenProps {
    wijken: Wijk[];
    handleSelect: (wijk: Wijk) => void;
}

export const Wijken: React.FC<WijkenProps> = ({
    wijken,
    handleSelect,
}) => {

    return (
        <section className={styles.interactiveSection}>
            <h2> Wijken </h2>
            <Dropdown onSelect={handleSelect} items={wijken}>
                <Dropdown.Toggle label={"wijk"} />
                <Dropdown.List>
                    {wijken.map((wijk: Wijk, i: number) => (
                        <Dropdown.Item key={i} index={i} item={wijk}/>
                    ))}
                </Dropdown.List>
            </Dropdown>
        </section>
    );
}