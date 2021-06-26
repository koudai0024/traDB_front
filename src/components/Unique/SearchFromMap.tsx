import { Container } from "src/components/Common/Container";
import { DropDownMenu } from "src/components/Common/DropDownMenu";
import { HeadLine } from "src/components/Common/HeadLine";
import { Inner } from "src/components/Common/Inner";
import { PREFECTURES } from "src/lib/data/map";
import styled from "styled-components";

const DropDownMenuList = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const SearchFromMap = () => {
  return (
    <Container>
      <Inner>
        <HeadLine
          variant="h2"
          color="3B82F6"
          altColorText="目的地"
          afterText="で調べる"
        />
        <DropDownMenuList>
          {PREFECTURES.map((location) => {
            return (
              <DropDownMenu
                key={location.label}
                labelTagVariant="h3"
                label={location.label}
                contents={location.values}
              />
            );
          })}
        </DropDownMenuList>
      </Inner>
    </Container>
  );
};
