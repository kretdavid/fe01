//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const SummaryBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SummaryBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    text: PropTypes.text,
    value: PropTypes.number,
    unit: PropTypes.text,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    text: "Prázdné",
    value: "0",
    unit: "",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    //const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    //const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, SummaryBox);

    return <Uu5Elements.Block header={props.text} card="full">
      {`${props.value} ${props.unit}`}
      </Uu5Elements.Block>
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { SummaryBox };
export default SummaryBox;
//@@viewOff:exports
