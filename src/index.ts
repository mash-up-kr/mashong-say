import { IOption } from "./actions/abstract.action";
import { MashongAction } from "./actions/mashong.action";

export const mashong = async (input: string, option?: IOption) => {
  const action = new MashongAction();
  return action.handle(input, option);
};
