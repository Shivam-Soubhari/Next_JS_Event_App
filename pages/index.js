import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'

function HomePage() {
    const getFeaturedEvent = getFeaturedEvents()
    return (
        <div>
            <EventList items={getFeaturedEvent} />
        </div>
    )
}

export default HomePage