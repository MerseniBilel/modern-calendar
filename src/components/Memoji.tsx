import { MemojiTypes } from "../types"

const memoji = ({ emoji, alt, className }: MemojiTypes) => <img src={emoji} alt={alt} className={className} />
export default memoji
