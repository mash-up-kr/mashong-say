import { AbstractAction } from "./abstract.action";

export class BrandingMashongAction extends AbstractAction {
  mashongKey = "branding-mashong";

  public async handle(input: string, option: any) {
    const mashong = this.getMashong(this.mashongKey);

    console.log(mashong.replace("$input", input));
  }
}
