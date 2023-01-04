import React from 'react';
import { Box, Stack, IconButton, SvgIcon, } from '@mui/material';
import { ReactComponent as Shopping } from '../assets/shopping.svg';

const ShoppingCard = ({ shoppitems }) => {
    return (
        <>
            {shoppitems.length == 0 ?
                <>
                    <IconButton
                    >
                        <Shopping />
                    </IconButton>

                </>
                :
                <>
                    <Box
                        component={'div'}
                        style={{ direction: 'rtl' }}
                    >
                        <Box className={'shoppingcircle'}
                        >
                           {shoppitems.length}
                        </Box>

                        <IconButton>
                            <Shopping />
                        </IconButton>
                    </Box>
                </>
            }

        </>
    );
}

export default ShoppingCard;
