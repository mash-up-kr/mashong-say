import { AbstractAction, IOption } from "./abstract.action";
import { SpeechBubble } from "./speech-bubble";

export class MashongAction extends AbstractAction {
  mashongKey = "mashong";

  public async handle(input: string, option: IOption = {}) {
    const key = option.platform
      ? `${option.platform}-${this.mashongKey}`
      : this.mashongKey;

    const mashong = this.getMashong(key);
    const speech = SpeechBubble.create(input, option);

    console.log(mashong.replace("$speech", speech));
  }
}
