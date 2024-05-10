import Dropdown from '../Dropdown/Dropdown';
import styles from './DetailPage.module.css'
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';
import Image from 'next/image';

interface DetailPageProps {
    wijken: Wijk[];
    selectedWijk: Wijk;
    buurten: Buurt[];
    wijkenIsLoading: boolean;
    buurtenIsLoading: boolean;
    stadsdeelCode: string;
    handleSelect: (wijk: Wijk) => void;
    buurtenError: string | null;
}

export const DetailPage: React.FC<DetailPageProps> = ({
    wijken,
    selectedWijk,
    buurten,
    wijkenIsLoading,
    buurtenIsLoading,
    stadsdeelCode,
    handleSelect,
    buurtenError
}) => {

    if (buurtenError) {
        return <div> Error: {buurtenError} </div>
    }

    return (
        <main className={styles.main}>

            <section className={styles.description}>
                <div className={styles.wrapper}>
                    <h1> Stadsdeel </h1>
                    <h2> Nieuw-West</h2>
                </div>
                <div className={styles.codeContainer}>
                    <h3>Code</h3>
                    {stadsdeelCode && <span className={styles.code}>{stadsdeelCode}</span>}
                </div>
            </section>

            <section className={styles.interactiveSection}>
                <h2> Wijken </h2>
                <Dropdown onSelect={handleSelect} items={wijken}>
                    <Dropdown.Toggle label={"wijk"} />
                    <Dropdown.List>
                        {wijkenIsLoading ? <p> wijken zijn aan het laden </p> :
                            wijken.map((wijk: Wijk, i: number) => (
                                <Dropdown.Item key={i} index={i} item={wijk}></Dropdown.Item>
                            ))}
                    </Dropdown.List>
                </Dropdown>
            </section>

            <section className={styles.listSection}>
                <h2> Buurten </h2>
                <ul className={styles.list}>
                    {selectedWijk.naam !== "" && buurtenIsLoading ?
                        <Image width={300} height={300} src="skeleton-loader.svg" alt="buurten zijn aan het laden..." className={styles.skeleton} />
                        :
                        buurten.map((buurt: Buurt, i: number) => (
                            <li className={styles.item} key={i}>{buurt.naam}</li>
                        ))}
                </ul>
            </section>

        </main>
    );
}