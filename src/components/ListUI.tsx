import React from "react";
import ListCard from '@/components/listCard';
import NewList from "./NewList";
import { Button, Dialog } from './MaterialTailwind';

const ListUI = ({ lists }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <main className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Mis Listas</h1>
          <Button color="black" onClick={handleOpen}>Nueva Lista</Button>
          <Dialog
                  size="xs"
                  open={open}
                  handler={handleOpen}
                  className="bg-transparent shadow-none"
          >
          <NewList/>
          </Dialog>
        </div>
        <div className="space-y-4">
          {lists.map((list, index) => (
            <ListCard key={index} {...list} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListUI;