import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { WhatsApp, Twitter, Instagram, Facebook } from '@mui/icons-material';
import { styled } from '@mui/system';

const SidebarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  zIndex: 1000,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#fcb916',
  color: 'white',
  transition: 'transform 0.3s, background-color 0.3s',
  '&:hover': {
    backgroundColor: '#d1a014',
    transform: 'scale(1.1)',
  },
}));

const SocialMediaSidebar = () => {
  return (
    <SidebarContainer>
      <Tooltip title="WhatsApp" arrow>
        <StyledIconButton href="https://wa.me/923270477266"  target="_blank">
          <WhatsApp />
        </StyledIconButton>
      </Tooltip>
      {/* <Tooltip title="Twitter" arrow>
        <StyledIconButton href="https://twitter.com/yourusername" target="_blank">
          <Twitter />
        </StyledIconButton>
      </Tooltip> */}
      <Tooltip title="Instagram" arrow>
        <StyledIconButton href="https://www.instagram.com/sunitsolarsolutions?igsh=MW1udzIxaGd0Z2Fpdg==" target="_blank">
          <Instagram />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="Facebook" arrow>
        <StyledIconButton href="http://fb.com/sunitsolarsolutions" target="_blank">
          <Facebook />
        </StyledIconButton>
      </Tooltip>
    </SidebarContainer>
  );
};

export default SocialMediaSidebar;
