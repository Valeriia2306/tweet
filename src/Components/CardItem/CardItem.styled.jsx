import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
`;
export const LogoPicture = styled.picture`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TweetsPicture = styled.picture`
  padding: 28px 36px 18px 36px;
  display: block;
  width: 308px;
`;
export const Line = styled.div`
  height: 8px;
  margin-bottom: 62px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 2;

  width: 80px;
  height: 80px;
  margin-bottom: 26px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  z-index: 1;
  margin-bottom: 26px;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-color: #5736a3;
`;

export const Tweets = styled.p`
  // margin-bottom: 16px;
  margin: 0 0 16px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
`;
export const Followers = styled.p`
  // margin-bottom: 26px;
  margin: 0 0 26px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 196px;
  height: 50px;
  margin: 0 auto;
  // margin-top: 10px;

  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;

  background-color: ${props => {
    return props.isFollow ? '#5CD3A8' : '#EBD8FF';
  }};
`;

// export const Card = styled.div`
// position: relative;
// display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   width: 380px;
//   height: 460px;

//   background: linear-gradient(
//     114.99deg,
//     #471ca9 -0.99%,
//     #5736a3 54.28%,
//     #4b2a99 78.99%
//   );
//   box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
//   border-radius: 20px;
// `;

// export const Logo = styled.img`
//   width: 76px;
//   height: 22px;
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   // background: rgba(255, 255, 255, 0.3);
// `;

// export const BgImg = styled.img`
//   width: 308px;
//   height: 168px;
//   position: absolute;
//   top: 28px;
//   left: 36px;
// `;
// export const Rectangle = styled.div`
//   position: absolute;
//   top: 214px;
//   height: 8px;
//   width: 380px;
//   background: #ebd8ff;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
//     inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
// `;

// export const Ellipse = styled.div`
//   position: absolute;
//   width: 80px;
//   height: 80px;
//   left: 150px;
//   top: 178px;

//   background: #ebd8ff;
//   box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
//     inset 0px -2.19582px 4.39163px #ae7be3,
//     inset 0px 4.39163px 3.29372px #fbf8ff;
//   border-radius: 50px;
// `;

// export const Avatar = styled.img`
//   position: absolute;
//   width: 62px;
//   height: 62px;
//   left: 9.48px;
//   top: 9.42px;
//   background: #5736a3;
//   border-radius: 50px;
//   background-image: url(${avatarDef});
// `;
// export const Tweets = styled.p`
//   position: absolute;
//   width: 208px;
//   height: 24px;

//   top: 284px;
//   margin: 0 0 16px 0;

//   font-family: Montserrat;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 24px;
//   text-transform: uppercase;
//   text-align: center;

//   color: #ebd8ff;
// `;

// export const Followers = styled.p`
//   position: absolute;
//   width: 208px;
//   height: 24px;

//   top: 324px;
//   margin: 0 0 26px 0;

//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 24px;
//   text-transform: uppercase;
//   text-align: center;

//   color: #ebd8ff;
// `;

// export const Button = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 14px 28px;
//   gap: 6px;
//   margin: 0 0 26px 0;

//   position: absolute;
//   width: 196px;
//   height: 50px;
//   left: 92px;
//   top: 374px;

//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
//   border-radius: 10.3108px;

//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 22px;

//   text-transform: uppercase;
//   cursor: pointer;
//   opacity: 1;

//   :hover,
//   :focus {
//     opacity: 0.75;
//   }
// `;
