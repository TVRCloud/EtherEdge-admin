import { IoCloseCircle } from "react-icons/io5";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Popup = (props: any) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <IoCloseCircle className="icon" />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
