import React from 'react';
import { Card, CardBody, Typography, IconButton, Menu, MenuHandler, MenuList, MenuItem, Dialog } from '../MaterialTailwind';
import { EllipsisVerticalIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { UpdateList } from './UpdateList';

const ListCard = ({ id, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <Card className={`bg-blue-500 text-white relative mb-4`}>
      <CardBody>
        <Typography variant="h5" color="white" className='mb-8'>
          {name}
        </Typography>
        <Typography className='bottom-2'>
          # de palabras
        </Typography>
      </CardBody>
      <div className="absolute bottom-2 right-2">
        <Menu>
          <MenuHandler>
            <IconButton
              color="white"
              variant="text"
            >
              <EllipsisVerticalIcon className="h-5 w-5" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem className='flex items-center gap-2' onClick={handleOpen}>
              <PencilIcon className="h-3 w-3"></PencilIcon>
              <Typography variant='small' className='font-medium'>Editar Lista</Typography>
            </MenuItem>
            <hr className="my-1" />
            <MenuItem className='flex items-center gap-2'>
              <TrashIcon className="h-3 w-3" color='red' ></TrashIcon>
              <Typography variant='small' className='font-medium' color='red'>Eliminar Lista</Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Card>
  );
}

export default ListCard;