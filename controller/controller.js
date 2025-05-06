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
exports.viewAll = (req, res) => {
    res.render('viewAll', { studentList })
}

exports.studentDetail = (req, res) => {
    const { id } = req.params;
    const studentDetails = studentList.find(item => item.id == id)
    res.render('studentDetail', { studentDetails })
}
