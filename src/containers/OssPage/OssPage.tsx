import React, { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import CategoryRadar from "../../components/CategoryRadar/CategoryRadar";
import Grid from "@material-ui/core/Grid";
import MobileRadarBackground from "../../components/MobileRadarBackground/MobileRadarBackground";
import Button from "../../components/Button/Button";
import CategoryListItem from "../../components/CategoryListItem/CategoryListItem";
import { BackButton } from "../../components/BackLink/BackLink";
import { data, technologies, categoryList, techType } from "../../data/data";
import images from "../../images";
import {
  SubheaderStyle,
  Wrapper,
  Title,
  MobileTitle,
  Divider,
} from "./styles/";

const OssPage = () => {
  const { category, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [hovered, setHovered] = useState("");

  const [content, setContent] = useState<{
    name: string;
    data: techType;
  } | null>(null);

  useEffect(() => {
    let url = window.location.pathname.split("/");

    let categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) =>
          url[2] && categoryName.toLowerCase() === url[2].replace(/-/g, " ")
      )[0] || technologies[0];

    let categoryName = categoriesAndTechnologies.categoryName;

    setCategory(categoryName);
    setContent(data.filter((item: any) => item.name === categoryName)[0]);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [category, setCategory]);

  const buttonText = categoryList.filter((name: string) => name !== category);

  return (
    <>
      {content && (
        <Wrapper category={category}>
          <img
            className="background"
            src={(images as any)[category]}
            alt={category}
            width={650}
            height={650}
          />
          <MobileRadarBackground />
          <div className="grid-wrapper">
            <div className="mobile-category">
              <MobileTitle>{content.name}</MobileTitle>
              <img
                className="category-icon"
                src={(images as any)[category]}
                alt={category}
                width={126}
                height={126}
              />
              <div className="first-row-wrapper">
                <div>
                  <Divider />
                  <div className="title">Preferred</div>
                  {content.data.preferred.map(({ name, enabled }) => (
                    <CategoryListItem
                      key={name}
                      hovered={hovered === name}
                      category={category}
                      techName={name}
                      enabled={enabled}
                      onClick={() => setTechnology(name)}
                    />
                  ))}
                </div>
                <div>
                  <Divider />
                  <div className="title">Skilled</div>
                  {content.data.skilled.map(({ name, enabled }) => (
                    <CategoryListItem
                      key={name}
                      hovered={hovered === name}
                      category={category}
                      techName={name}
                      enabled={enabled}
                      onClick={() => setTechnology(name)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Divider />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </div>
              <div>
                <div className="subheader-mobile">Other Categories</div>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
              </div>
            </div>

            <Grid container className="desktop-grid">
              <Grid item xs={12}>
                <BackButton />
                <Title>{content.name}</Title>
                <img
                  className="category-icon"
                  src={(images as any)[category]}
                  alt={category}
                  width={126}
                  height={126}
                />
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Preferred</div>
                {content.data.preferred.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Skilled</div>
                {content.data.skilled.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>

              <div className="subheader">Other Categories</div>
              <Grid className="categories-grid" item xs={12}>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
              </Grid>
            </Grid>
          </div>
          <CategoryRadar data={content.data} setHovered={setHovered} />
        </Wrapper>
      )}
    </>
  );
};

export default OssPage;
