import React from 'react';
import { Card, CardBody, Typography, IconButton, Menu, MenuHandler, MenuList, MenuItem } from '../components/MaterialTailwind';
import { EllipsisVerticalIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

const ListCard = ({ title, wordCount, color }) => {
  return (
    <Card className={`bg-${color}-500 text-white relative mb-4`}>
      <CardBody>
        <Typography variant="h5" color="white" className='mb-8'>
          {title}
        </Typography>
        <Typography className='bottom-2'>
          {wordCount} {wordCount > 1 ? 'palabras' : 'palabra'}
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
          <MenuItem className='flex items-center gap-2'>
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