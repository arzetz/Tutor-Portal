import UserModel from '../models/User.js';
import jwt from "jsonwebtoken";


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

        const token = jwt.sign({
                _id: user._id,
            },
            'artemiy_krutoi', {
                expiresIn: '30d',
            }
        );

        res.status(200).json({
            message: 'Пользователь успешно зарегистрирован',
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться', //ты видишь??
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя нема',
            });
        }

        if (req.body.password != user._doc.password) {
            return res.status(400).json({
                message: 'Неверный пароль',
            });
        }

        const token = jwt.sign({
                _id: user._id,
            },
            'artemiy_krutoi', {
                expiresIn: '30d',
            }
        );

        res.json({
            token,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось войти',
        });
    }
};

export const getInfo = async (req,res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if(!user){
            return res.status(404).json({
                message:'Пользователь не найден'
            });
        }
        const {password,_id, __v, ...userData} = user._doc
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить инфу',
        });
    }
};