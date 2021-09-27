APIs Fetching ==> 
            React JS Simple using Hooks
            React Redux Toolkit Query
            React Redux ASYN ACTION : Redux - THUNK

#=====================================================================🛑
📢📢 React-Redux 🚀🚀
====> 🔴 React-Redux Library is Officailly UI Binding with React
====> 🔴 Its aslo called HELPER for REACT APP
#=====================================================================🛑
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
📢📢 Redux 🚀🚀
#========================🛑
==> 🔴 Redux is Container
==> 🔴 Redux is Predictable 
#==============================#=========
📢 Three Core Concepts of Redux 📢
✔  Store   => Holds State of All Application
✔  Action  => Actions Describe Changes in the State of Application
✔  Reducer => Reducer Carries Out State Transition Depending on Action
#========================================
📢 Principles of Redux 📢
✔ Store => Maintain Our Application State in a Single Object || [e.g]: { numberOfCakes: 10 }
✔ Action => To Update the State of Your App by specifing the type of action that you are performing || [e.g]: { type: Buy_Cake }
✔ Reducer => To Specify How State or Works is Performed by an action || [e.g]: Reducer is ShopKeeper : Reducer (PreviousState, ACtion)
#========================================
📢 Responsibities of Redux Store 📢
✔  Holds Application State
✔  Allow access to state via getState()
✔  Allow state to be Updated via dispatch(action)
✔  Registers Lisners via Subscibe(listner)
✔  Handles unregistering of listeners via the fuction return by subsciber
#=====================================================================🛑

🛑Example:#📢📢📢:
✔  Constant Word of Action Types: 
        const Buy_Cake = 'Buy_Cake';

✔  Action Type:
    {
        type: someAction 
               or  
        type: Buy_Cake,
    }

✔  Action Creators:
    function buyCake () {
        return {
            type: BuyCake,
            info: 'First Redux Action'
        }
    }

✔  Reducer: 
        ...state, is called copyof initialState : 
    const initialState = {
        numberOfCakes: 10
    }
    const reducer = (state = initialState, action){
        switch(action.type){
            case Buy_Cake: return{
                ...state,
                numberOfCakes: state.numOfCakes - 1
            }

            default: return state
        }
    }

✔ Store:
    const redux = require('redux)
    const createStore = redux.createStore
    .......Let's Move to Method Files
#=====================================================================#=====================================================================🛑
📢📢🔴 Redux Thunk 🔴 🚀🚀
            It is also a Middleware in REDUX JS;
        ==> 🔴 It is used create asyncrounous actions creators in the Applications just like API Fetching : .. [e.g: {Async.js in Methods} ]
                This is an action creatore : Actually an action creators returns an action : ,,..HOw its cool thaht ✔✔📢📢 
📢 => 🛑 What did the Thunk MiddleWare in there?
            Thunk Middleware have a abililty for a action creator to return a function instead of an action of an object.
            dispatch => it doesn't have to be pure So, it is allow us SideEffects means to say that : it allow to handle ASYNC API CALLs
            and this function can also dispatch all the actions inside there🚀🚀
#=====================================================================#=====================================================================🛑
====> 🔴
====> 🔴
