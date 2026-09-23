import connectToDB from "@/utils/db";
import coursesModel from "@/models/course";
import commentsModel from "@/models/comment";



export default async function handler(req, res) {
    connectToDB();
    switch (req.method) {
        case "GET": {

            const { id } = req.query


            const course = await coursesModel.findOne({ _id: id }).populate("comments").lean();



            res.json({ message: "Information successfully received :))", data: course })
            break;
        }
        case "PUT": {
            const { id } = req.query
            const { name,
                price,
                teacher } = req.body;

            const newCourse = await coursesModel.findOneAndUpdate({ _id: id }, {
                name,
                price,
                teacher
            }, { new: true, runValidators: true })


            if (newCourse) {
                res.json({ message: "The information was successfully recorded." })
            } else {
                res.json({ message: "An error occurred while saving the data." })
            }
            break
        }
        case "DELETE": {
            const { id } = req.query
            const course = await coursesModel.findByIdAndDelete({ _id: id })
            if (course) {
                res.json({ message: "Course successfully deleted :))" })
            }
            break
        }
    }
}