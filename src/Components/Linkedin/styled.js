import styled from "styled-components";

export const Main = styled.div`
  display: flex;
`;

export const NavBar = {
  Box: styled.div`
    display: flex;
    width: 100%;
    background: #283e4a;
    height: 52px;
    padding: 0 30px;
    .chatbox {
      align-self: center;
      display: none;
      cursor: pointer;
      i {
        color: #fff;
      }
    }
    .picture-profile {
      height: 30px;
      border-radius: 100%;
      background: #fff;
      align-self: center;
      display: none;
    }
    @media screen and (max-width: 804px) {
      padding: 0 20px 0 20px;
      background: #283e4a;
      .chatbox {
        display: block;
      }
      .picture-profile {
        display: block;
      }
    }
  `,
  Items: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    @media screen and (max-width: 804px) {
      justify-content: center;
      input {
        width: 100%;
      }
      .logo-container {
        width: 90%;
      }
      .input-container {
        width: 100%;
      }
      .logo {
        display: none;
      }
    }
    .logo-container {
      display: flex;
      align-items: center;
      .logo {
        height: 30px;
        cursor: pointer;
        margin-right: 12px;
      }
      .fa-search {
        position: absolute;
        align-self: center;
        margin-left: 5px;
        color: #808080;
      }
      input {
        height: 8px;
        padding: 12px 15px 12px 25px;
        border-radius: 3px;
        border: none;
        margin-right: 12px;
      }
      .input-container {
        display: flex;
      }
    }
  `,
  SocialMedia: styled.div`
    height: 100%;
    font-family: "Roboto", sans-serif;
    display: flex;
    margin-left: 100px;
    @media screen and (max-width: 1110px) {
      margin-left: 0;
    }
    @media screen and (max-width: 1010px) {
      width: 100%;
      justify-content: flex-end;
      span {
        display: none;
      }
      a {
        display: none;
      }
    }
    @media screen and (max-width: 804px) {
      display: none;
    }
    i {
      color: #c7d1d8;
      font-size: 21px;
      margin-bottom: 3px;
      transition: color 0.4s;
    }
    .social-medias-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      margin: 0 20px 0 20px;
      :hover {
        i {
          transition: color 0.3s;
          color: #fff;
        }
        .spanbar {
          transition: color 0.3s;
          color: #fff;
        }
      }
      span {
        font-size: 12px;
        line-height: 1.33333;
        color: #c7d1d8;
        transition: color 0.4s;
      }
    }
    img {
      height: 26px;
      border-radius: 100%;
      background: #fff;
      margin-bottom: 3px;
    }
    .white-wall {
      border-left: solid 1px #fff;
      .fa-th {
        margin-left: 25px;
      }
      .spanbar {
        margin-left: 25px;
      }
    }
    .premium-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      :hover {
        a {
          text-decoration: underline;
        }
      }
      a {
        color: #dccea4;
        font-size: 12px;
        text-decoration: none;
      }
    }
  `,
};

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  @media screen and (max-width: 1110px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

export const Content = {
  VerticarBar: styled.div`
    margin: 30px 0 0 30px;
    width: 200px;
    height: 330px;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 1010px) {
      margin: 30px 0;
    }
    @media screen and (max-width: 804px) {
      display: none;
    }
    .img-container {
      display: flex;
      justify-content: center;
    }
    .topBackground {
      display: flex;
      justify-content: flex-start;
      height: 55px;
      background: #000;
    }
    .middle-container {
      width: 100%;
      img {
        align-self: center;
        position: absolute;
        top: 120px;
        height: 60px;
        border-radius: 100%;
        background: #fff;
      }
      .descriptions {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        h1 {
          font-size: 15px;
          text-align: center;
          font-family: "Roboto", sans-serif;
          color: rgba(0, 0, 0, 0.9);
        }
        span {
          align-self: center;
          font-family: "Roboto", sans-serif;
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }
    .profile-viewers {
      display: flex;
      flex-direction: column;
      width: 100%;
      .profile-viewers-views {
        margin: 10px 10px 0 10px;
        display: flex;
        justify-content: space-between;
        :hover {
          text-decoration: underline;
        }
      }
      a {
        color: #0077b5;
        font-size: 12px;
        text-decoration: none;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
      }
    }
    .premiumBox {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 10px;
      :hover {
        span {
          text-decoration: underline;
        }
      }
      span {
        color: rgba(0, 0, 0, 0.6);
        font-family: "Roboto", sans-serif;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .save-box {
      display: flex;
      align-items: flex-end;
      margin: 10px 20px 20px 15px;
      cursor: pointer;
      span {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        margin-left: 10px;
        color: rgba(0, 0, 0, 0.9);
      }
      i {
        color: rgb(102, 94, 208);
        font-size: 18px;
      }
    }
    .divisor {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      margin-top: 20px;
    }
    .mini-container-box {
      width: 200px;
      height: 100px;
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
      font-family: "Roboto", sans-serif;
      .blue-title {
        color: #0077b5;
        font-size: 12px;
        font-weight: 600;
        margin: 7px;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
    }
    .events-box {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.9);
      margin: 3px;
      span {
        margin: 3px;
      }
      i {
        align-self: center;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .discover-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      span {
        padding: 9px 0 0 0;
        color: rgba(0, 0, 0, 0.8);
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        :hover {
          color: #0077b5;
          text-decoration: underline;
        }
      }
    }
  `,
  HorizontalTab: styled.div`
    margin: 30px 0 0 30px;
    width: 40%;
    @media screen and (max-width: 1010px) {
      width: 70%;
    }
    @media screen and (max-width: 804px) {
      width: 100%;
      margin: 10px 10px 0 10px;
    }
    .button-first-box {
      display: flex;
      flex-direction: column;
    }
    .button-box {
      display: flex;
      width: 100%;
    }
    button {
      display: flex;
      width: 100%;
      height: 65px;
      margin-left: 1px;
      border-radius: 2px 2px 0 0;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
      outline: none;
      :hover {
        span {
          color: #0077b5;
          text-decoration: underline;
        }
        .fa-file-alt {
          color: #0077b5;
          text-decoration: underline;
        }
      }
      span {
        font-family: "Roboto", sans-serif;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        font-size: 14px;
        margin-left: 10px;
        i {
          font-size: 17px;
          margin-right: 5px;
        }
      }
    }
    .icons-box {
      display: flex;
      align-items: center;
      i {
        margin: 0 20px 0 20px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 20px;
      }
      .grey-wall {
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-left: none;
        height: 100%;
        cursor: pointer;
        :hover {
          i {
            color: #000;
          }
        }
      }
    }
    .subtitle-box {
      display: flex;
      align-items: center;
      border-radius: 0 0 2px 2px;
      border-top: none !important;
      border: 1px solid rgba(0, 0, 0, 0.3);
      height: 50px;
      }
      span {
        margin-left: 5px;
        margin-right: 5px;
        color: #0077b5;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
      p {
      margin-left: 10px;
      font-family: "Roboto", sans-serif;
      color: rgba(0, 0, 0, 0.7);
      font-size: 12px;
      }
    }
    .post-box {
      margin-top: 15px;
      height: auto;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
    .profile-nav {
      width: 100%;
      height: 80px;
      img {
        margin-right: 5px;
        height: 30px;
        width: auto;
        border-radius: 100%;
      }
      h1 {
        font-size: 13px;
        font-family: "Roboto", sans-serif;
      }
      span {
        margin: 0;
        font-size: 11px;
        font-family: "Roboto", sans-serif;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .user-box {
      display: flex;
      margin: 10px;
    }
    video {
      margin-top: 5px;
      height: auto;
      width: 100%;
      outline: none;
    }
    p {
      margin: 10px 0 0 10px;
      font-size: 15px;
      font-family: "Roboto", sans-serif;
      color: rgba(0, 0, 0, 0.9);
    }
    .likes-box {
      margin-left: 5px;
      i {
        margin: 5px 0 0 5px;
        font-size: 15px;
        cursor:pointer;
      }
      .fa-thumbs-up {
        color: #0077b5;
      }
      .fa-praying-hands {
        color: #0eff00;
      }
      .fa-heart {
        color: #E50914;
      }
      .likes-span {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      :hover {
          text-decoration: underline;
      }
      }
    }
    .media-actions-container {
      margin-top: 20px;
      margin-left: 5px;
    }
    .media-actions {
      display: flex;
      i {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 0 5px 10px 5px;
        color: rgba(0, 0, 0, 0.7);
        h2 {
          margin: 0 5px 0 5px;
         font-size: 14px;
         font-family: "Roboto", sans-serif;
         color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    .blue {
      color: #0077b5 !important;
    } 
    .comments-container {
      display: flex;
      margin: 20px 10px 10px 0;
      width: 100%;
      img {
        height: 25px;
        border-radius: 100%;
        align-self: center;
        margin-right: 3px;
      }
      input {
        margin-right: 10px;
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        outline: none;
        padding: 0 30px 0 10px;
      }
      i {
        position: absolute;
        align-self: center;
        color:rgba(0, 0, 0, 0.6);
        padding: 20px;
        cursor: pointer;
        :hover {
          color: #000;
        }
      }
    }
    .input-camera {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  `,
  CorporationsTab: styled.div`
    margin: 30px 0 0 30px;
    @media screen and (max-width: 1010px) {
      display: none;
    }
    .main-box {
      border: 1px solid rgba(0, 0, 0, 0.3);
      height: 230px;
      width: 300px;
    }
    .second-box {
      margin: 20px 0 0 0;
      span {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
        font-family: "Roboto", sans-serif;
        font-size: 13px;
        margin: 10px 5px 5px 15px;
        :hover {
          color: #0077b5;
        }
      }
      .items-box {
        margin: 0 10px 5px 0;
      }
    }
    .title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0 0 10px;
      h1 {
        color: rgba(0, 0, 0, 0.8);
        font-size: 17px;
        font-family: "Roboto", sans-serif;
      }
      i {
        margin-right: 10px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .profile-box {
      display: flex;
      margin-bottom: 20px;
    }
    .social-container {
      display: flex;
      flex-direction: column;
      margin: 20px 0 0 10px;
      img {
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
        cursor: pointer;
      }
      h1 {
        color: rgba(0, 0, 0, 0.9);
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
      }
      span {
        color: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
      }
    }
    h2 {
      margin-top: 10px;
      color: #0077b1;
      cursor: pointer;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
    }
    .button-container {
      align-self: center;
      button {
        cursor: pointer;
        padding: 5px;
        margin: -20px 0 0 15px;
        width: auto;
        color: #0077b5;
        border: 1px solid #0077b5;
        :hover {
          border-width: 2px;
        }
        i {
          margin: 0 5px 0 1px;
        }
      }
    }
    .info-box {
      margin: 2px 0 0 5px;
    }
    .linkedin-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 50px;
      margin-top: -5px;
    }
    P {
      color: rgba(0, 0, 0, 0.7);
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      margin-left: 50px;
      margin-top: 5px;
    }
  `,
};
