import TaskModel from "../models/Task.js";

export const create = async (req, res) => {
    try {
        const doc = new TaskModel({
            title: req.body.title,
            text: req.body.text,
            type: req.body.type,
            deadline: req.body.deadline,
            category: req.body.category,
            user: req.userId,
            budget_type: req.body.budget_type,
            budget: req.body.budget,
            imageUrl: req.body.imageUrl
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать карточку'
        });
    }
}