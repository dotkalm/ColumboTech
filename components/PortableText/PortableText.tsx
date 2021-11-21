import React from 'react'
import TextBlock from "@sanity/block-content-to-react";
import { TextBlocksType } from '../../types/TextBlockType'
export default function PortableText({ textBlock }: TextBlocksType){
	return(<TextBlock blocks={textBlock}/>)
}

