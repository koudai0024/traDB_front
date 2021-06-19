import { Input } from "src/components/Common/Input";
import styled from "styled-components";

const StyledInput = styled(Input)`
  margin-top: 8px;
`;

const SearchForm = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
  box-sizing: border-box;

  .inner {
    width: 100%;
    border-bottom: 2px solid #d1d5db;
    padding: 0 0 16px;
  }

  .panel {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }

  .selectWrap {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 8px;
  }

  .selectLabel {
    font-size: 18px;
    font-weight: bold;
    color: #3f3f46;
    margin-right: 16px;
  }

  .select {
    background: #f4f4f5;
    flex: 1;
    color: #3f3f46;
    border: 1px solid #d4d4d8;
    border-radius: 8px;
    padding: 8px 16px;
  }

  .btn {
    background: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 999px;
    padding: 4px 0;
    margin: 16px auto 0;
  }
`;

export const MainSearchForm = () => {
  return (
    <SearchForm>
      <div className="inner">
        <div className="panel">
          <StyledInput type="text" placeholder="フリーワード" />
          <StyledInput type="text" placeholder="場所" />
          <StyledInput type="text" placeholder="施設(例：レジャー施設)" />
          <StyledInput type="text" placeholder="特徴" />
          <div className="selectWrap">
            <span className="selectLabel">おすすめの季節</span>
            <select className="select">
              <option value="">季節を選択</option>
              <option value="春">春</option>
              <option value="夏">夏</option>
              <option value="秋">秋</option>
              <option value="冬">冬</option>
            </select>
          </div>
          <button className="btn">検索</button>
        </div>
      </div>
    </SearchForm>
  );
};
