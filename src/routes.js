import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Movies from './Components/Movies'
import Profile from './Components/Profile'
import NewAuth from './Components/NewAuth'
import Pokemon from './Components/Pokemon'
import SpecificPokemon from './Components/SpecificPokemon'


export default (
    <Switch>
        <Route exact path='/' component={NewAuth} />
        <Route path='/movies' component={Movies} />
        <Route path='/profile' component={Profile} />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/specific/pokemon' component={SpecificPokemon} />
    </Switch>
)