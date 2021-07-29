import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaTimes, FaPencilAlt } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Styles from "@/styles/style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EventPage = ({ data: [event] }) => {
  const { event: evt, controls, delete: suppress, image: img, back } = Styles;
  const {
    slug,
    date,
    time,
    name,
    image,
    performers,
    description,
    venue,
    address,
    id,
  } = event;

  const router = useRouter();
  const deleteEvent = async (e) => {
    if (confirm("Are you sure ??")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };
  return (
    <Layout>
      <div className={evt}>
        <div className={controls}>
          <Link href={`/events/edit/${id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={suppress} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(date).toLocaleDateString("en-US")} at {time}
        </span>
      </div>
      <h1>{name}</h1>
      <ToastContainer />
      {image && (
        <div className={img}>
          <Image
            src={image.formats.medium.url}
            alt="image"
            width={960}
            height={600}
          />
        </div>
      )}
      <h3>Performers</h3>
      <p>{performers}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Venue: {venue}</h3>
      <p> {address}</p>
      <Link href="/events">
        <a className={back}> Go Back</a>
      </Link>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const data = await res.json();
  const paths = data.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}
//Get data with getStaticProps
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

//Get data with getServerSideProps
// export async function getServerSideProps({ query: { id } }) {
//   const res = await fetch(`${API_URL}/api/events/${id}`)
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }

export default EventPage;
