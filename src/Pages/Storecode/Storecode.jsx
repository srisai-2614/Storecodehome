import './Storecode.css';
import Input from '../../Components/Input/Input';
import { Button } from '../../Components/Button/Button';

export const StoreCode= ()=>{
    return(
        <div className='Container'>
            <div className='Box'>
                <h2 className='Heading'>
                    Shop Smart with Storecode
                    <div className='InputBox'>
                        <Input/>
                    </div>
                    <div>
                    <Button/>
                    </div>
                    
                    
                </h2>
               
            </div>
        </div>
    )
}

