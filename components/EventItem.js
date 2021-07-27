import Styles from "@/styles/style.module.scss";
import Image from "next/image";
import Link from "next/link";
const EventItem = ({ evt }) => {
  const { event, img, info, link } = Styles;
  return (
    <div className={event}>
      <div className={img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
          alt="DJ image"
        />
      </div>
      <div className={info}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
