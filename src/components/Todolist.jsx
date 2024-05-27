import { Button, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { List, Flex } from "@chakra-ui/react";

export const Todolist = ({
  listTask,
  handleRemove,
  handleToggle,
  filterValue,
}) => {
  const filterTodoList = listTask.filter((task) => {
    if (filterValue === "complete") {
      return task.done;
    } else if (filterValue === "incomplete") {
      return !task.done;
    } else {
      return true;
    }
  });

  const todoList = filterTodoList.map((task) => (
    <List
      w={{ base: "100%", md: "400px" }}
      key={task.id}
      style={{
        textDecoration: task.done ? "line-through" : "none",
        color: task.done && "gray",
      }}
    >
      <Flex
        fontSize="xl"
        justify="space-between"
        bgColor="brand.primary"
        mt="2"
        p="2"
        rounded="md"
        direction={{ base: "column", sm: "row" }}  
      >
        <div> {task.task} </div>
        <Flex justifyContent="flex-end" alignItems="center">
          <Button
            m="4px"
            p="1"
            colorScheme="red"
            size="xs"
            as={DeleteIcon}
            onClick={() => handleRemove(task.id)}
          />
          <Button
            color="white"
            p="1"
            colorScheme="green"
            size="xs"
            as={CheckIcon}
            onClick={() => handleToggle(task.id)}
          />
        </Flex>
      </Flex>
    </List>
  ));

  return (
    <div>
      {listTask.length ? (
        <ul> {todoList} </ul>
      ) : (
        <Text fontSize="xl" bgColor="whiteAlpha.700" p="2px" rounded="md">
          La lista está vacía
        </Text>
      )}
    </div>
  );
};
