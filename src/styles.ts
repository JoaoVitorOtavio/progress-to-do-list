import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
interface IDisabled {
  isDisabled: boolean;
}

interface IDone {
  isDone: boolean;
}

interface ITodoItem extends IDisabled, IDone {}

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

export const RemoveAddIconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const IconContainer = styled.div<Partial<IDone>>`
  height: 48px;
  width: 44px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;

  @media (min-width: 800px) {
    display: none;
  }

  &.remove {
    background-color: #e34f4f;
    border: 1px solid #e34f4f;
  }
  &.add {
    background-color: ${(props) => (props.isDone ? "#ff7675" : "#5de290")};
    border: 1px solid ${(props) => (props.isDone ? "#ff7675" : "#5de290")};
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;

  @media (min-width: 800px) {
    margin-bottom: 0;
    width: -webkit-fill-available;
    margin-left: 55px;
  }
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

  &.mr {
    margin-right: 8px;
  }
`;

export const NewItemButtonContainer = styled.div<IDisabled>`
  cursor: pointer;
  background: ${(props) => (props.isDisabled ? "#a2ced5" : "#4da6b3")} 0% 0%
    no-repeat padding-box;
  border: 1px solid ${(props) => (props.isDisabled ? "#a2ced5" : "#4da6b3")};
  border-radius: 0 4px 4px 0;
  margin-bottom: 16px;
`;

export const NewItemButton = styled.button`
  cursor: pointer;
  border: none;
  background: #4da6b3 0% 0% no-repeat padding-box;
  border-radius: 0px 4px 4px 0px;
  opacity: 1;
  height: 48px;
  width: 44px;

  &:disabled {
    cursor: default;
    background-color: #a2ced5;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  overflow: visible;
  flex-direction: column;
  /* overflow-y: auto; */
  scrollbar-width: thin;
  max-height: 400px;
  /* min-height: 200px; */
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  @media (min-width: 800px) {
    max-height: 250px;
    min-height: 250px;
  }
`;

const getBackgroundColor = (isDisabled: boolean, isDone: boolean) => {
  if (isDisabled) {
    return isDone ? "#d4edda" : "#f4f4f4";
  }

  return "#fff";
};

export const ToDoItem = styled.div<ITodoItem>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 48px;
  background: ${({ isDisabled, isDone }) =>
      getBackgroundColor(isDisabled, isDone)}
    0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  opacity: 1;
  margin-bottom: 8px;
  flex-shrink: 0;

  &:hover .child-button {
    display: flex;
  }

  &:hover .edit-button {
    display: block;
  }

  .child-button {
    display: ${(props) => (props.isDisabled ? "none" : "flex")};
  }

  .edit-button {
    display: ${(props) => (props.isDisabled ? "none" : "block")};
  }
`;

export const ToDoDescription = styled.input<ITodoItem>`
  width: 100%;
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 1;
  background-color: ${({ isDisabled, isDone }) =>
    getBackgroundColor(isDisabled, isDone)};
  outline: none;
  border: none;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

export const InputAndTagsContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const EditButton = styled.div`
  display: none;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #848484;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #848484;
  }
`;

