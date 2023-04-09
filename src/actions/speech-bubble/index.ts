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

function format(text: string, btype: string[]): string {
  const lines = text.split(/\r?\n/);

  const maxLength = Math.max(...lines.map(line => getStringLength(line)));

  const center = lines.map(line => {
    const spaces = maxLength - getStringLength(line);
    const left = Math.floor(spaces / 2);
    const right = spaces - left;
    return ' '.repeat(Math.max(0, left)) + line + ' '.repeat(Math.max(0, right));
  });

  const updown = ' ' + '-'.repeat(maxLength + 2) + ' ';
  const bubble = [updown];

  for (let i = 0; i < center.length; i++) {
    bubble.push(`${btype[0]} ${center[i]} ${btype[1]}`);
  }
  bubble.push(updown);

  return bubble.join('\n');
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