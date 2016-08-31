const dedent = require('dedent')

function wrap(_data, _text) {
  return {
    data : _data,
    text : _text
  }
}

function rand(min, max, dec) {
  dec = dec || 1
  min = Math.ceil(min) * dec;
  max = Math.floor(max) * dec;
  return Math.floor(Math.random() * (max - min)) + min / dec;
}

module.exports.rand = rand

module.exports.list = [
  function() {
    var data = {
      dose: rand(100, 600),
      period: rand(1, 9),
      unit: 'mL/hour',
      answer: null
    }

    data.answer = Math.round( data.dose / data.period ) 

    const text = dedent`
      The patient has an order for ${data.dose} mLs of 0.9% normal saline over ${data.period} hours.
      At what rate  (${data.unit}) should the nurse set the IV pump?
    `
    return wrap(data, text)
  },
  function() {
    var data = {
      dose: rand(10, 100) / 10,
      tablet_dose: rand(3, 8) * 100,
      ratio: 1000,
      answer: null,
      unit: 'tablets'
    }

    data.answer = Math.round( (data.dose * data.ratio) / data.tablet_dose ) 

    const text = dedent`
      The provider orders ${data.dose} g acyclovir (Zovirax) PO BID.
      There are ${data.tablet_dose} mg per tablet.
      How many tablet(s) does the nurse administer?
    `
    return wrap(data, text)
  },
  function() {
    var data = {
      dose: rand(1, 50),
      ratio: rand(1, 8),
      answer: null,
      unit: 'mL(s)',
      info: 'Round to the tenths place.'
    }

    data.answer = Math.round( (data.dose / data.ratio) * 10  ) / 10 

    const text = dedent`
      The nurse prepares to administer ${data.dose} mg lorazepam (Ativan) IM to a post-operative patient.
      There are ${data.ratio} mg of lorazepam per mL (${data.ratio} mg/mL).
      How many mL(s) does the nurse administer?
    `
    return wrap(data, text)
  }
]

module.exports.length = module.exports.list.length