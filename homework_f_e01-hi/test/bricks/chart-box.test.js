import HomeworkFE01 from "homework_f_e01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`HomeworkFE01.Bricks.ChartBox`, () => {
  testProperties(HomeworkFE01.Bricks.ChartBox, CONFIG);
});
