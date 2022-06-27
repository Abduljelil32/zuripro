let flight_list = require("../models/Flight")

exports.postflight = (req, res) => {
    flight_list.exampleModel.push(req.body);
    res.send(flight_list.exampleModel);
}

exports.deleteflight = (req, res) => {
    console.log(req.body.title)
    let result = flight_list.exampleModel.filter(data => data.title !== req.body.title);
    res.send(result);
}
exports.updteflight = (req, res) => {
    let id = req.params.title
    flight_list.exampleModel.map(data => {

        if (data.title === id) {
            console.log(true)
            data.title = req.body.title,
                data.time = req.body.time,
                data.price = req.body.price,
                data.date = req.body.date
        }

    });
    res.send(flight_list.exampleModel);
}
exports.singleflight = (req, res) => {
    let id = req.params.title
    let result = flight_list.exampleModel.find(data => data.title == id)
    res.send(result);
}

exports.getFlight = (req, res) => {
    res.send(flight_list.exampleModel)
}
