
import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {Header} from './components'
import {Home,Cart} from './components/pages'
import {setPizzas } from './redux/actions/pizzas'


import '../src/scss/app.scss';





function  App  (){
  const dispatch = useDispatch()
 

  React.useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(({data}) =>{
        dispatch(setPizzas(data.pizzas))
      })
    })


  return(
    <Router>
       <div className="wrapper">
       <Header />
         <div className="content">
           <Route path = "/" component={Home} exact />
           <Route path = "/cart"  component ={Cart} exact />
         </div>
       </div>
       </Router>
  )
}

export default App

// class App extends React.Component {

//   componentWillMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) =>{
//             this.props.setPizzas(data.pizzas);
//         })
//   }


//   render() {

//   }
// }

// const mapStateToProps = (state)=>{
//   return {
//     items: state.pizzas.items
//   }
// }

// const mapDispatchToProps = (dispatch)=>{
//   return{
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
