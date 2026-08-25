import connectToDB from "@/utils/db";
import usersModel from "@/models/user";
import { isValidObjectId } from "mongoose";

export default async function handler(req, res) {
  connectToDB();

  switch (req.method) {
    case "GET": {
      const { id } = req.query;

      const user = await usersModel.find({ _id: id });

      if (user) {
        return res.json(user);
      } else {
        res.status(404).json({
          message: "user not found !!",
        });
      }

      break;
    }
    case "DELETE": {
      const { id } = req.query;

      if (isValidObjectId(id)) {
        const deletedUser = await usersModel.findOneAndDelete({ _id: id });

        if (deletedUser) {
          return res.json({ message: "User removed successfully :))" });
        }
      } else {
        return res
          .status(422)
          .json({ message: "There was a problem deleting the user." });
      }
    }
    case "PUT": {
      const { id } = req.query;
      const { name, email, password } = req.body;

      const updateUser = await usersModel.findOneAndUpdate(
        { _id: id },
        {
          name,
          email,
          password,
        },
      );

      if (updateUser) {
        res.json({ message: "User update successfully" });
      } else {
        res.json({ message: "There was a problem editing user information." });
      }

      break;
    }
  }
}
