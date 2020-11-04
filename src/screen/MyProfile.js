import { Base } from "./Base";
import { MyProfileRender } from "./MyProfileRender";

export const MyProfile=()=> {
    // console.log('====================================');
    // console.log(process.env.PUBLIC_URL);
    // console.log('====================================');
    return (
     <Base>
        <MyProfileRender />
     </Base>
    );
  }
  
  