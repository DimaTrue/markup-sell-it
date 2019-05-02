export const logger = (store) => next => action => {
    if(action.meta && action.meta.printLog) {
        //console.log('printLog', action.meta.printLog);
    }

    
    let result = next(action);
   
    // console.log('next.state', store.getState());
    // return result;
}
