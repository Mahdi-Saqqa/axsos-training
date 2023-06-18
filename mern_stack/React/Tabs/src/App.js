import React, { useState } from 'react';
import { Tabs, Tab, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Slide } from '@mui/material';

const StyledButton = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  margin: theme.spacing(0, 2),
}));

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
  ];
  const [value, setValue] = useState(0);
  const [content, setContent] = useState('');

  const clickTab = (event, newValue) => {
    setValue(newValue);
    setContent(tabs[newValue].content);
  };

  return (
    <div style={{ backgroundColor: '#222', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Tabs value={value} onChange={clickTab} indicatorColor="primary" textColor="primary">
            {tabs.map((tab, i) => (
              <StyledButton key={i} label={tab.title} value={i} />
            ))}
          </Tabs>
          <Slide in={true} direction="right">
            <Box sx={{ mt: 2, color: '#000' }}>{content}</Box>
          </Slide>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
