import React, { FunctionComponent } from "react";
import { ComponentProps } from "../../Components";

export const Heading: FunctionComponent<ComponentProps> = ({ blockData }) => (
  <div
    className="heading"
    dangerouslySetInnerHTML={{ __html: blockData }}
  ></div>
);
