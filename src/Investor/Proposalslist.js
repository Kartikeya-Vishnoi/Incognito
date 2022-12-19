import ProposalItem from "./ProposalItem"
import classes from "./Proposalslist.module.css"
function Proposalslist(props){
  console.log(props.list)
  return(
    <ul className={classes.list}>
        
      {props.list.map((item) => (
        <ProposalItem proposal={item}/>
      ))}  
    </ul>
  )
}
export default Proposalslist