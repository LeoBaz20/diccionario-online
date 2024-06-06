import ListCard from '@/components/listCard';
import { Button } from '../components/MaterialTailwind';

const ListasUI = ({ lists }) => {

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <main className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Mis Listas</h1>
          <Button color="black">Nueva Lista</Button>
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

export default ListasUI;