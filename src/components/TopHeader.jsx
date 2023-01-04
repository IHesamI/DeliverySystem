import React from 'react';
import mainIcon from '../assets/MainIcon.jpg';
import { Box, Paper, InputBase, Stack, IconButton, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LanguageIcon from '@mui/icons-material/Language';

import ShoppingCard from './ShoppingCard';

import { ReactComponent as Gem } from '../assets/gem.svg';


const TopHeader = () => {
    return (
        <Stack
            direction={'row'}
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
            <Box
                component={'img'}
                src={mainIcon}
                style={{ width: '75px' }}
            />

            <Stack
                direction={'row'}
                style={{ alignItems: 'center' }}
                gap={9}>

                <ShoppingCard
                    shoppitems={[1, 1, 2]} />

                <IconButton
                    sx={{ p: 0.5 }}
                    size={'large'}
                    color={'primary'} >
                    <PermIdentityIcon
                        style={{ fontSize: '50px' }} />
                </IconButton>

            </Stack>


            <Paper
                style={{ height: 'max-content', borderRadius: '70px' }}
                sx={{ px: 1.5, py: 0.05 }}
                component={'form'}>
                <InputBase
                    style={{ width: '500px' }}
                    placeholder={'Search...'}
                />
                <IconButton
                    sx={{ p: 0.5 }}
                    size={'large'}
                    color={'primary'} >
                    <CheckCircleIcon
                        style={{ fontSize: '30px' }} />
                </IconButton>
            </Paper>
            <Stack
                direction={'row'}
                style={{ alignItems: 'center' }}
                gap={10}>
                <Stack>
                    <Gem />
                    <Typography
                        textAlign={'center'}
                        color={'#9450E0'}>
                        123
                    </Typography>
                </Stack>
                <Stack
                 sx={{ px: 1 }}>
                    <IconButton
                        sx={{ p: 0 }}
                        style={{ color: 'rgba(0,0,0,1)' }}>

                        <LanguageIcon
                            style={{ fontSize: '40px' }} />
                    </IconButton>
                    <Typography
                        textAlign={'center'}
                    // color={'#9450E0'}
                    >
                        en
                    </Typography>
                </Stack>

            </Stack>


        </Stack >
    );
}

export default TopHeader;
