import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded_token = jwt.verify(token, 'artemiy_krutoi');
            req.userId = decoded_token._id;
            next();

        } catch (err) {
            console.log(err);
            return res.status(403).json({
                message: 'Доступа нема',
            })

        }
    } else {
        return res.status(403).json({
            message: 'Доступа нема',
        })
    }
}