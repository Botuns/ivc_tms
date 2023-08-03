const Atfal = require('../models/_atfalModel');
const {_tagNumGenerator} = require('../utils/_tagGenerator')
class AtfalService {
  async getAllAtfal() {
    try {
      // Fetch all records from 'Atfal', sorted in descending order of the 'createdAt' field
      return await Atfal.find().sort({ createdAt: -1 });
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
      const {fullName,age,dila,muqami,stage,amountPaid} = data
      const isDuplicate = await Atfal.findOne({
        _fullName: fullName,
        _age: age,
        _dila: dila,
        _muqami: muqami,
        _stage: stage,
      });
  
      if (isDuplicate) {
        return 'Duplicate Entry Detected';
      }
      // let status;
      // if (amountPaid === 5000) {
      //   status = 'paid';
      // } else if (amountPaid < 5000 && amountPaid > 0) {
      //   status = 'unfinished';
      // } 

      const status = await this.calculateStatus(amountPaid) //chaged the giving of status
      const tagNumber = await _tagNumGenerator()
      const atfalObj={
        _fullName:fullName,
        _age:age,
        _dila:dila,
        _tagNumber:tagNumber,
        _muqami:muqami,
        _stage:stage,
        amountPaid:amountPaid,
        status:status
      }
      return await Atfal.create(atfalObj);
      


      
    } catch (error) {
      throw new Error(error);
    }
  }

  async calculateStatus(amountPaid) {
    let status;
    if (amountPaid <= 0) {
      status = 'unpaid';
    } else if (amountPaid < 5000 && amountPaid > 0) {
      status = 'unfinished';
    } 
    else {
      status = 'paid';
    }
    return status;
  }
  

  async getCountOfAllAtfal() {
    try {
      return await Atfal.countDocuments();
    } catch (error) {
      throw new Error('Error fetching count of all Atfal');
    }
  }

  async getCountOfAtfalByDila(dila) {
    console.log(dila)
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

  async getCountOfPaidAtfalByDila(dila) {
    try {
      return await Atfal.countDocuments({ _dila: dila, status: 'paid' });
    } catch (error) {
      throw new Error(`Error fetching count of paid Atfal for Dila: ${dila}`);
    }
  }

  async getCountOfUnpaidAtfalByDila(dila) {
    try {
      return await Atfal.countDocuments({ _dila: dila, status: 'unpaid' });
    } catch (error) {
      throw new Error(`Error fetching count of unpaid Atfal for Dila: ${dila}`);
    }
  }

  async getCountOfUnfinishedAtfalByDila(dila) {
    try {
      return await Atfal.countDocuments({ _dila: dila, status: 'unfinished' });
    } catch (error) {
      throw new Error(`Error fetching count of unfinished Atfal for Dila: ${dila}`);
    }
  }

  async getCountOfPaidAtfal() {
    try {
      return await Atfal.countDocuments({ status: 'paid' });
    } catch (error) {
      throw new Error(`Error fetching count of paid Atfal`);
    }
}

  
  async getCountOfUnpaidAtfal() {
    try {
      return await Atfal.countDocuments({ status: 'unpaid' });
    } catch (error) {
      throw new Error(`Error fetching count of unpaid Atfal`);
    }
  }
  
  async getCountOfUnfinishedAtfal() {
    try {
      return await Atfal.countDocuments({ status: 'unfinished' });
    } catch (error) {
      throw new Error(`Error fetching count of unfinished Atfal`);
    }
  }
  
}

module.exports = AtfalService;
