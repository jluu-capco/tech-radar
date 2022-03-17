import styled from "styled-components/macro";

type WrapperProps = {
  category: string;
};

export const SubheaderStyle = `
font-size: 32px;
font-weight: 700;
text-align: left;
display: inline-block;
vertical-align: middle;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  position: relative;
  .MuiGrid-container {
    padding-left: 90px;
  }
  .grid-wrapper {
    position: relative;
    width: 100%;
    float: left;
    margin-bottom: 50px;
    .MuiGrid-container {
      text-align: left;
      width: 790px;
      margin: auto;
      margin-top: 40px;
    }
  }
  .categories-grid {
    display: flex;
    span {
      padding-right: 20px;
    }
  }
  img.background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  .title {
    font-size: 32px;
  }
  .subheader {
    ${SubheaderStyle}
    margin: 100px 0 20px 0;
  }
  .small-screen .subheader-mobile,
  .mobile-category {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    text-align: left;
    .mobile-category {
      display: block;
      margin: auto;
    }
    .grid-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .first-row-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 50px;
      div:first-child {
        padding-right: 50px;
      }
    }
    .category-icon {
      width: 64px;
      height: 64px;
    }
    .title {
      font-size: 30px;
    }
    .subheader-mobile {
      ${SubheaderStyle}
      margin: 50px 0 20px 0;
    }
    img.background,
    .desktop-grid,
    .large-screen {
      display: none;
    }
  }
`;

export const Title = styled.div`
  font-size: 90px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 30px;
`;

export const MobileTitle = styled.div`
  width: 210px;
  font-size: 52px;
  font-weight: 700;
  text-align: left;
  padding-right: 20px;
  vertical-align: middle;
  display: inline-block;
  margin: 20px 0 20px 0;
`;

export const Divider = styled.hr`
  background: white;
  margin: 0;
  width: 20px;
  border-width: 5px;
  margin-bottom: 15px;
`;
