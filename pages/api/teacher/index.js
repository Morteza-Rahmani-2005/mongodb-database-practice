import connectToDB from "@/utils/db";
import teachersModel from "@/models/teacher";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      const teachers = await teachersModel.find();

      res.json(teachers);
      break;
    }
    case "POST": {
      const { name, email, password } = req.body;

      const teacher = await teachersModel.create({ name, email, password });
      if (teacher) {
        res.status(201).json({ message: "User created successfully", teacher });
      } else {
        res.status(400).json({ message: "User creation failed" });
      }

      break;
    }
  }
}
