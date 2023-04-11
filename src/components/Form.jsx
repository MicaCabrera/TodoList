import { useState } from "react";
import { Input, Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";

export const Form = ({ addListTask }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      setError("Te faltó agregar una tarea!");
      return;
    }

    const newTask = {
      task: task,
      done: false,
      id: Math.random().toString(30).substring(2),
    };

    addListTask(newTask);
    setTask("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex display="flex">
        <div>
          <label htmlFor="task"></label>
          <Input
            id="task"
            name="task"
            autoComplete="off"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="ej. limpiar"
            size="md"
            width="200px"
            bgColor="whiteAlpha.800"
            rounded="md"
          />
        </div>
        <div>
          <Button
            size="md"
            backgroundColor="brand.secondary"
            type="submit"
            ml="4px"
            mr="4px"
          >
            Send
          </Button>
        </div>
      </Flex>
      {error && (
        <Alert status="warning" p="1" mt="2">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </form>
  );
};
