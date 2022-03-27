const get = (model) => async (req, res) => {
    try {
        const item = await model.find()
            .lean().exec();
        return res.status(200).send(item);
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    };
};

const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
        return res.status(200).send(item);
    }
    catch (err) {
        res.status.send({ message: err.message });
    }
};
const getById = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
};
const patch = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true, }).lean().exec();
        return res.status(200).send(item);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
};
const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(item);
    } catch (error) {
        return res.status(500).send({ message: err.message });
    };
};

module.exports = (model) => {
    return {
        post: post(model),
        get: get(model),
        getById: getById(model),
        patch: patch(model),
        deleteOne: deleteOne(model),
    };
};