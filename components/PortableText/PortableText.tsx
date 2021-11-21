import * as TextBlock from "@sanity/block-content-to-react";
import { TextBlocksType } from '../../types/TextBlockType'
export default function PortableText({ textBlock, classname='' }: TextBlocksType){
	return <TextBlock className={classname} blocks={textBlock}/>
}

