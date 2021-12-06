const express = require('express');
const router = express.Router();
const axios = require('axios');
const URL = 'https://dog.ceo/api/breeds/list/all';
const selectDog = [`<option>Please select a dog breed:</option>`];

const choiceBreeds = (res, imgStr) => {
  axios
    .get(URL)
    .then((r) => {
      const varDog = r.data.message;
      for (i in varDog) {
        if (varDog[i].length) {
          varDog[i].forEach(elem => {
            selectDog.push(`<option value="${i}&q2=${elem}">${elem}${i}</option> \n`);
          });
        } else {
          selectDog.push(`<option value="${i}"> ${i} </option>\n`);
        }
      }
      res.render('cabinet', {
        selectDog: selectDog,
        img: imgStr
      });
    })
}

router.get('/', (req, res) => {
  if (req.query.q1) {
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        choiceBreeds(res, str);
      });
  } else if (req.query.q2) {
    axios
      .get(`https://dog.ceo/api/breed/${req.query.q1}/${req.query.q2}/images/random`)
      .then((r) => {
        let str = `<img src="${r.data.message}">`
        choiceBreeds(res, str);
      });
  } else {
    choiceBreeds(res);
  }
});

module.exports = router;