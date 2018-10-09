const { send, json } = require('micro')
const { router, get } = require('microrouter')
const FilterFunc  = require('./data/index')
const cors = require('micro-cors')()

module.exports = cors(router(

     get('/', async (req, res) => send(res, 200, await Promise.resolve( FilterFunc.allOfThem() ) )),
     get('/party/:whichone', async (req, res) => send(res, 200, await Promise.resolve( FilterFunc.filterByParty(req.params.whichone) ))), 
     get('/gender/:whichone', async (req, res) => send(res, 200, await Promise.resolve( FilterFunc.filterByGender(req.params.whichone) ) )),
     get('/state/:state', async (req, res) => send(res, 200, await Promise.resolve( FilterFunc.filterByState(req.params.state)) )),
    //  get('/birthplaceSeniorSenator/', async (req, res) => send(res, 200, await Promise.resolve(FilterFunc.birthplaceSeniorSenator()) )),  
    // get('/mapping/', async (req, res) => send(res, 200, await Promise.resolve(FilterFunc.mapping()) )), 

))


