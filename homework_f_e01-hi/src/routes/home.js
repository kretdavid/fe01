//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, Environment } from "uu5g05";

import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import SummaryBox from "../bricks/summary-box.js";
import ProfileBox from "../bricks/profile-box.js";
import ChartBox from "../bricks/chart-box.js";
import TableBox from "../bricks/table-box.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
  summaryRow: () =>
    Config.Css.css({
      display: "flex",
      justifyContent: "space-between",
      padding: "16px 32px",
    }),
    standardRow: () =>
    Config.Css.css({
      display: "flex",
      justifyContent: "space-between",
      padding: "16px 32px",
      "& > *": {
        flex: "1",
        height: "100%",
        marginRight: "32px",
      },
      alignItems: "flex-start",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {

    //@@viewOn:private
    const { data, series } = props;
    
    Environment.uu5DataMap = { data, series };
    
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
  const sumBoxList = [
    {text: <Lsi lsi={{cs: "Počet dnů hatchery", en: "Number of hatchery days"}}/>, value: 45},
    {text: <Lsi lsi={{cs: "Počet účastníků", en: "Number of participants"}}/>, value: 10},
    {text: <Lsi lsi={{cs: "Počet lektorů", en: "Number of teachers"}}/>, value: 10},
    {text: <Lsi lsi={{cs: "Hodnocení", en: "Evaluation"}}/>, value: 94, unit:"%"},
    
  ]

  function getSummaryBoxList(){
      const result=[]
      sumBoxList.forEach(item =>{
        result.push(<SummaryBox text={item.text} value={item.value} unit={item.unit}/>)
      })
      return result;
  }
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <div className={Css.summaryRow()}>
          {getSummaryBoxList()}</div>
        <div className={Css.standardRow()}>
        <ProfileBox picture={<img src="../pics/Jakub.jpg" />} name="Lektor Jakub" text="Lorem ipsum dolor sit amet, 
        consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt 
        in culpa qui officia deserunt mollit anim id est laborum." email="jakub@lektor.cz"/>
        <ChartBox
           data={[
                { label: "JavaScript", value2: 10 },
                { label: "C++", value: 8 },
                { label: "Python", value2: 8 },
                ]}
            series={[
                { valueKey: "value", name: "First chart", colorSchema: "red" },
                { valueKey: "value2", name: "Second chart", colorSchema: "blue" },
                ]}/>
        
        </div>
        <div className={Css.standardRow()}>
                <TableBox></TableBox>
                
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
