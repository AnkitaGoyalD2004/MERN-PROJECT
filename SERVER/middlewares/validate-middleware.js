const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    req.body = req.body;
    next();
  } catch (err) {
    const status = 422;
    const message = err.errors[0];

    const error = {
      status,
      message,
    };
    console.log(message);
    // res.status(400).json({ msg: message });

    next(message);
  }
};

module.exports = validate;
