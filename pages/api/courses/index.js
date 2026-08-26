import connectToDB from "@/utils/db";
import coursesModel from "@/models/course";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      const course = await coursesModel.find({}).populate("teacher");

      res.json(course);
      break;
    }
    case "POST": {
      const { name, price, teacher } = req.body;

      const course = await coursesModel.create({ name, price, teacher });

      if (course) {
        res.json({ message: "The course was successfully registered." });
      } else {
        res.json({
          message: "There was a problem registering for the course.",
        });
      }

      break;
    }
  }
}
