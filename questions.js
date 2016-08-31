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
  },
  function() {
    var data = {
      dose: rand(20, 180),
      ratio: rand(100, 900),
      answer: null,
      unit: 'mL(s)',
      info: 'Round to the tenths place.'
    }

    data.answer = Math.round( (data.dose / data.ratio) * 10 * 1000 ) / 10 

    const text = dedent`
      The provider orders haloperidol ${data.dose} g IM.
      There are ${data.ratio} mg/mL of haloperidol. 
      How many ${data.unit} does the nurse administer?
    `
    return wrap(data, text)
  },
  /*function() {
    var data = {
      dose: rand(1333, 4555) / 10,
      solution: rand(10, 40),
      minutes: rand(30, 60),
      ratio: rand(100, 900) / 1000,
      answer: null,
      unit: 'mL/hour',
      info: 'Round to the tenths place.'
    }

    var dose_ml = data.dose / data.ratio
    var ratio_solution = dose_ml / data.solution
    var total_minutes = ratio_solution * data.minutes
    var total_hours = total_minutes / 60

    data.answer = Math.round(total_hours * 10) / 10 

    const text = dedent`
      The patient is ordered Zosyn ${data.dose}g.
      The Zosyn is mixed in ${data.solution} mLs of solution, and is to infuse over ${data.minutes} minutes.
      There are ${data.ratio}g of Zosyn per mL of solution (${data.ratio}g/mL).
      At what rate (${data.unit}) does the nurse set the pump?
    `
    return wrap(data, text)
  },*/
  function() {
    var data = {
      dose: rand(20, 80),
      period: rand(1, 12) * 10,
      solution: rand(1, 9) * 10,
      answer: null,
      unit: 'mL/hr',
      info: 'Round to the nearest tenth.'
    }

    data.answer = Math.round( (60 / data.period) * data.solution * 10 ) / 10

    const text = dedent`
      The provider orders ${data.dose} mg of gentamicin IVPB to be infused over ${data.period} minutes.
      The gentamicin is mixed in ${data.solution} mL of normal saline.
      At what rate (mL/hr) does the nurse program the IV pump?
    `
    return wrap(data, text)
  }
]

module.exports.length = module.exports.list.length