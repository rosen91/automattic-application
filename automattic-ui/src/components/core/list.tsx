import React, { FunctionComponent } from "react";
import { ComponentProps } from "../../Components";

export const List: FunctionComponent<ComponentProps> = ({ blockData }) => (
  <div className="list" dangerouslySetInnerHTML={{ __html: blockData }}></div>
);
