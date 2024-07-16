import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  width: 341px;
  height: 780px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  @media (min-width: 800px) {
    width: 800px;
    height: 600px;
    padding: 54px 60px;
  }
`;

export const DataContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const DataContentContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const DayDescription = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;

  font-size: 60px;
  color: #848484;
  letter-spacing: 0;
  line-height: 47px;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

export const DataDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MonthDayDescription = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 24px;
  color: #848484;
  letter-spacing: 0;
  line-height: 22px;
`;

export const YearDescription = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;

  font-size: 24px;
  color: #848484;
  letter-spacing: 0;
  line-height: 25px;
`;

export const BackgroundProgress = styled.div`
  background: #e4e4e4 0% 0% no-repeat padding-box;
  height: 24px;
  width: 100%;
  border-radius: 4px 0px 0px 4px;
  opacity: 1;
  margin: 32px 0 24px 0;
`;

export const ProgressBar = styled.div`
  background: #5de290 0% 0% no-repeat padding-box;
  color: white;
  text-align: right;
  font-size: 20px;
  border-radius: 4px 0px 0px 4px;

  height: 24px;

  width: 80%;
  opacity: 1;
`;

export const StyledInputContainer = styled.div`
  position: relative;
  display: grid;
`;

export const NewItemInputContainer = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 0 16px;
  outline: none;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #848484;
  padding-right: 40px;

  &.newItem {
    width: 100%;
    border-radius: 4px 0px 0px 4px;
    border-right: none;
  }
`;

export const Icon = styled(FaSearch)`
  font: 14px/19px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #848484;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FilterButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 17px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
  padding: 8px 16px 6px 16px;
`;

export const NewItemButtonContainer = styled.div`
  background: #4da6b3 0% 0% no-repeat padding-box;
  border: 1px solid #4da6b3;
  border-radius: 0 4px 4px 0;
  margin-bottom: 16px;
`;

export const NewItemButton = styled.button`
  border: none;
  background: #4da6b3 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  height: 48px;
  width: 44px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  max-height: 400px;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  @media (min-width: 800px) {
    max-height: 250px;
  }
`;

export const ToDoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  opacity: 1;
  margin-bottom: 8px;
  flex-shrink: 0;
`;

export const ToDoDescription = styled.span`
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
`;

