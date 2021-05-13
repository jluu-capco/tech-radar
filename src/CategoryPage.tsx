import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RadarContextType, RadarContext } from './RadarContextProvider';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CategoryRadar from './CategoryRadar';
import styled from 'styled-components/macro';
import { data } from './data/data';
import images from './images';
import StyledButton from './StyledButton';

type WrapperProps = {
  category: string;
};

const Wrapper = styled.div<WrapperProps>`
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
    .MuiGrid-container {
      text-align: left;
      width: 790px;
      margin: auto;
    }
  }
  .categories-grid {
    display: flex;
    span {
      padding-right: 20px;
    }
  }
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  hr {
    background: white;
    margin: 0;
    width: 20px;
    border-width: 5px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 32px;
  }
  .technology {
    padding-top: 12px;
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    svg.MuiSvgIcon-root {
      font-size: 12px;
      margin-left: 10px;
    }
    a {
      color: inherit;
    }
    :hover {
      a {
        text-decoration: underline;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 20px;
  padding-right: 20px;
`;

const SubHeader = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  margin: 100px 0 20px 0;
`;

type ContentType = {
  preferred: Array<{ name: string; link: string }>;
  skilled: Array<{ name: string; link: string }>;
  scaling: Array<{ name: string; link: string }>;
};

const CategoryPage = () => {
  const { category, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [content, setContent] =
    useState<{ name: string; data: ContentType } | null>(null);

  useEffect(() => {
    let categoryName = window.location.pathname.split('/')[2];
    setCategory(categoryName);
    setContent(
      data.filter((cat: any) => cat.name.toLowerCase() === categoryName)[0]
    );
    window.scroll({
      top: 0, 
      behavior: 'smooth'
    });
  }, [category, setCategory]);

  const buttonText = [
    'DevOps',
    'Databases',
    'Hosting',
    'Cloud',
    'Integration',
    'Backend',
    'Frontend',
    'Mobile',
  ].filter((name: string) => name.toLowerCase() !== category);

  return (
    <>
      {content && (
        <Wrapper category={category}>
          <img
            className='background'
            src={(images as any)[category]}
            alt={category}
            width={650}
            height={650}
          />
          <div className='grid-wrapper'>
            <Grid
              container
              style={{ textAlign: 'left', width: '790px', margin: 'auto' }}
            >
              <Grid item xs={12}>
                <Title>{content.name}</Title>
                <img
                  src={(images as any)[category]}
                  alt={category}
                  width={126}
                  height={126}
                />
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Preferred</div>
                {content.data.preferred.map(({ name }) => (
                  <div
                    key={name}
                    className='technology'
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(' ', '-')
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Skilled</div>
                {content.data.skilled.map(({ name }) => (
                  <div
                    key={name}
                    className='technology'
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(' ', '-')
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4}>
                <hr />
                <div className='title'>Scaling</div>
                {content.data.scaling.map(({ name }) => (
                  <div
                    key={name}
                    className='technology'
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(' ', '-')
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <SubHeader>Other Categories</SubHeader>
              <Grid item xs={12} className='categories-grid'>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <StyledButton
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <StyledButton
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
              </Grid>
            </Grid>
          </div>
          <CategoryRadar data={content.data} />
        </Wrapper>
      )}
    </>
  );
};

export default CategoryPage;
