import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const footerStyle = {
  height: '100px', 
  backgroundColor:'#f5f5f5',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
export default function Footer() {
  return (
    <div  style={footerStyle}>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: '#fff' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/srisai-2614'>
          github.com/srisai-2614
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}