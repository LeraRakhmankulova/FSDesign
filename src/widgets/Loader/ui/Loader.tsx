import { FC } from "react";
import "./index.scss"

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
