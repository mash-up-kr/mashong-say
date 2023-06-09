import { mashong } from "../src";

describe("매숑 테스트", () => {
  it("브랜딩 매숑 성공 테스트", () => {
    const output = mashong("hi", { platform: "branding" });
    expect(output).toMatchInlineSnapshot(`
" ---- 
| hi |
 ---- 
        \\
         \\                               
          (%%%%#                              /%#%#        
         #%@@@@@@#%                        #%%@@@@@%%      
         %%@@@@@@@@#%%%%,            %%%%%%@@@@@@@@%#      
         %%@@@@@@@@@@@@@@%          %%@@@@@@@@@@@@%%       
          /%%@@@@@@@@@@@@%         #%@@@@@@@@@@@@#%        
            #%%@@@@@@@@@@%#@@@@@@@@@&@@@@@@@@@@#%          
       #       %%%@@@@@@@@@@@@@@@@@@@@@@@@@@&%%            
      #(#        %#@@@@@@@@@@@@@@@@@@@@@@@@%%              
   #(( ( ((#   #%   @@@@@@@@&@@@@@@@@@@@@    %%            
      #(#     %@@@@@@                    @@@@@@#*          
       #     %@@@@@@@         @          @@@@@@@#(         
            %&@@@@@@@@@     @@@@@@    @@@@@@#@@@@#(        
            %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,,@,@@@%#        
             #%#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%         
                                                           
                                                           
                                                           
                                                           
                                                                                        "
`);
  });

  it("노드팀 매숑 성공 테스트", () => {
    const output = mashong("hi", { platform: "node" });
    expect(output).toMatchInlineSnapshot(`
" ---- 
| hi |
 ---- 
        \\
         \\
           _____                           _____
          /     \\__                       /      \\
         /         \\___              ____/        \\
        |               \\           /             |
         \\               |_________|            _/
          \\_____                            ___/
                |                          |
               /                            \\ 
              /      ████████████████████    \\
             /       -█▄▀▄▀███──██▄▀▄▀██-     \\
            |         -▀▄█▄█▀────▀▄█▄█▀        |        
            |                                  |      
             \\________________________________/

"
`);
  });
});
