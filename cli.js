// eslint-disable-next-line one-var
const parse = require('comment-parser'),
  path = require('path')

parse.file(path.resolve(__dirname, 'test/fixtures/create-react-app/src/components/Button/Button.js'), (err, parsed) => {
  if (err) console.error(err)
  else console.log(parsed[0])
  process.exit(0)
})
