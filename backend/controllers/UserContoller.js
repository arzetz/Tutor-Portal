import UserModel from '../models/User.js';


export const register = async (req, res) => {
    try {
        const doc = new UserModel({
            Name: req.body.name,
            Surname: req.body.surname,
            age: req.body.age,
            email: req.body.email,
            number: req.body.number,
            password: req.body.password,
            role: req.body.role
        });

        const user = await doc.save();

        res.status(200).json({
            message: 'Пользователь успешно зарегистрирован'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрировать пользователя',
        });
    }
};
