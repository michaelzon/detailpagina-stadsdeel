import Card from '../../Card/Card';
import styles from './Buurten.module.css'
import { Buurt, Wijk } from '@/app/types/gebiedenTypes';

interface BuurtenProps {
    selectedWijk: Wijk;
    buurten: Buurt[];
    buurtenIsLoading: boolean;
    buurtenError: string | null;
}

export const Buurten: React.FC<BuurtenProps> = ({
    selectedWijk,
    buurten,
    buurtenIsLoading,
    buurtenError
}) => {

    if (buurtenError) {
        return <div> Error: {buurtenError} </div>
    }

    return (
        <>
            {/* <section className={styles.listSection}>
                {selectedWijk.naam !== "" && <h2> Buurten </h2>}
                <ul className={styles.list}>
                    {selectedWijk.naam !== "" && buurtenIsLoading ?
                        <img width={300} height={300} src="skeleton-loader.svg" alt="buurten zijn aan het laden..." className={styles.skeleton} />
                        :
                        buurten.map((buurt: Buurt, i: number) => (
                            <li className={styles.item} key={i}>{buurt.naam}</li>
                        ))}
                </ul>
            </section> */}
            <section className={styles.endSection}>
                {selectedWijk.naam !== "" &&
                    <Card isOpen={true}>
                        <Card.Title title={'Buurten'} />
                        <Card.Description description={`De volgende buurten liggen in ${selectedWijk.naam}:`} />
                        {buurtenIsLoading ?
                            <img width={300} height={300} src="skeleton-loader.svg" alt="buurten zijn aan het laden..." className={styles.skeleton} />
                            :
                            <Card.UnorderedList items={buurten} />
                        }
                    </Card>
                }
            </section>

        </>
    )
}