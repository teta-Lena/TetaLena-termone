const router = require("express").Router();
const { validate, validationResult }  = require("express-validator");
const CalcService = require('../services/calcService');

router.post(
      '/',
      [
          validate("operation", "operation is required").exists().not().isEmpty(),
          validate("value1", "value1 is required").exists().not().isEmpty(),
          validate("value2", "value2 is required").exists().not().isEmpty(),
      ],
     async (req, res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   

     const { operation, value1, value2 } = req.body;
     try {
      const result = CalcService.doMath(value1, value2, operation);
      return res.status(200).json({ calcResponse: result });
     } catch(e) {
       return res.status(500).json({ error: e });
     }
});

module.exports = router;