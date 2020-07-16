/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

export default function save() {
    return <InnerBlocks.Content />;
}
