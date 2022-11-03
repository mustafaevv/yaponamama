import classNames from "classnames";

import classes from "./Title.module.scss";

const Title = ({ children, className }) => {
  return (
    <h2 className={classNames(classes["title"], className)}>{children}</h2>
  );
};

export default Title;
