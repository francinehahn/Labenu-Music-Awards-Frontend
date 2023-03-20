import {LoadingSection} from './style'

interface propsColor {
    color: string
}

export function Loading (props: propsColor) {
    return <LoadingSection color = {props.color}></LoadingSection>
}