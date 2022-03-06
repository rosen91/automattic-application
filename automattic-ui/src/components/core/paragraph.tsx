import React, { FunctionComponent } from "react";

interface Props {
  blockData: any;
}
export const Paragraph: FunctionComponent<Props> = ({ blockData }) => (
  <div
    className="paragraph"
    dangerouslySetInnerHTML={{ __html: blockData }}
  ></div>
);
