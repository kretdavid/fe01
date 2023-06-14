//@@viewOn:imports
import { Utils, createVisualComponent, Content, Lsi, PropTypes } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  container: () => Config.Css.css({ padding: 16 }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ChartBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ChartBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

   //@@viewOn:propTypes
   propTypes: {
    data: PropTypes.array,
    series: PropTypes.array,
    
   },
   //@@viewOff:propTypes
 
   //@@viewOn:defaultProps
   defaultProps: {
    data: [
                { label: "JavaScript", value2: 10 },
                { label: "C++", value: 8 },
                { label: "Python", value2: 8 },
                
    ],
    series: [
                { valueKey: "value", name: "First chart", colorSchema: "red" },
                { valueKey: "value2", name: "Second chart", colorSchema: "blue" },
                
    ],
   },
   //@@viewOff:defaultProps
 
   render(props) {
    
   

    

     //@@viewOn:private
     //@@viewOff:private
 
     //@@viewOn:render
     const attrs = Utils.VisualComponent.getAttrs(props);
 
     return (
       <div {...attrs}>
         <h2><Lsi lsi={{cs: "Průběžné výsledky", en: "Interim Results"}}/></h2>
         <div className={Css.container()}>
         <Uu5Elements.Block card="full">
           <Content>
             {`
               <uu5string/>
               
               <UU5.SimpleChart.BarChart
                data={props.data}
                series={props.series}
                 labelKey="label"
                 chartType="monotone"
                 colorSchema="default"
                 stacked=true
                 displayCartesianGrid=false
                 responsive
                 isAnimationActive
                 displayTooltip
                 
               />
             `}
           </Content>
           </Uu5Elements.Block>
         </div>
         
       </div>
     );
     //@@viewOff:render
   },
 });
 

//@@viewOn:exports
export { ChartBox };
export default ChartBox;
//@@viewOff:exports
