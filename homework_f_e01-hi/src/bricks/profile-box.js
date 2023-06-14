//@@viewOn:imports
import { createVisualComponent, Utils, PropTypes, Lsi } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  button: () => Config.Css.css({
    display: "flex", 
    justifyContent: "flex-end",
  }),
  picture: () =>Config.Css.css({
    width: "auto",
    height: "auto",
    alignItems: "right",
    float: "left",
    marginRight: "10px",
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ProfileBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProfileBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: PropTypes.text,
    text: PropTypes.text,
    picture: PropTypes.picture,
    email: PropTypes.text,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    name: "no name",
    text: "no text",
    picture: <img src="../pics/profilepicture.jpg"/>,
    email: "no@email.com",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.picture());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ProfileBox);

    return (
      <div>
        <h2><Lsi lsi={{cs: "Dnešní lektor", en: "Today's teacher"}}/></h2>
        <Uu5Elements.Block card="full">
          <div className={Css.picture()}>
            {props.picture}
          </div>
          <h3>{props.name}</h3>
          <p>{props.text}</p>
          <div className={Css.button()}>
            <Uu5Elements.Button effect="upper" onClick={() => window.open(`mailto:${props.email}`)}><Lsi lsi={{cs: "Kontaktovat", en: "Contact"}}/></Uu5Elements.Button>
          </div>
        </Uu5Elements.Block>
      </div>  
          )     
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProfileBox };
export default ProfileBox;
//@@viewOff:exports
