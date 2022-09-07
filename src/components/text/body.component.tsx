import { text } from "stream/consumers"

type IBodyProps = {

    children:JSX.Element | string;
    }
export function BodyText ({children}:IBodyProps){
    return <p className='font-body text-[14px] leading-[25px]'>{children}</p>

}