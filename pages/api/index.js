import connectToDB from "@/utils/db";

export default function handler(req, res) {
  connectToDB();

  res.json({ name: "John Doe" });
}
