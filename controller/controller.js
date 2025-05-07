let studentList = [
    {
        id: 1,
        sid: 's3975',
        major: 'IT',
        phoneNumber: '0826227677',
        fullname: 'Nguyen Trong Nhan',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfkLP-PF7fVthqkcTyq5n9YQOGkqoj7zb2Q9J9Gx1iEGDHwbGId9PlJdv0vxsB2ITDk8&usqp=CAU'
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
