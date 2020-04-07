const fs = require('fs')

fs.writeFileSync('note.txt', 'Hello Node Modules!!')

fs.appendFileSync('note.txt', ' I can do it baby...')