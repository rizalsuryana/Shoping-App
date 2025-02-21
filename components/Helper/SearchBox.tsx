import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { SearchIcon } from 'lucide-react';
import React from 'react';

type SearcBoxPros = {
  keyword : string;
  keywordChange :  (value: string) => void;
}

const SearchBox = ({keyword, keywordChange} : SearcBoxPros) => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon
          size={26}
          cursor={'pointer'}
        />
      </DialogTrigger>
      <DialogContent>
        <form>
          <input type="text" placeholder='Search Product' className='block w-full bg-gray-300
                rounded-lg px-6 py-2 mt-4 outline-none' 
                value={keyword}
                onChange={(event)=> keywordChange(event.target.value)}
                />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;