var Benchmark = require('benchmark')
var Table = require('cli-table')
var fs = require('fs')
var isBench = /\.benchx\.js$/

function getTable(name) {
  return new Table({
    head: [ name, 'Hertz', 'Margin of Error' ],
    colWidths: [ 24, 24, 24 ]
  })
}

function prettyHz(hz) {
  return Benchmark.formatNumber(hz.toFixed(hz < 100 ? 2 : 0))
}

function prettyMoe(moe) {
  return moe.toFixed(2) + '%'
}

fs.readdirSync('./benchmark').forEach(function(file) {
  var test, table
  if (isBench.test(file)) {
    test = require('../benchmark/' + file)
    table = getTable(test.name)
    var suite = Benchmark.Suite(test.name, {
      onComplete: function() {
        console.log(table.toString())
      }
    })

    Object.keys(test.tests).forEach(function(k) {
      suite.add(k, test.tests[k], {
        onComplete: function(vo) {
          console.log(String(vo.target))
          table.push([ vo.target.name, prettyHz(vo.target.hz), prettyMoe(vo.target.stats.rme) ])
        }
      })
    })

    suite.run()
  }
})
