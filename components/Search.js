import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/style.module.scss";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  const { search } = styles;
  return (
    <div className={search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search events"
        />
      </form>
    </div>
  );
}
