import React, { FunctionComponent } from "react";
import { ComponentProps, ComponentsResolver } from "./../../Components";

export const MediaText: FunctionComponent<ComponentProps> = ({
  blockData,
  innerBlocks,
}) => {
  const resolvedBlocks = innerBlocks?.map((block, i) =>
    ComponentsResolver(block, i)
  );
  const mediaText = resolvedBlocks[0]?.props.blockData;
  const replacedString = blockData.replace(
    '<div class="wp-block-media-text__content"></div>',
    `<div class="wp-block-media-text__content">${mediaText}</div>`
  );

  return (
    <div className="media-text">
      <div
        className="mediaTextMedia"
        dangerouslySetInnerHTML={{ __html: replacedString }}
      ></div>
    </div>
  );
};
