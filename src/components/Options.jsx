import { Select } from '@chakra-ui/react'


export const Options = ({handleFilters}) => {
 
  return (
    <Select onChange={handleFilters} size='md' width={200} bgColor="whiteAlpha.800" rounded='md'>
        <option value="all">Todas</option>
        <option value="complete">Completas</option>
        <option value="incomplete">Incompletas</option>
      </Select>
  );
};
