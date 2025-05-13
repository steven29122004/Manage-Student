let studentList = [];

const studentEntity = require('../model/student.model');

exports.homePage = async (req, res) => {
    const student = await studentEntity.find();

    res.render('index', { studentList: student, title: 'Form' });
}

exports.postStudent = (req, res) => {
    const { body } = req;
    studentList.push({
        id: studentList.length + 1,
        ...body,
    })
    res.json(200);

}

exports.editStudent = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const index = studentList.findIndex(item => item.id == id);
    studentList[index].sid = body.sid;
    studentList[index].major = body.major;
    studentList[index].phoneNumber = body.phoneNumber;
    studentList[index].fullname = body.fullname;
    res.json(200);

}

exports.viewAll = async (req, res) => {
    const student = await studentEntity.find();
    res.render('viewAll', { student })
}

exports.studentDetail = (req, res) => {
    const { id } = req.params;
    const studentDetails = studentList.find(item => item.id == id)
    res.render('studentDetail', { studentDetails })
}

exports.bindingStudent = (req, res) => {
    const { id } = req.params;
    const studentDetails = studentList.find(item => item.id == id)
    res.json(studentDetails)
}




exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const index = studentList.findIndex(item => item.id == id);
    studentList.splice(index, 1);
    res.json(200)
}
