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
  question : 'Over the past 12 months, if you needed credit/loans, which of the following did you use or would you have been able to access? Choose all that apply.',
  options : [{
    text : 'I had no access to any form of credit/loans',
    result : 25.6,
    cancelsOthers : true
  }, {
    text : 'I used fringe credit (loan from non-bank credit provider or pawn broker)',
    result : 5.4,
    cancelsOthers : false
  }, {
    text : 'I used informal credit (loan from friends or family)',
    result : 21.5,
    cancelsOthers : false
  }, {
    text : 'I used formal credit (loan from bank, building society, community finance, or Centrelink)',
    result : 46.1,
    cancelsOthers : false
  }, {
    text : 'I used a mortgage or an investment loan',
    result : 25.5,
    cancelsOthers : false
  }]
}, {
  question : 'Which of the following have you done in last 12 months? Choose all that apply.',
  options : [{
    text : 'Followed a budget',
    result : 51.6,
    cancelsOthers : false
  }, {
    text : 'Saved regularly',
    result : 60.2,
    cancelsOthers : false
  }, {
    text : 'Paid more than the minimum repayment required by credit card company or loan provider',
    result : 19.9,
    cancelsOthers : false
  }, {
    text : 'Paid more than the minimum home loan repayment',
    result : 58.6,
    cancelsOthers : false
  }, {
    text : 'Made voluntary contributions towards superannuation',
    result : 28.9,
    cancelsOthers : false
  }, {
    text : 'None of these',
    result : null,
    cancelsOthers : true
  }]
}, {
  question : 'How likely are you to get financial support from your social connections (family, friends, work colleagues, neighbours or clubs) in times of crisis?',
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
