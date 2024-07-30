import {
  FaCirclePlus,
  FaCircleMinus,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";
import { Dispatch, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

interface IToDoItem {
  id: string;
  description: string;
  isDone: boolean;
  isVisible: boolean;
}

type TItemComponent = IToDoItem & {
  itemsSetState: Dispatch<SetStateAction<IToDoItem[]>>;
  itemsState: IToDoItem[];
};

const Item = ({
  description,
  id,
  itemsSetState,
  itemsState,
  isDone,
  isVisible,
}: TItemComponent) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [itemDescription, setItemDescription] = useState<string>(description);

  const handleOnChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemDescription(e.currentTarget.value);
  };

  const getItemsWithoutCurrent = () => {
    return itemsState.filter((item) => item.id !== id);
  };

  const handleToggleTaskCompletion = () => {
    itemsSetState((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleEditItem = () => {
    if (isDisabled) {
      setIsDisabled((oldValue) => !oldValue);
      return;
    }

    itemsSetState((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, description: itemDescription } : item
      )
    );

    setIsDisabled((oldValue) => !oldValue);

    // another way to do the setState its like that
    // const currentItem = itemsState.find((item) => item.id === id);
    // const filteredItems = getItemsWithoutCurrent();

    // itemsSetState([
    //   ...filteredItems,
    //   { id: currentItem?.id!, description: itemDescription },
    // ]);
    // or using reduce its a good option too
  };

  const handleRemoveItem = () => {
    const filteredItems = getItemsWithoutCurrent();
    itemsSetState(filteredItems);
  };

  if (!isVisible) return null;

  return (
    <ToDoItem isDisabled={isDisabled} isDone={isDone}>
      <EditButton onClick={() => handleEditItem()} className="edit-button">
        {isDisabled ? "Editar Task" : "Salvar"}
      </EditButton>
      <RemoveAddIconContainer>
        <IconContainer
          className="remove child-button"
          onClick={() => handleRemoveItem()}
          title="Remover Item"
        >
          <FaCircleMinus size="20px" color="#fff" />
        </IconContainer>
        <IconContainer
          isDone={isDone}
          className="add child-button"
          onClick={() => handleToggleTaskCompletion()}
        >
          {isDone ? (
            <FaCircleXmark
              size="20px"
              color="#fff"
              title="Cancelar Conclusão"
            />
          ) : (
            <FaCircleCheck size="20px" color="#fff" title="Concluir Item" />
          )}
        </IconContainer>
      </RemoveAddIconContainer>
      <ToDoDescription
        isDisabled={isDisabled}
        isDone={isDone}
        onChange={(e) => handleOnChangeDescription(e)}
        value={itemDescription}
        disabled={isDisabled}
      />
    </ToDoItem>
  );
};

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
  const [newItemDescription, setNewItemDescription] = useState<string>("");
  const [items, setItems] = useState<IToDoItem[]>([]);

  const handleChangeState = (
    e: React.FormEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.currentTarget.value);
  };

  const handleCreateToDoItem = () => {
    setItems((oldValue) => [
      ...oldValue,
      {
        id: uuidv4(),
        description: newItemDescription,
        isDone: false,
        isVisible: true,
      },
    ]);

    setNewItemDescription("");
  };

  const handleSearching = (e: React.FormEvent<HTMLInputElement>) => {
    const searchDescription = e.currentTarget.value;

    setItems((oldValue) =>
      oldValue.map((item) => ({
        ...item,
        isVisible: item.description
          .toLowerCase()
          .includes(searchDescription.toLowerCase()),
      }))
    );
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
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearching(e)
            }
            placeholder="Search Items"
            endIcon
          />
        </InputContainer>
        <FilterButtonContainer>
          <FilterButton className="mr">Done</FilterButton>
          <FilterButton>Pending</FilterButton>
        </FilterButtonContainer>
      </InputAndTagsContainer>
      <NewItemInputContainer>
        <StyledInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeState(e, setNewItemDescription)
          }
          value={newItemDescription}
          placeholder="Add new item..."
          className="newItem"
        />
        <NewItemButtonContainer isDisabled={!newItemDescription.trim()}>
          <NewItemButton
            onClick={(event) => {
              event.stopPropagation();
              handleCreateToDoItem();
            }}
            disabled={!newItemDescription.trim()}
          >
            <FaCirclePlus size="20px" color="#fff" />
          </NewItemButton>
        </NewItemButtonContainer>
      </NewItemInputContainer>
      <ItemContainer>
        {items.map((e: IToDoItem) => (
          <Item
            key={e.id}
            description={e.description}
            isDone={e.isDone}
            id={e.id}
            itemsSetState={setItems}
            itemsState={items}
            isVisible={e.isVisible}
          />
        ))}
      </ItemContainer>
    </Container>
  );
}

export default App;

