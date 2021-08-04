import { API_URL } from "@/config/index";
import cookie from "cookie";

export default async function User(req, res) {
  if (req.method === "GET") {
    const cookies = cookie.parse(req.headers.cookie);

    if (!cookies) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const { token } = cookies;

    const strapiRes = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: "Message forbidden" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
