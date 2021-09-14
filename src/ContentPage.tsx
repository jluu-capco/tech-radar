import React, { useContext, useEffect, useState } from "react";
import { RadarContextType, RadarContext } from "./RadarContextProvider";
import BackLink from "./BackLink";
import Footer from "./Footer";
import { icons, technologies } from "./data/data";
import { SubContent, ExampleContent } from "./Content";
import { TechContentType } from "./data/content";
import techContent from "./data/content";
import images from "./images";
import styled from "styled-components/macro";
import ContentNavButton from "./ContentNavButton";
import { getNextItem, getPrevItem } from "./helpers";

type WrapperProps = {
  category: string;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 90px;
  margin: 50px 0 100px 0;
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  img {
    margin: auto;
  }
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
  }
  .conent-nav {
  }
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
    padding: 0 25px 0 25px;
    img.background {
      display: none;
    }
  }
`;

const StyledContent = styled.div`
  text-align: left;
  width: 1060px;
  margin: auto;
  position: relative;
  :first-child {
    display: inline-block;
  }
  svg.icon {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    svg.icon {
      width: 50px;
      height: 50px;
    }
  }
`;

const ContentBody = styled.div`
  width: 700px;
  margin: 0 auto;
  font-family: poppins, sans-serif;
  .content-intro {
    font-size: 24px;
    margin-bottom: 34px;
    a {
      color: inherit;
      border-bottom: 1px solid #e6236d;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    .content-intro {
      font-size: 18px;
    }
  }
`;

const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 52px;
    padding-right: 30px;
  }
`;

const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [content, setContent] = useState<TechContentType | null>(null);
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    let url = window.location.pathname.split("/");

    // Find category and tech name in technologies data
    let categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) =>
          url[2] && categoryName.toLowerCase() === url[2].replace(/-/g, " ")
      )[0] || technologies[0];

    let technologyFromUrl =
      categoriesAndTechnologies.technologies.filter(
        (tech: string) =>
          url[3] && tech.toLowerCase() === url[3].replace(/-/g, " ")
      )[0] || technologies[0].technologies[0];

    let categoryFromUrl = categoriesAndTechnologies.categoryName;
    console.log(categoriesAndTechnologies);
    let icon = icons.filter(
      (el: any) => el.name.toLowerCase() === technologyFromUrl.toLowerCase()
    )[0]!;

    let content =
      techContent.filter(
        ({ technology }) => technology === technologyFromUrl
      )[0] || techContent[0];
    console.log(technology + " - " + technologyFromUrl);
    console.log(techContent);
    setContent(content);

    setImageLink(icon.link);
    setTechnology(technologyFromUrl);
    setCategory(categoryFromUrl);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [technology, category, setCategory, setTechnology]);

  let nextTechnology = getNextItem(technology);

  let previousTechnology = getPrevItem(technology);

  let filteredNext =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(nextTechnology)
    )[0];
  let nextCategory = filteredNext ? filteredNext.categoryName : "Devops";

  let filteredPrev =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(previousTechnology)
    )[0];
  let previousCategory = filteredPrev ? filteredPrev.categoryName : "Mobile";

  return (
    <>
      <Wrapper category={category}>
        <img
          className="background"
          src={(images as any)[category]}
          alt={category}
          width={650}
          height={650}
        />
        {content && (
          <StyledContent>
            <div>
              <BackLink category={category} />
              <Title className={`title-${technology}`}>{technology}</Title>
              <a href={content.docsLink} target="_blank" rel="noreferrer">
                <svg className="icon" viewBox={"0 0 80 80"}>
                  <circle cx={40} cy={40} r={40} fill={"white"} />
                  <image
                    x={15}
                    y={15}
                    href={imageLink}
                    height={50}
                    width={50}
                  />
                </svg>
              </a>
              <ContentBody>
                <div
                  className="content-intro"
                  dangerouslySetInnerHTML={{ __html: content.intro }}
                />
                <SubContent contentData={content.content} />
                <ExampleContent contentData={content.examples} />
                <hr />
                <div className="content-nav">
                  <ContentNavButton
                    onClick={() => setTechnology(previousTechnology)}
                    previousTechnology={previousTechnology}
                    nextTechnology={nextTechnology}
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    next={false}
                  />
                  <ContentNavButton
                    onClick={() => setTechnology(nextTechnology)}
                    previousTechnology={previousTechnology}
                    nextTechnology={nextTechnology}
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}
                    next={true}
                  />
                </div>
              </ContentBody>
            </div>
          </StyledContent>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default CategoryPage;
