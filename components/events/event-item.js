import Link from "next/link"
import styles from './event-item.module.css';

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',
        {
            date: 'numeric',
            month: 'long',
            year: "numeric"
        });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`
    return <li className={styles.item}>
        <img src={'/' + image} alt="" />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.action}>
                <Link href={exploreLink}>Explore Events</Link>
            </div>
        </div>
    </li>
}

export default EventItem