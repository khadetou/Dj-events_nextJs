import styles from "@/styles/style.module.scss";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function DashboardEvent({ evt, handleDelete }) {
  const { event, edit, deletes } = styles;

  return (
    <div className={event}>
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className={edit}>
          <FaPencilAlt /> <span>Edit Event</span>
        </a>
      </Link>
      <a href="#" className={deletes} onClick={() => handleDelete(evt.id)}>
        <FaTimes /> <span>Delete</span>
      </a>
    </div>
  );
}
