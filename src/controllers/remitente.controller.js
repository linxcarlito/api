import Remitente from '../models/Remitente';

export const getRemitentes = async (req, res) => {
  try {
    const remitentes = await Remitente.find();
    res.status(200).json(remitentes);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getRemitenteById = async (req, res) => {
  const { id } = req.params;
  try {
    const remitente = await Remitente.findById(id);
    res.status(200).json(remitente);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createRemitente = async (req, res) => {
  try {
    const newRemitente = await new Remitente({
      ...req.body,
    });
    const savedRemitente = await newRemitente.save();
    res.status(200).json({
      mensaje: 'Remitente guardado con exito',
      savedRemitente,
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

export const updateRemitenteById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRemitente = await Remitente.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(200).json(updatedRemitente);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteRemitenteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRemitente = await Remitente.findByIdAndDelete(id);
    res.status(200).json(deletedRemitente);
  } catch (err) {
    res.status(400).json(err);
  }
};
