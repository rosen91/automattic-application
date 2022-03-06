import React, { FunctionComponent } from "react";
import { WP_Block_Parsed } from "wp-types";

import { Heading } from "./components/core/heading";
import { Paragraph } from "./components/core/paragraph";
import { MediaText } from "./components/core/mediatext";
import { PullQuote } from "./components/core/pullquote";
import { List } from "./components/core/list";
import { Query } from "./components/core/query";
import { Image } from "./components/core/image";
import { Separator } from "./components/core/separator";

export interface ComponentProps {
  key: string;
  attr: WP_Block_Parsed["attrs"];
  innerBlocks: WP_Block_Parsed["innerBlocks"];
  blockData: WP_Block_Parsed["innerHTML"];
}

const Components: { [key: string]: FunctionComponent<ComponentProps> } = {
  "core/heading": Heading,
  "core/paragraph": Paragraph,
  "core/media-text": MediaText,
  "core/pullquote": PullQuote,
  "core/list": List,
  "core/query": Query,
  "core/image": Image,
  "core/separator": Separator,
};

export const ComponentsResolver = (block: WP_Block_Parsed, i: number) => {
  // Check if component exists by key
  if (Object.keys(Components).includes(block.blockName)) {
    return React.createElement(Components[block.blockName], {
      key: `${block.blockName}-${i}`,
      attr: block.attrs,
      innerBlocks: block.innerBlocks,
      blockData: block.innerHTML,
    });
  }
};
