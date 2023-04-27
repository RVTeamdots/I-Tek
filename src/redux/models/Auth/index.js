import {login, logout} from './actions';
import store from '../../store';

const model = {
    userLogin: (data)=>{
        return store.dispatch(login(data));
        //login(data, store.dispatch)
    },
    logout: () => {
       return store.dispatch(logout());
    }
}

export default model;