import React, { FunctionComponent } from "react";
import { ComponentProps } from "../../Components";

export const Image: FunctionComponent<ComponentProps> = ({ blockData }) => (
  <div className="image" dangerouslySetInnerHTML={{ __html: blockData }}></div>
);
