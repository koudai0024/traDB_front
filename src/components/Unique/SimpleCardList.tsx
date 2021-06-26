import { Container } from "src/components/Common/Container";
import { HeadLine } from "src/components/Common/HeadLine";
import { Inner } from "src/components/Common/Inner";
import { SimpleCard } from "src/components/Common/SimpleCard";
import { getCurrentSeason } from "src/lib/util/util";
import styled from "styled-components";

const SimpleCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 8px;
  width: 100%;
  margin-top: 8px;
`;

const StyledSimpleCard = styled(SimpleCard)`
  width: calc(50% - 4px);
`;

export const SimpleCardList = () => {
  const headLineColor = () => {
    switch (getCurrentSeason()?.value) {
      case "春":
        return "EA5532";
      case "夏":
        return "EA5532";
      case "秋":
        return "EA5532";
      case "冬":
        return "EA5532";
    }
  };
  return (
    <Container>
      <Inner>
        <HeadLine
          variant="h2"
          color={headLineColor()}
          altColorText={getCurrentSeason()?.value}
          afterText="オススメ"
        />
        <SimpleCardWrap>
          <StyledSimpleCard
            tag="大阪府"
            title="大阪城"
            titleTag="h3"
            image="/images/oosakajou.jpeg"
          />
          <StyledSimpleCard
            tag="大阪府"
            title="大阪城"
            titleTag="h3"
            image="/images/oosakajou.jpeg"
          />
          <StyledSimpleCard
            tag="大阪府"
            title="大阪城"
            titleTag="h3"
            image="/images/oosakajou.jpeg"
          />
        </SimpleCardWrap>
      </Inner>
    </Container>
  );
};
