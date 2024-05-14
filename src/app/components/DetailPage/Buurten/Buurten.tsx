import Card from '../../Card/Card';
import styles from './Buurten.module.css'
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';

interface BuurtenProps {
    selectedWijk: Wijk;
    buurten: Buurt[];
    buurtenIsLoading: boolean;
    buurtenError: string | null;
}

export const Buurten: React.FC<BuurtenProps> = ({ selectedWijk, buurten, buurtenIsLoading, buurtenError }) => {

    if (buurtenError) {
        return (
            <section className={styles.endSection}>
                <Card type={'warning'}>
                    <Card.Icon><img height={36} width={36} src={'warning.svg'} alt={""} /></Card.Icon>
                    <div className={styles.textWrapper}>
                        <Card.Title>{"Error"}</Card.Title>
                        <Card.Description>{buurtenError}</Card.Description>
                    </div>
                    <Card.Button><img height={36} width={36} src={'cross.svg'} alt={"Close"} aria-label={'Close'} /></Card.Button>
                </Card>
            </section>

        )
    }

    return (
        <section className={styles.endSection}>
            {selectedWijk.naam && (
                <>
                    <h2>Buurten</h2>
                    <p>{`De volgende buurten liggen in ${selectedWijk.naam}:`}</p>
                    <ul className={styles.list}>
                        {buurtenIsLoading ?
                            <img
                                width={300}
                                height={300}
                                src={"skeleton-loader.svg"}
                                alt={"buurten zijn aan het laden..."}
                                className={styles.skeleton}
                            />
                            :
                            buurten.map((buurt: Buurt) => (
                                <li className={styles.item} key={buurt.identificatie}> {buurt.naam} </li>
                            ))}
                    </ul>
                </>
            )}
        </section>
    )
}