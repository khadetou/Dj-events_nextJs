import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import { useRouter } from "next/router";
import Link from "next/link";
import qs from "qs";

export default function SearchPages({ events }) {
  const router = useRouter();
  const { term } = router.query;

  return (
    <Layout title="Search results">
      <Link href="/events">Go back</Link>
      <h1>Search results for {term}</h1>
      {events.length === 0 && <h3>No event to Show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

//fetching data from the backend
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
