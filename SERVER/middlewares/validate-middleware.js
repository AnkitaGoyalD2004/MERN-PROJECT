const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    req.body = req.body;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0];

    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(error);
    // res.status(400).json({ msg: message });

    next(error);
  }
};

module.exports = validate;
