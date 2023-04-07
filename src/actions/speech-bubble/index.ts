import { IOption } from "../abstract.action";

export class SpeechBubble {
  static create(input: string, option: IOption) {
    const bubbleType = option.bubbleType;
    const bubbleTypeDic: { [key: string]: string[] } = {
      slash: ["/", "/"],
      hash: ["#", "#"],
      plus: ["+", "+"],
    };

    const bubble = bubbleTypeDic[bubbleType];
    if (bubble) {
      return [bubble[0], input, bubble[1]].join(" ");
    }

    return input;
  }
}
