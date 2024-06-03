const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    req.body = req.body;
    next();
  } catch (err) {
    const message = err.errors[0];
    console.log(message);
    res.status(400).json({ msg: message });
  }
};

module.exports = validate;
