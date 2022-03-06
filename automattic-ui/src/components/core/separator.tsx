import React, { FunctionComponent } from "react";

interface Props {
  blockData: any;
}
export const Separator: FunctionComponent<Props> = ({ blockData }) => (
  <div
    className="separator"
    dangerouslySetInnerHTML={{ __html: blockData }}
  ></div>
);
