const data = [{
  question : 'If you had an unexpected financial emergency like your car breaking down, would you be able to raise $2000 within a week to deal with it?',
  options : [{
    text : 'Yes',
    result : 80,
    cancelsOthers : true
  }, {
    text : 'No',
    result : 20,
    cancelsOthers : true
  }]
}, {
  question : 'Which of the following statements best describes your ability to access credit over the past 12 months?',
  options : [{
    text : 'I had no access to any form of credit.',
    result : 25.6,
    cancelsOthers : true
  }, {
    text : 'I used fringe credit (payday loan).',
    result : 5.4,
    cancelsOthers : false
  }, {
    text : 'I used informal credit (friend/family).',
    result : 21.5,
    cancelsOthers : false
  }, {
    text : 'I used formal credit (bank/building society).',
    result : 46.1,
    cancelsOthers : false
  }, {
    text : 'I used formal credit asset building (investment).',
    result : 25.5,
    cancelsOthers : false
  }]
}, {
  question : 'Which of these financial actions have you taken in the last 12 months?',
  options : [{
    text : 'Followed a budget',
    result : 51.6,
    cancelsOthers : false
  }, {
    text : 'Saved regularly',
    result : 60.2,
    cancelsOthers : false
  }, {
    text : 'Paid more than minimum home loan payments',
    result : 58.6,
    cancelsOthers : false
  }, {
    text : 'Made voluntary contributions towards supperannuation',
    result : 28.9,
    cancelsOthers : false
  }, {
    text : 'Received financial information counselling or advice from a professional',
    result : 19.9,
    cancelsOthers : false
  }, {
    text : 'None of the above',
    result : null,
    cancelsOthers : true
  }]
}, {
  question : 'How would you rate your ability to get support from your social networks in times of financial crisis? Social networks could include friends and family, as well as support from government and community organisations.',
  options : [{
    text : 'Never/very unlikely',
    result : 22.8,
    cancelsOthers : true
  }, {
    text : 'Fairly unlikely',
    result : 20,
    cancelsOthers : true
  }, {
    text : 'Unsure',
    result : 16.2,
    cancelsOthers : true
  }, {
    text : 'Fairly likely',
    result : 28.6,
    cancelsOthers : true
  }, {
    text : 'Always/very likely',
    result : 12.5,
    cancelsOthers : true
  }]
}]

export default data
