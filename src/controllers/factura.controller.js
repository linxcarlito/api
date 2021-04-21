import Factura from '../models/Factura';

export const getFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.status(200).json(facturas);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getFacturaById = async (req, res) => {
  const { id } = req.params;
  try {
    const factura = await Factura.findById(id);
    res.status(200).json(factura);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createFactura = async (req, res) => {
  try {
    const newFactura = new Factura({
      ...req.body,
    });
    const savedFactura = await newFactura.save();
    res.status(200).json(savedFactura);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export const cancelarFactura = async (req, res) => {
  const { id } = req.params;
  try {
    const updateFactura = await Factura.findByIdAndUpdate(id, {
      ...req.body,
      cancelada: true,
    });
    res.status(200).json(updateFactura);
  } catch (err) {
    res.status(400).json(err);
  }
};
