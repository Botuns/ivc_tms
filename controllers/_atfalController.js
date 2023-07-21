const AtfalService = require('../services/_atfalService');

const atfalService = new AtfalService();

exports.getAllAtfal = async (req, res) => {
  try {
    const allAtfal = await atfalService.getAllAtfal();
    res.json({allAtfal,status:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAtfalByDila = async (req, res) => {
  const { dila } = req.params;
  try {
    const atfalByDila = await atfalService.getAtfalByDila(dila);
    res.json(atfalByDila);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAtfalByTagNumber = async (req, res) => {
  const { tagNumber } = req.params;
  try {
    const atfalByTagNumber = await atfalService.getAtfalByTagNumber(tagNumber);
    res.json(atfalByTagNumber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAtfalByStage = async (req, res) => {
  const { stage } = req.params;
  try {
    const atfalByStage = await atfalService.getAtfalByStage(stage);
    res.json(atfalByStage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAtfalForDila = async (req, res) => {
  const { dila } = req.params;
  try {
    const allAtfalForDila = await atfalService.getAllAtfalForDila(dila);
    res.json(allAtfalForDila);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAtfalForStage = async (req, res) => {
  const { stage } = req.params;
  try {
    const allAtfalForStage = await atfalService.getAllAtfalForStage(stage);
    res.json({allAtfalForStage,status:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAtfal = async (req, res) => {
  const data = req.body;
  try {
    const newAtfal = await atfalService.createAtfal(data);
    res.status(201).json({
        status:true,
        newAtfal
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountOfAllAtfal = async (req, res) => {
  try {
    const countOfAllAtfal = await atfalService.getCountOfAllAtfal();
    res.json({ count: countOfAllAtfal,status:true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountOfAtfalByDila = async (req, res) => {
  const { dila } = req.params;
  try {
    const countOfAtfalByDila = await atfalService.getCountOfAtfalByDila(dila);
    res.json({ count: countOfAtfalByDila,status:true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountOfAtfalByStage = async (req, res) => {
  const { stage } = req.params;
  try {
    const countOfAtfalByStage = await atfalService.getCountOfAtfalByStage(stage);
    res.json({ count: countOfAtfalByStage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
