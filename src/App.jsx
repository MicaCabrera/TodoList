import { useState } from "react";
import { Form } from "./components/Form";
import { Todolist } from "./components/Todolist";
import { Options } from "./components/Options";
import { Box, Button, Flex } from "@chakra-ui/react";
import image from "./assets/fondoai-01.jpg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function App() {
  const [listTask, setListTask] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const addListTask = (newTask) => {
    setListTask((prev) => [...prev, newTask]);
  };

  const handleRemove = (id) => {
    setListTask((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setListTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  const handleFilters = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <Flex
      justify="center"
      alignItems="center"
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      height="100vh"
      maxW="full"
    >
      <Box pos="absolute" top="4" left="14">
        <Popover placement="right-start">
          <PopoverTrigger>
            <Button backgroundColor="brand.secondary">Clickme</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader bg="brand.primary" fontWeight="semibold">
              Bienvenidx al TodoList !
            </PopoverHeader>
            <PopoverBody>
              Podés agregar tareas apretando el botón 'Send', marcarlas como
              hechas con la tilde verde o eliminarlas! Para encontrar alguna
              tarea más rápido podés ultilizar los filtros.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>

      <Box
        height="300px"
        maxWidth="fit-content"
        boxShadow="2xl"
        p="6"
        rounded="md"
        bgColor="whiteAlpha.300"
      >
        <Flex>
          <Box>
            <Form addListTask={addListTask} />
          </Box>
          <Box>
            <Options listTask={listTask} handleFilters={handleFilters} />
          </Box>
        </Flex>

        <Flex alignItems="center" justify="center" p={5}>
          <Todolist
            listTask={listTask}
            filterValue={filterValue}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
            handleFilters={handleFilters}
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
