import { text } from "stream/consumers"

type IBodyProps = {
    additionalStyles?:string;
    children:JSX.Element | string;
    }
export function BodyText ({additionalStyles, children}:IBodyProps){
    return <p className={`font-body text-[14px] leading-[25px] ${additionalStyles}`}>{children}</p>

}