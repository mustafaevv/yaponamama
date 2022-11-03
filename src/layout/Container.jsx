import classNames from "classnames";

import classes from "./Container.module.scss";

const Container = ({ children, className }) => {
  return (
    <div className={classNames(classes["container"], className)}>
      {children}
    </div>
  );
};
export default Container;
