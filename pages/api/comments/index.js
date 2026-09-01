import connectToDB from "@/utils/db";
import commentsModel from "@/models/comment";

export default async function handler(req, res) {
    connectToDB();
    switch (req.method) {
        case "GET": {
            const comment = await commentsModel.find({}).populate("course");

            res.json(comment);
            break;
        }
        case "POST": {
            const { body, course } = req.body;



            // const mainCourse = await TeachersModel.findOne({ _id: course })


            const comment = await commentsModel.create({ body, course });

            if (comment) {
                res.json({ message: "The comment was successfully registered." });
            } else {
                res.json({
                    message: "There was a problem registering for the comment.",
                });
            }

            break;
        }
    }
}
