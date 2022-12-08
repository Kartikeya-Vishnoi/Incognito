import classes from './layout.module.css'
import Navigation from './navigation';
function Layout(props){
return (
    <div> 
    <Navigation />

<main className={classes.main}> 
{props.children}
</main>
</div>
);
}
export default Layout;