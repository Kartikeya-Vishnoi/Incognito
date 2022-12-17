import ProposalItem from "./ProposalItem"
import classes from "./Proposalslist.module.css"
function Proposalslist(props){
  return(
    <ul className={classes.list}>
        Your Proposals are
      {props.list.map((item) => (
        <ProposalItem proposal={item}/>
      ))}  
    </ul>
  )
}
export default Proposalslist