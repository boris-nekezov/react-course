import React from 'react';
import { Container } from 'react-bootstrap';

const PageContainer = ({ children }) => (
	<Container>
    <div style={{ padding: '10px' }}>
      {children}
    </div>
	</Container>
);

export default PageContainer;
