import NumberBtn from "./Button";
import { BackSpace, ClearAll } from "./Images";

export const NumPad = () => {
  return (
    <div className="numpad">
      <NumberBtn
        id={"zero"}
        className="numpad__zero numpad__button--big"
        content="0"
      />
      <NumberBtn id={"one"} className="numpad__one" content="1" />
      <NumberBtn id={"two"} className="numpad__two" content="2" />
      <NumberBtn id={"three"} className="numpad__three" content="3" />
      <NumberBtn id={"four"} className="numpad__four" content="4" />
      <NumberBtn id={"five"} className="numpad__five" content="5" />
      <NumberBtn id={"six"} className="numpad__six" content="6" />
      <NumberBtn id={"seven"} className="numpad__seven" content="7" />
      <NumberBtn id={"eight"} className="numpad__eight" content="8" />
      <NumberBtn id={"nine"} className="numpad__nine" content="9" />

      {/* ---------------------- operators ---------------------- */}
      <NumberBtn
        id={"add"}
        className="numpad__add numpad__button--operator "
        content={"+"}
      />
      <NumberBtn
        id={"subtract"}
        className="numpad__subtract numpad__button--operator "
        content={"-"}
      />
      <NumberBtn
        id={"multiply"}
        className="numpad__multiply numpad__button--operator "
        content={"×"}
      />
      <NumberBtn
        id={"divide"}
        className="numpad__divide numpad__button--operator"
        content={"÷"}
      />

      <NumberBtn
        id={"equals"}
        className="numpad__equals numpad__button--operator "
        content={"="}
      />

      <NumberBtn id={"decimal"} className="numpad__decimal" content={"."} />
      <NumberBtn
        id={"clear"}
        className="numpad__clear numpad__button--special"
        content={<ClearAll />}
      />
      <NumberBtn
        id={"clear-last"}
        className="numpad__clear-last numpad__button--special"
        content={<BackSpace />}
      />

      <NumberBtn
        id={"remainder"}
        className="numpad__remainder numpad__button--special"
        content={"%"}
      />
    </div>
  );
};
