import {Link} from 'react-router-dom';
import classes from './navigation.module.css'

function Navigation(){
    return(

    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/allmeetups'>AllMeet</Link></li>
                <li><Link to='/new-meetup'>NewMeetup</Link></li>
                <li><Link to='/favorites'>FavMeet</Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default Navigation;