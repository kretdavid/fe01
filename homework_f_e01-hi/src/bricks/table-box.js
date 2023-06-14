//@@viewOn:imports
import { createVisualComponent, Utils, Lsi, Content } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements"


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

const TableBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TableBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, TableBox);

    return (
      <h2><Lsi lsi={{cs: "Seznam Studentů", en: "List of Students"}}/></h2>
      
     )  
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TableBox };
export default TableBox;
//@@viewOff:exports
