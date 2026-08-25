import connectToDB from "@/utils/db";
import usersModel from "@/models/user";

export default async function handler(req, res) {
  connectToDB();
  switch (req.method) {
    case "GET": {
      const users = await usersModel.find();

      res.json(users);
      break;
    }
    case "POST": {
      const { name, email, password } = req.body;
      console.log(name, email, password);

      const user = await usersModel.create({ name, email, password });
      if (user) {
        res.status(201).json({ message: "User created successfully", user });
      } else {
        res.status(400).json({ message: "User creation failed" });
      }

      break;
    }
  }
}
