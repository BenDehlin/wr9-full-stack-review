import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import Movies from './Components/Movies'
import Profile from './Components/Profile'


export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/movies' component={Movies} />
        <Route path='/profile' component={Profile} />
    </Switch>
)