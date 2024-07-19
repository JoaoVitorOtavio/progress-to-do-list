import { FaCirclePlus, FaCircleMinus, FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";

import {
  BackgroundProgress,
  Container,
  DataContainer,
  DataContentContainer,
  DataDescriptionContainer,
  DayContainer,
  DayDescription,
  EditButton,
  FilterButton,
  FilterButtonContainer,
  Icon,
  IconContainer,
  InputAndTagsContainer,
  InputContainer,
  ItemContainer,
  MonthDayDescription,
  NewItemButton,
  NewItemButtonContainer,
  NewItemInputContainer,
  ProgressBar,
  RemoveAddIconContainer,
  StyledInput,
  StyledInputContainer,
  ToDoDescription,
  ToDoItem,
  YearDescription,
} from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  endIcon: boolean;
}

const Item = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <ToDoItem isDisabled={isDisabled}>
      <EditButton
        onClick={() => setIsDisabled((oldValue) => !oldValue)}
        className="edit-button"
      >
        Editar Task
      </EditButton>
      <RemoveAddIconContainer>
        <IconContainer
          className="remove child-button"
          onClick={() => console.log("REMOVER")}
          title="Remover Item"
        >
          <FaCircleMinus size="20px" color="#fff" />
        </IconContainer>
        <IconContainer className="add child-button">
          <FaCircleCheck
            size="20px"
            color="#fff"
            onClick={() => console.log("ADICIONAR")}
            title="Adicionar Item"
          />
        </IconContainer>
      </RemoveAddIconContainer>
      <ToDoDescription value={"To DO ITEM 1"} disabled={isDisabled} />
    </ToDoItem>
  );
};

const Input: React.FC<InputProps> = ({ placeholder, endIcon, ...props }) => (
  <StyledInputContainer>
    <StyledInput {...props} placeholder={placeholder} />
    {endIcon && <Icon />}
  </StyledInputContainer>
);

function App() {
  const [newItemDescription, setNewItemDescription] = useState<string>("");

  const handleChangeItemDescription = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setNewItemDescription(e.currentTarget.value);
  };

  return (
    <Container>
      <DataContainer>
        <DataContentContainer>
          <div>
            <DayDescription>07</DayDescription>
          </div>
          <DataDescriptionContainer>
            <MonthDayDescription>Jul</MonthDayDescription>
            <YearDescription>2021</YearDescription>
          </DataDescriptionContainer>
        </DataContentContainer>
        <DayContainer>
          <MonthDayDescription>Wednesday</MonthDayDescription>
        </DayContainer>
      </DataContainer>
      <div>
        <BackgroundProgress>
          <ProgressBar />
        </BackgroundProgress>
      </div>
      <InputAndTagsContainer>
        <InputContainer>
          <Input placeholder="Search Items" endIcon />
        </InputContainer>
        <FilterButtonContainer>
          <FilterButton className="mr">Done</FilterButton>
          <FilterButton>Pending</FilterButton>
        </FilterButtonContainer>
      </InputAndTagsContainer>
      <NewItemInputContainer>
        <StyledInput
          onChange={handleChangeItemDescription}
          value={newItemDescription}
          placeholder="Add new item..."
          className="newItem"
        />
        <NewItemButtonContainer isDisabled={!newItemDescription.trim()}>
          <NewItemButton
            onClick={(event) => {
              event.stopPropagation();
              console.log("teste2");
            }}
            disabled={!newItemDescription.trim()}
          >
            <FaCirclePlus size="20px" color="#fff" />
          </NewItemButton>
        </NewItemButtonContainer>
      </NewItemInputContainer>
      <ItemContainer>
        <Item />
        {/* <ToDoItem>
          <EditButton
            onClick={() => console.log("EDITAR")}
            className="edit-button"
          >
            Editar Título
          </EditButton>
          <RemoveAddIconContainer>
            <IconContainer
              className="remove child-button"
              onClick={() => console.log("REMOVER")}
              title="Remover Item"
            >
              <FaCircleMinus size="20px" color="#fff" />
            </IconContainer>
            <IconContainer className="add child-button">
              <FaCircleCheck
                size="20px"
                color="#fff"
                onClick={() => console.log("ADICIONAR")}
                title="Adicionar Item"
              />
            </IconContainer>
          </RemoveAddIconContainer>
          <ToDoDescription>To DO ITEM 1</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 2</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 3</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 1</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 2</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 3</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 1</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 2</ToDoDescription>
        </ToDoItem>
        <ToDoItem>
          <ToDoDescription>To DO ITEM 3</ToDoDescription>
        </ToDoItem> */}
      </ItemContainer>
    </Container>
  );
}

export default App;

