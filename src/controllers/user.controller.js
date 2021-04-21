import User from '../models/User';

export const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await new User({
      username,
      password: await User.encryptPassword(password),
    });

    const savedUser = await newUser.save();

    res.status(200).json({ status: 'saved', user: savedUser });
    console.log(savedUser);
  } catch (err) {
    res.status(400).send({ err });
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({
    username: username.toLowerCase(),
  });

  if (!userFound)
    return res.status(400).json({ message: 'Usuario no encontrado.' });

  const matchPassword = await User.comparePassword(
    password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({
      token: null,
      message: 'La contraseña no coincide.',
    });
  res.status(200).send({
    username: userFound.username,
  });
};
