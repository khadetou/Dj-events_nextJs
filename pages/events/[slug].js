import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Styles from "@/styles/style.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventPage = ({ data: [event] }) => {
  const { image: img, back } = Styles;
  const { name, image, performers, description, venue, address } = event;

  return (
    <Layout>
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
