import connectToDB from "@/utils/db";
import teachersModel from "@/models/teacher";

export default async function handler(req, res) {
    connectToDB();
    switch (req.method) {
        case "GET": {

            const { id } = req.query


            const teacher = await teachersModel.findOne({ _id: id });



            res.json({ message: "Information successfully received :))", data: teacher })
            break;
        }
        case "PUT": {
            const { id } = req.query
            const { name,
                email,
                password } = req.body;

            const newTeacher = await teachersModel.findOneAndUpdate({ _id: id }, {
                name,
                email,
                password
            }, { new: true, runValidators: true })


            if (newTeacher) {
                res.json({ message: "The information was successfully recorded." })
            } else {
                res.json({ message: "An error occurred while saving the data." })
            }
            break
        }
        case "DELETE": {
            const { id } = req.query
            const teacher = await teachersModel.findByIdAndDelete({ _id: id })
            if (teacher) {
                res.json({ message: "Course successfully deleted :))" })
            }
            break
        }
    }
}