import { FaCirclePlus, FaCircleMinus, FaCircleCheck } from "react-icons/fa6";

import {
  BackgroundProgress,
  Container,
  DataContainer,
  DataContentContainer,
  DataDescriptionContainer,
  DayContainer,
  DayDescription,
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

const Input: React.FC<InputProps> = ({ placeholder, endIcon, ...props }) => (
  <StyledInputContainer>
    <StyledInput {...props} placeholder={placeholder} />
    {endIcon && <Icon />}
  </StyledInputContainer>
);

function App() {
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
        <StyledInput placeholder="Add new item..." className="newItem" />
        <NewItemButtonContainer>
          <NewItemButton>
            <FaCirclePlus size="20px" color="#fff" />
          </NewItemButton>
        </NewItemButtonContainer>
      </NewItemInputContainer>
      <ItemContainer>
        <ToDoItem>
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
        </ToDoItem>
      </ItemContainer>
    </Container>
  );
}

export default App;

