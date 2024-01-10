import styled from "styled-components";

export const SingleLessonSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
`;

export const SingleLessonSlideImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 3px;
`;

export const SingleLevel = styled.span`
  border-radius: 4px;
  margin: 2px;
  padding: 2px;
  background-color: #ffd633;
  width: fit-content;
`;
