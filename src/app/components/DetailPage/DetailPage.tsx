import Dropdown from '../Dropdown/Dropdown';
import styles from './DetailPage.module.css'
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';

interface DetailPageProps {
    wijken: Wijk[];
    selectedWijk: Wijk;
    buurten: Buurt[];
    wijkenIsLoading: boolean;
    buurtenIsLoading: boolean;
    stadsdeelCode: string;
    handleSelect: (wijk: Wijk) => void;
}

export const DetailPage: React.FC<DetailPageProps> = ({
    wijken,
    selectedWijk,
    buurten,
    wijkenIsLoading,
    buurtenIsLoading,
    stadsdeelCode,
    handleSelect
}) => {


    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.wrapper}>
                    <h5> Stadsdeel </h5>
                    <h1> Nieuw-West</h1>
                </div>
                <div className={styles.codeContainer}>
                    <h6>Code</h6>
                    {stadsdeelCode && <span className={styles.code}>{stadsdeelCode}</span>}
                </div>
            </div>
            <div className={styles.interactiveSection}>
                <h3> Wijken </h3>
                <Dropdown onSelect={handleSelect} items={wijken}>
                    <Dropdown.Toggle label={"wijk"} />
                    <Dropdown.List>
                        {wijkenIsLoading ? <p> wijken are loading... </p> :
                            wijken.map((wijk: Wijk, i: number) => (
                                <Dropdown.Item key={i} index={i} item={wijk}></Dropdown.Item>
                            ))}
                    </Dropdown.List>
                </Dropdown>
                <h4> Buurten </h4>
                <ul className={styles.list}>
                    {selectedWijk.naam !== "" && buurtenIsLoading ?
                        <img src="skeleton-loader.svg" alt="buurten zijn aan het laden..." className={styles.skeleton} />
                        :
                        buurten.map((buurt: Buurt, i: number) => (
                            <li className={styles.item} key={i}>{buurt.naam}</li>
                        ))}
                </ul>
            </div>
        </main>
    );
}