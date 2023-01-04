import React from 'react';
import mainIcon from '../assets/MainIcon.png';
import { Box, Paper, InputBase, Stack, IconButton, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LanguageIcon from '@mui/icons-material/Language';

import ShoppingCard from './ShoppingCard';

import { ReactComponent as Gem } from '../assets/gem.svg';


const TopHeader = () => {
    return (
        <Stack
            className={'Header'}
            direction={'row'}
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
            <Box
                component={'img'}
                src={mainIcon}
                style={{ width: '75px' }}
                sx={{ pl: '10px' }}

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
                style={{ height: 'max-content', borderRadius: '70px' ,boxShadow:"none"}}
                sx={{ pl: 1.5,pr:0.5, py: 0.05 }}
                component={'form'}>
                <InputBase
                    style={{ width: '500px' }}
                    placeholder={'Search...'}
                />
                <IconButton
                    sx={{ px: 0,py:0.5 }}
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
                        color={'primary'}
                        sx={{ p: 0 }}
                    >

                        <LanguageIcon
                            style={{ fontSize: '40px' }} />
                    </IconButton>
                    <Typography
                        textAlign={'center'}
                        color={'primary'}
                    >en
                    </Typography>
                </Stack>

            </Stack>


        </Stack >
    );
}

export default TopHeader;
