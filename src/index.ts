import { IOption } from "./actions/abstract.action";
import { MashongAction } from "./actions/mashong.action";

/**
 * @todo need to modulization
 */
export const mashong = (input: string, option?: IOption) => {
  const action = new MashongAction();
  return action.handle(input, option);
};
