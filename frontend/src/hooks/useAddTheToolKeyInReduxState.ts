import { setTheToolsToShow, showSidebar } from "@/redux/sidebar";
import { useDispatch } from "react-redux";

function useAddTheToolKeyInReduxState(keyName: string) {
  const dispatch = useDispatch();

  function addTheKeyInReduxState() {
    dispatch(setTheToolsToShow(keyName));
    dispatch(showSidebar(true));
  }

  return addTheKeyInReduxState;
}

export default useAddTheToolKeyInReduxState;