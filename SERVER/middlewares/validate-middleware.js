// const validate = (schema) => async (req, res, next) => {
//   try {
//     const parseBody = await schema.validate(req.body);
//     req.body = parseBody;
//     next();
//   } catch (err) {
//     const message = err.errors[0].message;
//     console.log(message);
//     res.status(400).json({ msg: message });
//   }
// };

// module.exports = validate;

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    req.body = req.body;
    next();
  } catch (err) {
    const message = err.errors[0].message;
    console.log(message);
    res.status(400).json({ msg: message });
  }
};

module.exports = validate;
