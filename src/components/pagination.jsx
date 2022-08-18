import React from 'react';
import { Box,Pagination, PaginationItem } from '@mui/material';


export default function Apagination() {
    return(
        <Box justifyContent={"center"} alignItems="center" py={{xs:2}} display={"flex"}>
          <Pagination 
            count={5}
          />
          </Box>
    )
}