const Atfal = require('../models/_atfalModel');
const {_tagNumGenerator} = require('../utils/_tagGenerator')
class AtfalService {
  async getAllAtfal() {
    try {
      return await Atfal.find();
    } catch (error) {
      throw new Error('Error fetching all Atfal');
    }
  }

  async getAtfalByDila(dila) {
    try {
      return await Atfal.find({ _dila: dila });
    } catch (error) {
      throw new Error(`Error fetching Atfal for Dila: ${dila}`);
    }
  }

  async getAtfalByTagNumber(tagNumber) {
    try {
      return await Atfal.findOne({ _tagNumber: tagNumber });
    } catch (error) {
      throw new Error(`Error fetching Atfal with Tag Number: ${tagNumber}`);
    }
  }

  async getAtfalByStage(stage) {
    try {
      return await Atfal.find({ _stage: stage });
    } catch (error) {
      throw new Error(`Error fetching Atfal for Stage: ${stage}`);
    }
  }

  async getAllAtfalForDila(dila) {
    try {
      return await Atfal.find({ _dila: dila });
    } catch (error) {
      throw new Error(`Error fetching all Atfal for Dila: ${dila}`);
    }
  }

  async getAllAtfalForStage(stage) {
    try {
      return await Atfal.find({ _stage: stage });
    } catch (error) {
      throw new Error(`Error fetching all Atfal for Stage: ${stage}`);
    }
  }

  async createAtfal(data) {
    try {
      const {fullName,age,dila,muqami,stage} = data
      const tagNumber = _tagNumGenerator()
      const atfalObj={
        _fullName:fullName,
        _age:age,
        _dila:dila,
        _tagNumber:tagNumber,
        _muqami:muqami,
        _stage:stage
      }
      return await Atfal.create(atfalObj);
    } catch (error) {
      throw new Error('Error creating new Atfal');
    }
  }

  async getCountOfAllAtfal() {
    try {
      return await Atfal.countDocuments();
    } catch (error) {
      throw new Error('Error fetching count of all Atfal');
    }
  }

  async getCountOfAtfalByDila(dila) {
    try {
      return await Atfal.countDocuments({ _dila: dila });
    } catch (error) {
      throw new Error(`Error fetching count of Atfal for Dila: ${dila}`);
    }
  }

  async getCountOfAtfalByStage(stage) {
    try {
      return await Atfal.countDocuments({ _stage: stage });
    } catch (error) {
      throw new Error(`Error fetching count of Atfal for Stage: ${stage}`);
    }
  }
  async getAtfalByIds(ids) {
    try {
      return await Atfal.find({ _id: { $in: ids } });
    } catch (error) {
      throw new Error('Error fetching Atfal by IDs');
    }
  }
}

module.exports = AtfalService;
