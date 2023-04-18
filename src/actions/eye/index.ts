import {IOption} from "../abstract.action";

export class Eye {
    static create(option:IOption) {
        const eyeType = option.eye;
        const eyeTypeDic: { [key: string]: string } = {
            heart: "❤️",
            fire: "‍🔥",
            default: " "
        }

        return eyeTypeDic[eyeType];
    }
}