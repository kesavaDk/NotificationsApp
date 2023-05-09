const Notification = (props) => {
  const { msg, image, style } = props;
  return (
    <div className={style}>
      <img src={image} className="image" />
      <p className="paragraph"> {msg}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      msg="Information Message"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      style="info-message"
    />
    <Notification
      msg="Success Message"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      style="suc-message"
    />

    <Notification
      msg="Warning Message"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      style="war-message"
    />

    <Notification
      msg="Danger Message"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      style="dan-message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
