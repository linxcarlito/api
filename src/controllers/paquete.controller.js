import Paquete from '../models/Paquete';

export const getPaquetes = async (req, res) => {
  const paquetes = await Paquete.find();
  console.log(req.body, req.params);
  res.status(200).send(paquetes);
};

export const getPaquetesByTipo = async (req, res) => {
  const { id } = req.params;
  try {
    const paquetes = await Paquete.find({ tipo: id });
    res.status(200).json(paquetes);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const getCountPaquetes = async (req, res) => {
  try {
    const paqueteAlmacenOrigen = await Paquete.countDocuments({
      tipo: 'Almacen de Origen',
    });
    const paqueteLineaAerea = await Paquete.countDocuments({
      tipo: 'Linea Aerea',
    });
    const paqueteEnviados = await Paquete.countDocuments({
      tipo: 'Enviado',
    });
    const paqueteAduanas = await Paquete.countDocuments({
      tipo: 'Aduanas',
    });
    const paqueteAlmacen = await Paquete.countDocuments({
      tipo: 'Almacen',
    });
    res.status(200).json({
      almacenOrigen: {
        title: 'Paquetes en almacen de Origen',
        cantidad: paqueteAlmacenOrigen,
      },
      almacenLineaAerea: {
        title: 'Paquetes en Linea Aerea',
        cantidad: paqueteLineaAerea,
      },
      almacenEnviados: {
        title: 'Paquetes entregados',
        cantidad: paqueteEnviados,
      },
      almacenAduanas: {
        title: 'Paquetes en Aduanas',
        cantidad: paqueteAduanas,
      },
      almacenPrincipal: {
        title: 'Paquetes en almacen principal',
        cantidad: paqueteAlmacen,
      },
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const getPaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteFound = await Paquete.findById(id);
    res.status(200).json(paqueteFound);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const createPaquete = async (req, res) => {
  console.log(req.body);
  try {
    const newPaquete = await new Paquete({
      ...req.body,
    });
    const savePaquete = await newPaquete.save();

    res.status(200).send({ savePaquete });
  } catch (err) {
    res.status(400).send({ err });
    console.log(err);
  }
};

export const deletePaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteDeleted = await Paquete.findByIdAndDelete(id);
    res.status(200).send({
      mensaje: 'Paquete eliminado',
      paquete: paqueteDeleted,
    });
  } catch (err) {
    res.status(400).send({ err });
  }
};

export const updatePaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteUpdated = await Paquete.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(200).json({ mensaje: 'Paquete actualizado', paqueteUpdated });
  } catch (err) {
    res.status(400).json({ err });
  }
};
