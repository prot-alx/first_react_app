import { doNothing } from "../../redux/sidebarReducer";
import SideBarElements from "./SidebarElements";
import { connect } from 'react-redux'

let mapStateToProps = (state)=> {
    return {
      sidebarList: state.sidebarList
  }
}

let mapDispatchToProps = (dispatch) => {
  return {   
    doNothing: () => {dispatch(doNothing())} 
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarElements);

export default SidebarContainer;