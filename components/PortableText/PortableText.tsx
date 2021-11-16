import * as TextBlock from "@sanity/block-content-to-react";

export default function PortableText({ textBlock, classname='' }){
		return <TextBlock className={classname} blocks={textBlock}/>
}

