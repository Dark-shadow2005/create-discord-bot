module.exports = {
  token: ('NTg2Njc1Mzg5MzU5OTgwNTU0.XWTZQw.lywm8TvvYCsQVmahNOJ9mmlHZrk' in process.env ? process.env : require('../config')).TOKEN,
  prefix: '.',
  commandDelimiter: '\n',
  commandLimit: '5'
};
