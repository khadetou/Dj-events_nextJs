import Layout from "@/components/Layout";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";
import styles from "@/styles/style.module.scss";
import DashboardEvent from "@/components/DashboardEvent";

export default function DashboardPage({ events }) {
  const { dash } = styles;
  const deleteEvt = (id) => {
    console.log(id);
  };

  return (
    <Layout title="User Dashboard">
      <div className={dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
        {events.map((evt) => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvt} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
