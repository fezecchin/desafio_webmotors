import {createStore} from 'redux';

const InitialState = require('../data/data.json');

function vehicles(state = InitialState, action) {
    switch (action.type) {
        case 'SHOW_VEHICLESDATAS':
            return{...state, vehicles: action.payload}
        case 'SELECT_MAKE':
            return{...state, makeSelected: action.make}
        case 'SELECT_MODEL':
            return{...state, modelSelected: action.model}
        case 'SELECT_VERSION':
            return{...state, versionSelected: action.version}
        case 'SELECT_CLEAR':
            return{...state, 
                "vehicles": [],
                "makeSelected": "",
                "modelSelected": "",
                "versionSelected":"",
                "dispatchClear" : []
            }    
        default:
            return state;              

    }
}

const store = createStore(vehicles);

export default store;