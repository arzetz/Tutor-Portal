import {
    body
} from "express-validator";

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({
        min: 5
    }),
    body('avatarUrl', 'Неверная ссылка на автотатарку').optional().isURL(),
];


export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть больше 5 символов').isLength({
        min: 5
    }),
];
export const TaskCreateValidation = [
    body('title', 'Введите норм заголовок').isLength({
        min: 3
    }).isString(),
    body('text', 'Введите больше 10 символов').isLength({
        min: 10
    }).isString(),
    body('type', 'Ты тютор или ученик??').isString(),
    body('budget_type', 'Укажи тип оплаты').isLength({
        min: 2
    }).isString(),
    body('tags', 'Неверный формат тэгов (укажите массив)').optional().isArray(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];