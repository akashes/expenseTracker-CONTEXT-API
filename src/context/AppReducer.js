export default (state,action)=>{
    console.log('actionpayload is',action.payload);
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                localStorage.setItem('transaction',JSON.stringify({...state,transactions:[action.payload,...state.transactions]}))
                return{
                    ...state,transactions:[action.payload,...state.transactions]
                }
               

        default:
            return state

    }
}