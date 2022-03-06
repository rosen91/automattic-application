import React, { FunctionComponent } from "react";
import { ComponentProps } from "../../Components";

export const PullQuote: FunctionComponent<ComponentProps> = ({ blockData }) => (
  <div
    className="pullquote"
    dangerouslySetInnerHTML={{ __html: blockData }}
  ></div>
);
