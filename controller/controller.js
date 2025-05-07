let studentList = [
    {
        id: 1,
        sid: 's3975',
        major: 'IT',
        phoneNumber: '0826227677',
        fullname: 'Nguyen Trong Nhan'
    }
]

exports.homePage = (req, res) => {
    res.render('index', { studentList });
}

exports.postStudent = (req, res) => {
    const { body } = req;
    studentList.push({
        id: studentList.length + 1,
        ...body,
    })
    res.json(200);

}

exports.viewAll = (req, res) => {
    res.render('viewAll', { studentList })
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
