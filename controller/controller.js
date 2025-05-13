let studentList = [];

const studentEntity = require('../model/student.model');
const ResponseType = require('../dto/response.type');
exports.homePage = async (req, res) => {
    const student = await studentEntity.find();

    res.render('index', { studentList: student, title: 'Form' });
}

exports.postStudent = async (req, res) => {

    try {
        const { body: {
            sid,
            major,
            phoneNumber,
            fullname,
            image
        } } = req;
        const studentPost = new studentEntity({
            sid,
            major,
            phoneNumber,
            fullname,
            image
        });
        await studentPost.save();

        res.json(new ResponseType(true).success());
    } catch (error) {
        console.log(error);
        res.json(new ResponseType(null).error())

    }


}

exports.editStudent = (req, res) => {
    // const { id } = req.params;
    // const { body } = req;
    // const index = studentList.findIndex(item => item.id == id);
    // studentList[index].sid = body.sid;
    // studentList[index].major = body.major;
    // studentList[index].phoneNumber = body.phoneNumber;
    // studentList[index].fullname = body.fullname;
    // res.json(200);

}

exports.viewAll = async (req, res) => {
    const student = await studentEntity.find();
    res.render('viewAll', { student })
}

exports.studentDetail = async (req, res) => {
    const { id } = req.params;
    const studentDetailed = await studentEntity.findById(id);

    res.render('studentDetail', { studentDetailed })
}

exports.bindingStudent = (req, res) => {
    const { id } = req.params;
    const studentDetails = studentList.find(item => item.id == id)
    res.json(studentDetails)
}




exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStudent = await studentEntity.findByIdAndDelete(id);
        if (!deleteStudent) {
            res.json(new ResponseType(null).error())
        }
        res.status(200).json(new ResponseType(null).success());
    } catch (error) {
        res.json(new ResponseType(null).error())
    }

}
