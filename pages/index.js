import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";
export default function Home({ events }) {
  return (
    <Layout>
      <h1>UpComming Events</h1>
      {events.length === 0 && <h3>No event to Show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/event">
          <a className="btn-secondary">View all events</a>
        </Link>
      )}
    </Layout>
  );
}

//fetching data from the backend
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
