import React from "react";
import "./ServiceButtons.css";
import googleIcon from "../../../assets/logos/Google-icon.png";
import facebookIcon from "../../../assets/logos/Facebook-icon.png";
import twitterIcon from "../../../assets/logos/Twitter-icon.png";
import { auth, db, faceBookProvider, googleProvider } from "../../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, pushUser } from "../../../utils/pushToDB";
import { setUserAction, setViewAction, setErrorAction } from "../../../redux/actions/actions";

const ServiceButtons = ({ view }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLoginGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      const userDB = await getUser(response.user.email)
      if (userDB != null) {
        dispatch(setUserAction(userDB))
        if (userDB.admin == true) {
          dispatch(setViewAction('admin'))
          navigate('/admin')
        } else {
          dispatch(setViewAction('search'))
          navigate('/search');
        }
      } else {
        const user = {
          name: response.user.displayName,
          lastName: null,
          email: response.user.email,
          country: null,
          city: null,
          photoUrl: response.user.photoURL,
          phone: response.user.phoneNumber,
          reserves: {
            active: [],
            finished: []
          },
          admin: false,
          uid: response.user.uid,
        }
        dispatch(setUserAction(user))
        pushUser(user)
        dispatch(setViewAction('search'))
        navigate('/search')
      }
    } catch (e) {
      console.log(e)
      dispatch(setErrorAction({
        state: true,
        message: e.code
      }))
    }
  }
  // const handleLoginFacebook = async () => {
  //   const response = await auth.signInWithPopup(faceBookProvider);
  //   console.log(response);
  // }
  return (
    <div className="ServiceButtons-container">
      <div onClick={handleLoginGoogle} className="Google-button">
        <figure className="Icon-container">
          <img src={googleIcon} alt="Google icon" />
        </figure>
      </div>
      {/* <div className="Facebook-button">
        <figure className="Icon-container">
          <img src={facebookIcon} alt="Facebook icon" />
        </figure>
      </div>
      <div className="Twitter-button">
        <figure className="Icon-container">
          <img src={twitterIcon} alt="Twitter icon" />
        </figure>
      </div> */}
    </div>
  );
};

export { ServiceButtons };
