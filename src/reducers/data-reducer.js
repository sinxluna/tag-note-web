import {UPDATE_DATA} from '../actions/data-action';

export default function dataReducer(state = [], {type, payload}){
     console.log('called dataReducer');
    switch(type){
        case UPDATE_DATA:
            return payload.data;
        default:
            return state;
    }
}
