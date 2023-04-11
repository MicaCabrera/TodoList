import { Select } from '@chakra-ui/react'


export const Options = ({handleFilters}) => {
 
  return (
    <Select onChange={handleFilters} size='md' width={200} bgColor="whiteAlpha.800" rounded='md'>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </Select>
  );
};
