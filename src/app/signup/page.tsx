// components
import { Navbar, Signup} from "../../components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// sections

export default function Campaign() {
  return (
    <>
      <ToastContainer/>
      <Signup/>
    </>
  );
}
