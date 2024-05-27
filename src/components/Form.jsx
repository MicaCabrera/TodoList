import { useState } from "react";
import { Input, Button, Flex, Alert, AlertIcon, Select } from "@chakra-ui/react";

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
      <Flex direction={{ base: "column", md: "row" }} alignItems="center" pr={1}>
        <Input
          id="task"
          name="task"
          autoComplete="off"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="ej. limpiar"
          size="md"
          width={{ base: "100%", md: "200px" }}
          bgColor="whiteAlpha.800"
          rounded="md"
          mb={{ base: "2", md: "0" }}
          mr={{ base: "0", md: "4px" }}
        />
        <Button
          size="md"
          backgroundColor="brand.secondary"
          type="submit"
          width={{ base: "100%", md: "auto" }}
          my={{ base: "2", md: "0" }}  
      
        >
          Send
        </Button>
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
