let studentList = [
    {
        id: 1,
        sid: 's3975',
        major: 'IT',
        phoneNumber: '0826227677',
        fullname: 'Nguyen Trong Nhan'
    }, {
        id: 2,
        sid: 's3123',
        major: 'Business',
        phoneNumber: '312123',
        fullname: 'Nguyen Van Teo'
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
