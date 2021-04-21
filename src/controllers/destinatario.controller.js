import Destinatario from '../models/Destinatario';

export const getDestinatarios = async (req, res) => {
  try {
    const destinatarios = await Destinatario.find();
    res.status(200).json(destinatarios);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getDestinatarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const destinatario = await Destinatario.findById(id);
    res.status(200).json(destinatario);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createDestinatario = async (req, res) => {
  try {
    const newDestinatario = await new Destinatario({
      ...req.body,
    });
    const savedDestinatario = await newDestinatario.save();
    res.status(200).json({
      mensaje: 'Destinatario guardado con exito',
      savedDestinatario,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateDestinatarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDestinatario = await Destinatario.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(200).json(updatedDestinatario);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteDestinatarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDestinatario = await Destinatario.findByIdAndDelete(id);
    res.status(200).json(deletedDestinatario);
  } catch (err) {
    res.status(400).json(err);
  }
};
