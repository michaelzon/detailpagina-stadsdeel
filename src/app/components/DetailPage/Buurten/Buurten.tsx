import { useState } from 'react';
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
    const [open, setOpen] = useState<boolean>(true);

    // switching the boolean state directly using the previous state
    const handleCloseError = () => {
        setOpen(prevOpen => !prevOpen);
    }

    if (buurtenError) {
        return (
            <Card isOpen={open} type={'warning'}>
                <Card.Icon src={"warning.svg"} />
                <div className={styles.textWrapper}>
                    <Card.Title title={'Error'} />
                    <Card.Description description={buurtenError} />
                </div>
                <Card.Button handleClose={handleCloseError} />
            </Card>
        )
    }

    console.log('buurten', buurten);

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