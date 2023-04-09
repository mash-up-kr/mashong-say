import { IOption } from "../abstract.action";

export class SpeechBubble {
  static create(input: string, option: IOption) {
    const bubbleType = option.bubbleType ?? 'pipe';
    const bubbleTypeDic: { [key: string]: string[] } = {
      slash: ["/", "/"],
      hash: ["#", "#"],
      plus: ["+", "+"],
      bracket: ["<", ">"],
      pipe: ["|", "|"],
      dollar: ["$", "$"]
    };

    const bubble = bubbleTypeDic[bubbleType];
    return format(input, bubble);
  }
    }

    return input;
  }
}

function getStringLength(text: string): number {
  let length = 0;
  for (let i = 0; i < text.length; i++) {
    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(text[i])) {
      length += 2;
    } else {
      length += 1;
    }
  }
  return length;
}